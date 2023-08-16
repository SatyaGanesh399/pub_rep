const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const HomeModalData = new Schema(
  {
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

module.exports = Mongoose.model("homemodaldata", HomeModalData);
