const express = require("express");
const {
  getAllBlogs,
  getAllBlogsByQuery,
  getBlogById,
  createBlog,
} = require("../controllers/blogKaController");
const validateBody = require("../middlewares/validateBody");
const { upload } = require("../controllers/multerImage");
const blogRouter = express.Router();

blogRouter.route("/Blog").get(getAllBlogs);
blogRouter.route("/Blog").post(upload, validateBody, createBlog);
blogRouter.route("/Blog/query").get(getAllBlogsByQuery);
blogRouter.route("/Blog/:id").get(getBlogById);

module.exports = blogRouter;
