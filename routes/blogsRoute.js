const express = require('express');
const {getAllBlogs,getAllBlogsByQuery,getBlogById, createBlog} = require('../controllers/blogKaController');
const validateBody = require('../middlewares/validateBody');
const blogRouter = express.Router();

blogRouter.route("/Blog").get(getAllBlogs)
blogRouter.route("/Blog").post(validateBody, createBlog);
blogRouter.route("/Blog/query").get(getAllBlogsByQuery);
blogRouter.route("/Blog/:id").get(getBlogById);





module.exports = blogRouter;