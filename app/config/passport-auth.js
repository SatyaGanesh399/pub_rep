require("dotenv").config()
const Bcrypt = require("bcryptjs")
const Passport = require("passport")
const process = require("process")
const LocalStrategy = require("passport-local").Strategy
const JWTstrategy = require("passport-jwt").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt

const BCRYPT_SALT_ROUNDS = 12

const User = require("../models/User")

Passport.serializeUser((user, done) => {
  done(null, user.id)
})

Passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

const registerStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
    session: false,
  },
  (req, email, password, done) => {
    try {
      User.findOne({ email: email })
        .then((user) => {
          if (user != null) {
            return done(null, false, {
              message: "Email already registered",
            })
          }
          Bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
            const newUser = new User({ email, password: hashedPassword })
            newUser
              .save()
              .then((user) => {
                return done(null, user)
              })
              .catch((err) => {
                return done(null, false, { message: err })
              })
          })
        })
        .catch((err) => {
          return done(null, false, { message: err })
        })
    } catch (err) {
      return done(err)
    }
  }
)

const signInStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
  },
  (email, password, done) => {
    try {
      User.findOne({ email: email })
        .select("+password")
        .then((user) => {
          if (user === null) {
            return done(null, false, { message: "User not found" })
          }
          Bcrypt.compare(password, user.password).then((response) => {
            if (response !== true) {
              return done(null, false, { message: "Password do not match" })
            }
            return done(null, user)
          })
        })
        .catch((err) => {
          return done(null, false, { message: err })
        })
    } catch (err) {
      done(err)
    }
  }
)

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: process.env.JWT_SECRET,
}

const jwtStrategy = new JWTstrategy(opts, (jwt_payload, done) => {
  try {
    User.findOne({ email: jwt_payload.email })
      .then((user) => {
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      })
      .catch((err) => {
        return done(null, false, { message: err })
      })
  } catch (err) {
    done(err)
  }
})

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    return done(undefined, profile, undefined)
  }
)

const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_AUTH_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_AUTH_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "photos", "emails"],
  },
  function (accessToken, refreshToken, profile, done) {
    return done(undefined, profile, undefined)
  }
)

Passport.use("register", registerStrategy)
Passport.use("signin", signInStrategy)
Passport.use("jwt", jwtStrategy)
Passport.use("googleAuth", googleStrategy)
Passport.use("facebookAuth", facebookStrategy)

module.exports = Passport
