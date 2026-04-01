const express = require("express");
const db = require("../config/db"); //  mysql connection
const { v4: uuidv4 } = require("uuid");
const {validate : Uuid} = require("uuid")

const postjob = express.Router();
postjob.use(express.json());

postjob.post("/postjob", (req, res) => {
  const {
    desigination,
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
    (job_id, job_desigination, company_name, job_type, job_location, job_workingtype, job_preferences, job_startdate, job_ctc, job_experience, job_lastdate, job_description, job_skills, about_company) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;

  const values = [
    userid,
    desigination,
    companyname,
    jobtype,
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

postjob.get("/jobdata", (req, res) => {
  db.query("SELECT * FROM job_postdata", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});
postjob.get("/jobdata/:id", (req, res) => {
  const id = req.params.id;

  if (!Uuid(id)) {
    return res.status(400).json({ error: "Invalid job ID format" });
  }
  db.query(
    "SELECT * FROM job_postdata WHERE job_id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error", details: err });
      }

      if (result.length === 0) {
        return res.status(404).json({ error: "Job not found" });
      }

      res.json(result[0]);
    },
  );
});

module.exports = postjob;
