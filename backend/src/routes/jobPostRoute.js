const express = require("express");
const db = require("../config/db"); //  mysql connection
const { v4: uuidv4 } = require("uuid");

const postjob = express.Router();
postjob.use(express.json());

postjob.post("/postjob", (req, res) => {
  const {
    designation,
    companyname,
    jobtype,
    selecttype,
    location,
    startdate,
    annualCTC,
    experience,
    applyby,
    aboutthisjob,
    skills,
    aboutcompany,
  } = req.body;

  const userid = uuidv4();

  const sql = `INSERT INTO job_postdata 
    (job_id, job_designation, company_name, job_location, job_workingtype, job_preferences, job_startdate, job_ctc, job_experience, job_lastdate, job_description, job_skills, about_company) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    userid,
    designation,
    companyname,
    location,
    jobtype,
    selecttype,
    startdate,
    annualCTC,
    experience,
    applyby,
    aboutthisjob,
    skills,
    aboutcompany,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        status: false,
        message: "Server error",
      });
    }

    res.status(201).json({
      status: true,
      message: "Job posted successfully",
      job_id: userid,
    });
  });
});

module.exports = postjob;