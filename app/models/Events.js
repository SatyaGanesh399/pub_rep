const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Events = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    },
    datetime: {
      type: Date,
      required: true
    },
    registrations: {
      type: Array,
      default: [],
      select: false
    }
  },
  {
    strict: false
  }
);

module.exports = Mongoose.model("events", Events);
