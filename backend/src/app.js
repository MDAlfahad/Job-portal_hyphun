const express = require("express");
const authRoute = require("../src/middleware/auth.middleware");
const jobpost = require("./routes/jobPostRoute");
const userRouter = require("./routes/userDetailsRoute");
const jobdata = require("./routes/jobDataRoute");
const cors = require("cors");
const userauth = require("./routes/authRote");
const applyForm = require("./routes/formApply");
const path = require("path");



const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//using routes

app.use("/api", authRoute);
app.use("/api", jobpost);
app.use("/api", userRouter);
app.use("/api", jobdata);
app.use("/api", userauth);
app.use("/api", applyForm);


module.exports = app;
