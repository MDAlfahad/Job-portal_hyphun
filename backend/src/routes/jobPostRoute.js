const express = require("express");
const db = require("../config/db"); //  mysql connection
const { v4: uuidv4 } = require("uuid");
const { validate: Uuid } = require("uuid");
const { decoded } = require("jsonwebtoken");
const jobpostauth = require("../middleware/jobpostMiddleware");
require("dotenv").config();

const postjob = express.Router();
postjob.use(express.json());

// job post

postjob.post("/postjob", jobpostauth, (req, res) => {
  const user_id = req.user.id;
  const job_id = uuidv4();

  const {
    desigination,
    companyname,
    locationtype,
    worktype,
    location,
    startdate,
    annualCTC,
    experience,
    jobtype,
    certificate,
    vacancies,
    joboffering,
    applyby,
    aboutthisjob,
    requirements,
    skills,
    aboutcompany,
  } = req.body;

  const sql = `INSERT INTO job_postdata 
      (job_id, job_desigination, company_name, job_location, location_type, job_workingtype, job_type, job_startdate, job_ctc, job_experience,
      certifications, job_vacancies, job_offering, job_lastdate, job_description, job_requirements, job_skills, about_company, user_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    job_id,
    desigination,
    companyname,
    location,
    locationtype,
    worktype,
    jobtype,
    startdate,
    annualCTC,
    experience,
    certificate,
    vacancies,
    joboffering,
    applyby,
    aboutthisjob,
    requirements,
    skills,
    aboutcompany,
    user_id,
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
      job_id: job_id,
    });
  });
});

//job post data fetch sepratley

postjob.get("/jobpostdata", jobpostauth, (req, res)=>{
  const user_id = req.user.id;

  db.query("SELECT * FROM job_postdata WHERE user_id = ?",
    [user_id], (err, result)=>{
      if(err) return res.status(500).json({ message: "DB error" });
      res.json(result)
    }
  )
})

// job post data fetch

postjob.get("/jobdata", (req, res) => {
  db.query("SELECT * FROM job_postdata", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// fetch job by id 
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
