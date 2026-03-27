const express = require("express");
const authRoute = require("../src/middleware/auth.middleware");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
//using routes

app.use("/api", authRoute);

module.exports = app;
