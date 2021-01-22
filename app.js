const express = require("express");
const app = express();
const Blogs = require("./routes/blogsRoute.js");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cors());
app.use("/", Blogs);
app.listen(process.env.PORT, console.log("Server up and Running on PORT 3000"));
