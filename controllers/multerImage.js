const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
// var upload = multer({ dest: "uploads/" });

//midddleware to handle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting Multer storages
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Init the storage
var upload = multer({ storage: storage }).single("Image");

module.exports = {
  upload,
};
