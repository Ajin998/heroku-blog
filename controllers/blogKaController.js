const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const Blog = require("../models/blogModel");
const BlogLinks = require("../models/blogLink");
const fileName = path.join(__dirname, "../data", "data.json");
const datas = JSON.parse(fs.readFileSync(fileName, "utf8"));

//Get all the Blogs in the home page
const getAllBlogs = (req, res, next) => {
  res.status(200).json({ Blogs: datas });
};

//Get all the blogs by query
const getAllBlogsByQuery = (req, res, next) => {
  if (req.query.author && req.query.title) {
    res.status(200).json({
      result: datas.filter(
        (data) =>
          data.author === req.query.author && data.title === req.query.title
      ),
    });
  } else if (req.query.author) {
    res.status(200).json({
      result: datas.filter((data) => data.author === req.query.author),
    });
  } else if (req.query.title) {
    res.status(200).json({
      result: datas.filter((data) => data.title === req.query.title),
    });
  } else {
    res.status(400).json({ message: "Author or title not found" });
  }
};

//Get the Blog of the ID specified by the user
const getBlogById = (req, res, next) => {
  const found = datas.some((data) => data.id === req.params.id);
  if (found) {
    res.status(200).json({
      status: "Successfully Acknowledged!!",
      Message: `Blog of ID "${req.params.id}" found and fetched`,
      result: datas.filter((data) => data.id == req.params.id),
    });
  } else {
    res.status(400).json({
      message: "Enter correct ID",
    });
  }
};

//Create Blog ka part
const createBlog = (req, res, next) => {
  let links = [];
  if (req.body.links)
    req.body.links.forEach((link) =>
      links.push(new BlogLinks(link.title, link.id))
    );
  let blogs = new Blog(
    req.body.author,
    req.body.title,
    req.body.content,
    links,
    req.body.imageUrl
  );
  //Append in file
  datas.push(blogs);
  fs.writeFile(fileName, JSON.stringify(datas, null, 2), (err) => {
    if (err) {
      res.status(500).json({ message: "Unable to write in file!" });
    } else {
      res.status(200).json(blogs);
    }
  });
};
module.exports = {
  getAllBlogs,
  getAllBlogsByQuery,
  getBlogById,
  createBlog,
};
