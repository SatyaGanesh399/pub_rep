const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

let Blogs = new Schema({
  title: String,
  author: String,
  description: String,
  date: { type: Date, default: Date.now },
  imageURL: String,
  slug: String
});
module.exports = Mongoose.model("blogs", Blogs);
