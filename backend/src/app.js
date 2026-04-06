const express = require("express");
const authRoute = require("../src/middleware/auth.middleware");
const jobpost = require("./routes/jobPostRoute");
const userRouter = require("./routes/userDetails");
const jobdata = require("./routes/jobData");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
//using routes

app.use("/api", authRoute);
app.use("/api", jobpost);
app.use("/api", userRouter);
app.use("/api", jobdata);

module.exports = app;
