const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const User = new Schema(
  {
    googleid: {
      type: String,
      select: false
    },
    facebookid: {
      type: String,
      select: false
    },
    orderid: {
      type: String,
      select: false
    },
    receiptid: {
      type: String,
      select: false
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      select: false
    },
    date: {
      type: Date,
      default: Date.now,
      select: false
    },
    phone: {
      type: String
    },
    classval: {
      type: String
    },
    school: {
      type: String
    },
    gender: {
      type: String
    },
    dateofbirth: {
      type: String
    },
    city: {
      type: String
    },
    fathername: {
      type: String
    },
    mothername: {
      type: String
    },
    age: {
      type: Number
    },
    package: {
      type: String
    },
    journey: {
      type: Array
    },
    testResponses: {},
    testResults: {},
    testEvaluation: {},
    sessions: {
      type: Array
    },
    avatar: {
      type: String
    },
    report: {
      type: String
    },
    promocode: {
      type: String
    },
    guidedtour: {
      type: Boolean,
      default: true
    }
  },
  {
    strict: false,
    timestamps: true
  }
);

module.exports = Mongoose.model("users", User);
