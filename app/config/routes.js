"use strict"

const {
  signin,
  signOut,
  getUser,
  getUsers,
  register,
  updateUser,
  updateResponses,
  getCareerData,
  getCareerList,
  getBlogList,
  getBlogData,
  updateUserPackage,
  removeUserJourney,
  saveEvaluation,
  sendEmail,
  updateSessionCallData,
  googleSignIn,
  googleSignInCallback,
  facebookSignIn,
  facebookSignInCallback,
  setPaymentOrder,
  verifyPayment,
  validateUser,
  paymentInitiate,
  subscribe,
  getSubscribers,
  addEvent,
  getEvents,
  updateEventStatus,
  registerForEvent,
  deleteEvent,
  getEventsRegistrations,
  addOffer,
  deleteOffer,
  getAllOffers,
  getOffer,
  updateOfferCount,
  authenticationUserEmail,
  downloadFile,
  uploadFile,
  forgetPasswordMail,
  forgetPasswordRedirecting,
  updateUserPassword,
  resendVerificationMail,
  getUserReport,
  updateGuidedTour,
  addContactQuery,
  addHomeModalData,
} = require("../controllers")
const multer = require("multer")
const multerConfig = multer()

// Define all routes and controllers
module.exports = function (server) {
  server.get("/user", getUser)
  server.get("/users", getUsers)
  server.post("/signin", signin)
  server.get("/signout", signOut)
  server.post("/subscribe", subscribe)
  server.post("/register", register)
  server.post("/update", updateUser)
  server.post("/validate", validateUser)
  server.get("/subscribers", getSubscribers)
  server.get("/blogs/:blog", getBlogData)
  server.get("/bloglist", getBlogList)
  server.get("/careers/:career", getCareerData)
  server.get("/careerlist", getCareerList)
  server.post("/session", updateSessionCallData)
  server.post("/updatepackage", updateUserPackage)
  server.post("/removejourney", removeUserJourney)
  server.post("/updateResponses", updateResponses)
  server.post("/evaluate", saveEvaluation)
  server.post("/api/send-email", sendEmail)
  server.get("/confirmation/:token", authenticationUserEmail)
  server.post("/forgetpasswordmail", forgetPasswordMail)
  server.get("/forgetredirect/:token", forgetPasswordRedirecting)
  server.put("/updatepassword", updateUserPassword)
  server.post("/resendverificationmail", resendVerificationMail)

  //Social Login Routes
  server.get("/auth/google", googleSignIn)
  server.get("/auth/google/callback", googleSignInCallback)
  server.get("/auth/facebook", facebookSignIn)
  server.get("/auth/facebook/callback", facebookSignInCallback)
  //Payment Gateway routes
  server.post("/paymentorder", setPaymentOrder)
  server.post("/paymentInitiate", paymentInitiate)
  server.post("/verify", verifyPayment)
  //Event API's
  server.get("/event", getEvents)
  server.post("/event", addEvent)
  server.put("/event", updateEventStatus)
  server.delete("/event/:id", deleteEvent)
  server.post("/eventregister", registerForEvent)
  server.get("/eventregistrations", getEventsRegistrations)
  //Offer API's
  server.get("/offerregistrations", getAllOffers)
  server.delete("/offer/:id", deleteOffer)
  server.post("/offer", addOffer)
  server.put("/offer", updateOfferCount)
  server.get("/offer", getOffer)
  //File Upload
  server.get("/download", downloadFile)
  server.post("/upload", multerConfig.single("file"), uploadFile)
  //User Report
  server.get("/userreport/:id", getUserReport)
  server.put("/updateguidedtour", updateGuidedTour)
  //Contact Form
  server.post("/contactquery", addContactQuery)
  server.post("/homemodaldata", addHomeModalData)
}
