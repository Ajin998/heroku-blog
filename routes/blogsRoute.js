const express = require('express');
const {getAllBlogs,getAllBlogsByQuery,getBlogById} = require('../controllers/blogKaController.js');
const blogRouter = express.Router();

blogRouter.route("/Blog").get(getAllBlogs);
blogRouter.route("/Blog/query").get(getAllBlogsByQuery);
blogRouter.route("/Blog/:id").get(getBlogById);

module.exports = blogRouter;