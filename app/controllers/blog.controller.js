const {
  findOneBlogHelper,
  findBlogListHelper
} = require("../helpers/blogHelper");

const getBlogData = (req, res, next) => {
  findOneBlogHelper(res, { slug: req.params.blog }, blog => {
    return res.status(200).send(blog);
  });
};

const getBlogList = (req, res, next) => {
  findBlogListHelper(res, blogList => {
    res.status(200).send(blogList);
  });
};

module.exports = { getBlogData, getBlogList };
