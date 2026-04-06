const express = require("express");
const db = require("../config/db");

const app = express();
app.use(express.json());

const jobdata = express.Router();

jobdata.get("/jobdata", (req, res) => {
  db.query("SELECT * FROM job_postdata", (err, result) => {
    if (err) {
      return res.status(500).json({ message: "server err" });
    }
    res.send(result);
  });
});

module.exports = jobdata;
