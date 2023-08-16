require("dotenv").config()
const {
  authenticationHelper,
  authenticationSocialHelper,
  authenticationHelperandUpdatePassword,
} = require("../helpers/authenticationHelper")
const sessionEmailController = require("./sessionEmail.controller")
const emailUserAuthentication = require("../utils/emailUserAuthentication")
const forgetPasswordAuthentication = require("../utils/forgetPasswordAuthentication")
const createUserSchema = require("../utils/createUserSchema")
const jwtSign = require("../utils/jwtSign")
const User = require("../models/User")
const {
  findUserHelper,
  findUserAndSendHelper,
  createUserHelper,
  findUserAndUpdateHelper,
  findUserAndUpdateGuidedTour,
} = require("../helpers/userHelper")
const Jwt = require("jsonwebtoken")

const register = (req, res, next) => {
  const request = req
  authenticationHelper(
    request,
    res,
    next,
    { session: false },
    "register",
    (user) => {
      req.logIn(user, (err) => {
        if (err) {
          console.log("err", err)
          return res.status(400).json({ errors: err })
        }
        const data = {
          ...createUserSchema(),
          name: req.body.name,
          phone: req.body.phone,
        }
        findUserAndUpdateHelper(res, { email: user.email }, data, () => {
          const newUser = { email: user.email, name: data.name, _id: user._id }
          const token = Jwt.sign(
            { email: newUser.email },
            process.env.JWT_SECRET
          )
          emailUserAuthentication({ toUser: newUser, token })
            .then(() => {
              console.log(
                "We have sent Activation link to your register Mail. Please verify before login"
              ) //what better option we can choose instead of console can not send the message in response
            })
            .catch((err) => {
              console.log(err)
            })
          return res.status(200).send({
            message: "User successfully registered.",
          })
        })
      })
    }
  )
}

const resendVerificationMail = async (req, res, next) => {
  findUserAndSendHelper(res, { email: req.body.email }, (user) => {
    if (user) {
      const newUser = { email: user.email, name: user.name, _id: user._id }
      const token = Jwt.sign({ email: newUser.email }, process.env.JWT_SECRET)
      emailUserAuthentication({ toUser: newUser, token })
        .then(() => {
          return res.status(200).send(true)
        })
        .catch((err) => {
          console.log(err)
          return res.status(400).send(false)
        })
    }
  })
}

const forgetPasswordMail = async (req, res, next) => {
  findUserAndSendHelper(res, { email: req.body.email }, (user) => {
    if (user !== null) {
      const newUser = { email: user.email, name: user.name, _id: user._id }
      const token = Jwt.sign(
        { userEmail: newUser.email },
        process.env.JWT_SECRET
      )
      forgetPasswordAuthentication({ toUser: newUser, token })
        .then(() => {
          console.log(
            "We have sent a link to change your password at register Mail."
          )
        })
        .catch((err) => {
          console.log(err)
        })
      return res.status(200).send(true)
    }
    return res.status(400).send(false)
  })
}

const forgetPasswordRedirecting = async (req, res, next) => {
  const { token } = req.params
  Jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      res.send(err)
    } else {
      return res
        .status(200)
        .redirect(`/changepassword?email=${verifiedJwt.userEmail}`)
    }
  })
}

const updateUserPassword = async (req, res, next) => {
  const password = req.body.password
  authenticationHelperandUpdatePassword(
    req,
    res,
    { email: req.body.email },
    password,
    (user) => {
      if (user != null) {
        return res
          .status(200)
          .send({ message: "Your password has been reset successfully" })
      } else {
        return res.redirect("/changepassword")
      }
    }
  )
}

const authenticationUserEmail = async (req, res) => {
  const { token } = req.params
  Jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      res.send(err)
    } else {
      const data = { email_is_verified: true }
      findUserAndUpdateHelper(res, { email: verifiedJwt.email }, data, () => {
        return res.status(200).redirect("/authentication")
      })
    }
  })
}

const signIn = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "signin", (user) => {
    if (user.email_is_verified === false) {
      return res.status(400).send("Unverified")
    } else {
      const JWT_TOKEN = jwtSign(user.email)

      return res.status(200).send({
        auth: true,
        token: JWT_TOKEN,
        msg: "User logged In",
      })
    }
  })
}

const googleSignIn = (req, res, next) => {
  authenticationSocialHelper(
    req,
    res,
    next,
    { scope: ["profile", "email"] },
    "googleAuth"
  )
}

const googleSignInCallback = async (req, res, next) => {
  await authenticationSocialHelper(
    req,
    res,
    next,
    {},
    "googleAuth",
    (userData) => {
      findUserAndSendHelper(
        res,
        { email: userData.emails[0].value },
        (foundUserData) => {
          if (foundUserData !== null) {
            const JWT_TOKEN = jwtSign(foundUserData.email)
            return res
              .status(200)
              .cookie("jwt", JWT_TOKEN, { httpOnly: true })
              .redirect("/dashboard")
          } else {
            createUserHelper(
              res,
              {
                ...createUserSchema(),
                googleid: userData.id,
                email: userData.emails[0].value,
                email_is_verified: userData.emails[0].verified,
                name: userData.displayName,
              },
              (user) => {
                const JWT_TOKEN = jwtSign(user.email)
                return res
                  .status(200)
                  .cookie("jwt", JWT_TOKEN, {
                    httpOnly: true,
                  })
                  .redirect("/dashboard")
              }
            )
          }
        }
      )
    }
  )
}

const facebookSignIn = (req, res, next) => {
  authenticationSocialHelper(
    req,
    res,
    next,
    { scope: ["email"] },
    "facebookAuth"
  )
}

const facebookSignInCallback = (req, res, next) => {
  authenticationSocialHelper(req, res, next, {}, "facebookAuth", (userData) => {
    findUserAndSendHelper(
      res,
      { email: userData.emails[0].value },
      (foundUserData) => {
        if (foundUserData !== null) {
          const JWT_TOKEN = jwtSign(foundUserData.email)
          return res
            .status(200)
            .cookie("jwt", JWT_TOKEN, { httpOnly: true })
            .redirect("/dashboard")
        } else {
          createUserHelper(
            res,
            {
              ...createUserSchema(),
              facebookid: userData.id,
              email: userData.emails[0].value,
              email_is_verified: true,
              name: userData.displayName,
            },
            (user) => {
              const JWT_TOKEN = jwtSign(user.email)
              return res
                .status(200)
                .cookie("jwt", JWT_TOKEN, {
                  httpOnly: true,
                })
                .redirect("/dashboard")
            }
          )
        }
      }
    )
  })
}

const getSignedInUser = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "jwt", (user) => {
    findUserHelper(res, { email: user.email }, (userData) => {
      return res.status(200).send(userData)
    })
  })
}

const validateUser = (req, res, next) => {
  findUserAndSendHelper(res, { email: req.body.email }, (user) => {
    if (user !== null) {
      return res.status(200).send({ status: true, package: user.package })
    }
    return res.status(200).send({ status: false, package: "none" })
  })
}

const updateUser = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "jwt", (user) => {
    findUserAndUpdateHelper(res, { email: user.email }, req.body, () => {
      return res.status(200).send({ message: "User data updated successfully" })
    })
  })
}

const updateSessionCallData = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "jwt", (user) => {
    User.findOneAndUpdate(
      {
        email: user.email,
        "sessions.id": req.body.id,
      },
      {
        $set: {
          "sessions.$.sessionDate": req.body.sessionDate,
          "sessions.$.sessionTime": req.body.sessionTime,
          "sessions.$.sessionType": req.body.sessionType,
          "sessions.$.sessionStatus": req.body.sessionStatus,
          "sessions.$.sessionLink": req.body.sessionLink,
          "sessions.$.sessionLinkPassword": req.body.sessionLinkPassword,
          "sessions.$.sessionLocation": req.body.sessionLocation,
        },
      }
    ).then((user) => {
      if (user != null) {
        req.query = {
          maillist: [user.email, process.env.MAIL_TO],
        }
        sessionEmailController(req, res)
          .then((response) => {
            return res
              .status(200)
              .send({ message: "User session updated successfully" })
          })
          .catch((err) => {
            res.status(500).send({ message: err })
          })
      } else {
        res.status(401).send("User not found")
      }
    })
  })
}

const signOut = (req, res) => {
  req.logOut((err) => {
    if (err) {
      console.error("Error during logout:", err)
      return res.status(500).send("Error during logout")
    }
    res.redirect("/")
  })
}

const updateGuidedTour = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "jwt", (user) => {
    findUserAndUpdateGuidedTour(res, { email: user.email }, req.body, () => {
      return res
        .status(200)
        .send({ message: "Guided tour updated Successfully!" })
    })
  })
}

module.exports = {
  register,
  signIn,
  signOut,
  googleSignIn,
  googleSignInCallback,
  facebookSignIn,
  facebookSignInCallback,
  updateUser,
  validateUser,
  getSignedInUser,
  updateSessionCallData,
  authenticationUserEmail,
  forgetPasswordMail,
  forgetPasswordRedirecting,
  updateUserPassword,
  resendVerificationMail,
  updateGuidedTour,
}
