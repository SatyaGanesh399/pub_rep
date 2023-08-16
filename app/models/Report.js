const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Report = new Schema(
  {
    name: {
      type: String,
      select: true
    },
    url: {
      type: String,
      select: true
    },
    mime: {
      type: String,
      select: true
    }
  },
  {
    strict: true
  }
);

module.exports = Mongoose.model("report", Report, "upload_file");
