const express = require("express");
const db = require("../config/db");
const { resource } = require("../app");
const app = express();
app.use(express.json());
const userauth = express.Router();

userauth.post("/user-count", (req, res) => {
  db.query(
    "SELECT auth_role, COUNT(*) as count FROM user_logindata GROUP BY auth_role",
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database Error" });

      const stats = {
        user: 0,
        company: 0,
        admin: 0,
      };
      result.forEach((item) => {
        stats[item.auth_role] = item.count;
      });
      res.json(stats);
    },
  );
});

module.exports = userauth;
