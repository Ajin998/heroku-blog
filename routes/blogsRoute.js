const express = require('express');
const {getAllBlogs,getBlogById} = require('../controllers/blogKaController.js');
const blogRouter = express.Router();

blogRouter.route("/Blog").get(getAllBlogs);
blogRouter.route("/Blog/:id").get(getBlogById);


module.exports = blogRouter;