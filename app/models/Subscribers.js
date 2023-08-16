const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Subscribers = new Schema(
  {
    email: {
      type: String
    }
  },
  {
    strict: false
  }
);

module.exports = Mongoose.model("subscribers", Subscribers);
