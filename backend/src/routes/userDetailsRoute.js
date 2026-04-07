const express = require("express");
const db = require("../config/db");
const userRouter = express.Router();
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

//send user_details to server

userRouter.post("/user-details", (req, res) => {
  const {user_id, name, email, contact, address, skills } = req.body;

  db.query(
    `
  UPDATE user_details 
  SET 
    user_name = ?, 
    user_email = ?, 
    user_contact = ?, 
    user_address = ?, 
    user_skills = ?
  WHERE user_id = ?
`,
    [name, email, contact, address, skills, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "server err" });
      }
      res.status(200).json({
        message: "User updated successfully",
        result,
      });
    },
  );
});

// getting user_details from server

userRouter.get("/user-data", (req, res) => {
  try {
    db.query("SELECT * FROM user_details", (err, result) => {
      res.json(result);
    });
  } catch (err) {
    res.status(501).json({ message: "server err" });
  }
});

module.exports = userRouter;
