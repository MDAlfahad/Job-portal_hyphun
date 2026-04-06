const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const db = require("../config/db");
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

const router = express.Router();
// register auth for normal users;

router.post("/register_User", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const status = 1;
    const role = "user";
    const userid = uuidv4();
    const hashpass = await bcrypt.hash(password, 12);
    db.query(
      "INSERT INTO user_logindata(user_id, user_name, user_email, user_password, user_status, auth_role) VALUES (?, ?, ?, ?, ?, ?) ",
      [userid, name, email, hashpass, status, role],
    );
  } catch (err) {
    res.status(500).json({ error: "server Error" });
  }
});

// register for compaies

router.post("/register_company", async (req, res) => {
  const { name, email, password, mobilenumber } = req.body;

  try {
    const status = 1;
    const role = "company";
    const userid = uuidv4();
    const hashpass = await bcrypt.hash(password, 12);

    db.query(
      "INSERT INTO user_logindata(user_id, user_name, user_email, user_password, user_phone, user_status, auth_role) VALUES(?, ?, ?, ?, ?, ?, ?)",
      [userid, name, email, hashpass, mobilenumber, status, role],
    );
  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
});

// login for users and company;

router.post("/login_users", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM user_logindata WHERE user_email = ?",
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (results.length === 0)
        return res.status(400).json({ message: "User not found" });

      const user = results[0];

      bcrypt.compare(password, user.user_password, (err, isMatch) => {
        if (err)
          return res.status(500).json({ message: "Error checking password" });
        if (!isMatch)
          return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign(
          { id: user.user_id, role: user.auth_role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" },
        );
        const { user_id, user_password, ...safeUser } = user;

        return res.json({ token, role: user.auth_role, user: safeUser });
      });
    },
  );
});

module.exports = router;
