require("dotenv").config()
const express = require("express")
var cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const passport = require("./config/passport-auth")
const session = require("express-session")
const MongoStore = require("connect-mongo")
mongoose
  .connect(process.env.DATABASE_URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log(`MongoDB connected`))
  .catch((err) => console.log(err))

const { app, port } = require("./config")
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    const whitelist =
      process.env.ALLOWED_ORIGIN && process.env.ALLOWED_ORIGIN.split(",")
    const corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error("Not allowed"))
        }
      },
    }
    server.options("*")
    server.post("*")

    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    const options = {
      mongoUrl: process.env.DATABASE_URL,
      collection: "sessions",
      ttl: 3600,
      autoRemove: "interval",
      autoRemoveInterval: 60,
    }
    server.use(
      session({
        secret: "keyboard cat",
        store: new MongoStore(options),
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
      })
    )
    // Passport middleware
    server.use(passport.initialize())

    // Enable Cors
    server.use(cors())

    // Define routes here
    require("./config/routes")(server)

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log("> Ready on " + port)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
