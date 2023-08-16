const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Offers = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    },
    count: {
      type: String || Number,
      required: true
    },
    datetimeOfCreation: {
      type: Date,
      required: true
    },
    datetimeOfExpire: {
      type: Date,
      required: true
    }
  },
  {
    strict: false
  }
);

module.exports = Mongoose.model("offers", Offers);
