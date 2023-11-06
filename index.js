const path = require("path");
const express = require("express");

const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(PORT, () => {
  console.log("server start at local host 8000");
});
