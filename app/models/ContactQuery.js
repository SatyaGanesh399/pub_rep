const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ContactQuery = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    guidanceType: {
      type: Array,
      default: []
    },
    date: {
      type: Date,
      default: Date.now,
      select: false
    }
  },
  {
    strict: false
  }
);

module.exports = Mongoose.model("contactqueries", ContactQuery);
