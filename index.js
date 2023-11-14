const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog");
const cookieParser = require("cookie-parser");
const Blog = require("./models/blog");
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const app = express();

dotenv.config();
connectDB();

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.get("/", async (req, res) => {
  const allBlog = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlog,
  });
});

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
});
