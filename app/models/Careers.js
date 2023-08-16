const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Careers = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    titleImg: {
      type: String,
      required: true
    },
    titleText: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      default: [],
      required: true
    },
    options: {},
    job: {
      type: Array,
      default: [],
      required: true
    },
    personalities: {
      type: Array
    },
    institute: {
      type: Array
    },
    pros: {
      type: Array
    },
    cons: {
      type: Array
    },
    slug: {
      type: String
    },
    careerCategory: {
      type: String
    }
  },
  {
    strict: false
  }
);

module.exports = Mongoose.model("careers", Careers);
