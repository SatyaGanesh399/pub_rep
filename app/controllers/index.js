const {
  signIn,
  signOut,
  register,
  updateUser,
  validateUser,
  googleSignIn,
  facebookSignIn,
  getSignedInUser,
  googleSignInCallback,
  updateSessionCallData,
  facebookSignInCallback,
  authenticationUserEmail,
  forgetPasswordMail,
  forgetPasswordRedirecting,
  updateUserPassword,
  resendVerificationMail,
  updateGuidedTour
} = require("./authentication.controller");
const {
  getAllUsers,
  updateUserPackage,
  removeUserJourney,
  getAllSubscribers,
  addEvent,
  getEvents,
  deleteEvent,
  updateEventStatus,
  getEventsRegistrations,
  addOffer,
  getOffer,
  deleteOffer,
  getAllOffers,
  updateOfferCount
} = require("./admin.controller");
const { updateResponses, saveEvaluation } = require("./test.controller");
const { getCareerData, getCareerList } = require("./career.controller");
const { getBlogData, getBlogList } = require("./blog.controller");
const {
  setPaymentOrder,
  verifyPayment,
  paymentInitiate
} = require("./payment.controller");
const { subscribe } = require("./subscribe.controller");
const { registerForEvent } = require("./register.controller");
const { downloadFile, uploadFile } = require("./upload.controller");
const { getUserReport } = require("../controllers/report.controller");
const { addContactQuery } = require("../controllers/contact.controller");
const { addHomeModalData } = require("./home.controller");
module.exports = {
  signin: signIn,
  signOut: signOut,
  addEvent: addEvent,
  addOffer: addOffer,
  register: register,
  subscribe: subscribe,
  getEvents: getEvents,
  getOffer: getOffer,
  getUsers: getAllUsers,
  uploadFile: uploadFile,
  updateUser: updateUser,
  getUser: getSignedInUser,
  deleteEvent: deleteEvent,
  deleteOffer: deleteOffer,
  downloadFile: downloadFile,
  validateUser: validateUser,
  googleSignIn: googleSignIn,
  verifyPayment: verifyPayment,
  facebookSignIn: facebookSignIn,
  getBlogData: getBlogData,
  getBlogList: getBlogList,
  getCareerData: getCareerData,
  getCareerList: getCareerList,
  updateResponses: updateResponses,
  getSubscribers: getAllSubscribers,
  saveEvaluation: saveEvaluation,
  paymentInitiate: paymentInitiate,
  setPaymentOrder: setPaymentOrder,
  updateUserPassword: updateUserPassword,
  updateUserPackage: updateUserPackage,
  registerForEvent: registerForEvent,
  updateEventStatus: updateEventStatus,
  removeUserJourney: removeUserJourney,
  forgetPasswordMail: forgetPasswordMail,
  googleSignInCallback: googleSignInCallback,
  updateSessionCallData: updateSessionCallData,
  getEventsRegistrations: getEventsRegistrations,
  getAllOffers: getAllOffers,
  updateOfferCount: updateOfferCount,
  facebookSignInCallback: facebookSignInCallback,
  authenticationUserEmail: authenticationUserEmail,
  forgetPasswordRedirecting: forgetPasswordRedirecting,
  resendVerificationMail: resendVerificationMail,
  sendEmail: require("./sendEmail.controller.js"),
  sessionEmail: require("./sessionEmail.controller.js"),
  getUserReport: getUserReport,
  updateGuidedTour: updateGuidedTour,
  addContactQuery: addContactQuery,
  addHomeModalData: addHomeModalData
  // resendVerificationMail: require("./resendEmail.controller")
};
