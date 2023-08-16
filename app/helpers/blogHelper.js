const Blogs = require("../models/Blogs");

const findOneBlogHelper = (res, data, callback) => {
  Blogs.findOne({ slug: data.slug }).then(blog => {
    if (blog != null) {
      callback(blog);
    } else {
      res.status(401).send("blog not found");
    }
  });
};

const findBlogListHelper = (res, callback) => {
  Blogs.find(
    {},
    {
      title: 1,
      slug: 1,
      category: 1,
      _id: 0,
      author: 1,
      published: 1,
      blog_bgImg: 1
    }
  ).then(blogList => {
    if (blogList != null) {
      callback(blogList);
    } else {
      res.status(401).send("blog List not found");
    }
  });
};

module.exports = {
  findOneBlogHelper,
  findBlogListHelper
};
