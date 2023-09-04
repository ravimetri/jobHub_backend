const express = require("express");
const app = express();
// const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");
const bookMarkRoute = require("./routes/bookmark");

dotenv.config();
//process.env.VARIABLE_NAME

mongoose
  .connect(process.env.MONGU_URL)
  .then(() => console.log("db conected"))
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => res.send("Welcome Ravi!"));
app.use(express.json());
app.use("/api/", authRoute);
app.use("/api/users", userRoute);
app.use("/api/jobs", jobRoute);
app.use("/api/bookmarks/", bookMarkRoute);
// app.listen("/api", authRoute);
// localhost:5001/api/register

app.listen(
  process.env.PORT || 5002,
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
