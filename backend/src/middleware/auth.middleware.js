const express = require("express");
const bcrypt = require("bcrypt")
const app = express();
const db = require("../config/db");
const { v4: uuidv4 } = require('uuid');
app.use(express.json());

app.post("/register_User", async (req, res)=>{
    const{name, email, passowrd, status, role} = req.body;

    
    try{
        const status = 1
        const role = "user"
        const userid = uuidv4
        const hashpass = await bcrypt.hash(passowrd, 12);
        db.query(
            "INSERT INTO user_logindata(user_id, user_name, user_email, user_passowrd, muser_status, auth_role VALUE(?, ?, ?, ?, ?, ?)" ,
            [userid, name, email, hashpass, role, status ]
        )

    }catch(err){
       res.status(500).json({error: "server Error"})
    }
});
