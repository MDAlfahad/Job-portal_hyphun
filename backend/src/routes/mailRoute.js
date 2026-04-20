const express = require("express");
const mailrouter = express.Router();
const sendEmail = require("../config/mail");

mailrouter.post("/sendMail", async (req, res) => {
  try {
    const { name, email, position, companyEmail } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // Email to User
    await sendEmail(
      email,
      "Application Submitted",
      `
      <h2>Hello ${name}</h2>
      <p>You successfully applied for <b>${position}</b></p>
      <p>Best Wishes</p>
      `
    );

    // // Email to Company
    // await sendEmail(
    //   companyEmail,
    //   "New Candidate Applied",
    //   `
    //   <h2>New Application Received</h2>
    //   <p><b>${name}</b> applied for <b>${position}</b></p>
    //   `
    // );

    res.status(200).json({
      success: true,
      message: `${name}, you successfully applied for ${position}`,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Application failed",
    });
  }
});

module.exports = mailrouter;