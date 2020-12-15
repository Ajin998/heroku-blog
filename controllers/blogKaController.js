const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "../data", "data.json");
const datas = JSON.parse(fs.readFileSync(fileName, "utf8"));


//Get all the Blogs in the home page
const getAllBlogs = (req, res, next) => {
  res.status(200).json({ Blogs:datas });
};


//Get the Blog of the ID specified by the user
const getBlogById = (req, res, next) => {
  const found = datas.some((data) => data.id === req.params.id);
  if (found) {
    res.status(200).json({status:"Successfully Acknowledged!!",Message:`Blog of ID "${req.params.id}" found and fetched`,
      result: datas.filter((data) => data.id == req.params.id),
    });
  } else {
    res.status(400).json({
      message: "Enter correct ID",
    });
  }
};
module.exports = {
  getAllBlogs,
  getBlogById,
};
