require("dotenv").config()
const Passport = require("passport")
const User = require("../models/User")
const Bcrypt = require("bcryptjs")

const BCRYPT_SALT_ROUNDS = 12

const authenticationHelper = (req, res, next, options, type, callback) => {
  Passport.authenticate(type, { ...options }, function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err })
    }
    if (info !== undefined) {
      return res.status(500).send(info.message)
    }

    // else if (
    //   user.email === req.query.email ||
    //   user.email === req.body.email
    // ) {
    //   callback(user);
    // }
    else {
      callback(user)
      // res.status(403).send("User Not Authorized");
    }
  })(req, res, next)
}

const authenticationHelperandUpdatePassword = (
  req,
  res,
  data,
  pass,
  callback
) => {
  Bcrypt.hash(pass, BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
    const dataToBeUpdated = { password: hashedPassword }
    User.findOneAndUpdate(
      { email: data.email },
      { $set: dataToBeUpdated }
    ).then((user) => {
      callback(user)
    })
  })
}

const adminAuthenticationHelper = (req, res, next, callback) => {
  if (req.query.secret === process.env.ADMIN_PASSWORD) {
    callback()
  } else {
    res.status(403).send("User Not Authorized")
  }
}

const authenticationSocialHelper = (
  req,
  res,
  next,
  options,
  type,
  callback
) => {
  Passport.authenticate(type, { ...options }, function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err })
    }
    callback(user)
  })(req, res, next)
}

module.exports = {
  authenticationHelper,
  adminAuthenticationHelper,
  authenticationSocialHelper,
  authenticationHelperandUpdatePassword,
}
