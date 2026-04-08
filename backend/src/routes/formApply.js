const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("../config/db");


const applyForm = express.Router();


const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

applyForm.post("/apply-form", upload.single("resume"), async (req, res) => {
  try {
    const { jobId, userId, availability, travel, experience } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Please upload a resume." });
    }

    const resumePath = req.file.filename;

    const sqlQuery = `
      INSERT INTO job_applications (job_id, student_id, availability, travel, experience, resume_path) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      jobId,
      userId,
      availability,
      travel,
      experience,
      resumePath,
    ];

    const [result] = await db.execute(sqlQuery, values);

    return res.status(200).json({
      message: "Application submitted successfully!",
      applicationId: result.insertId,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = applyForm;
