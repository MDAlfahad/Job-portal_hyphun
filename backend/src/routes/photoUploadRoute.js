const express = require("express");
const db = require("../config/db");
const multer = require("multer");
const path = require("path");

const uploadImage = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

uploadImage.post("/upload_photo", upload.single("image"), (req, res) => {
  
  const filename = req.file.filename;
  const userId = req.body.userId;

  db.query(
    "UPDATE user_logindata SET user_image = ? WHERE user_id = ?",
    [filename, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Uploaded Successfully",
        file: filename
      });
    }
  );
});


module.exports = uploadImage;