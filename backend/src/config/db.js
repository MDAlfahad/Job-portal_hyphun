

const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Hyphun@1950#",
    database: "hyphuntechnology"
})

connection.connect((err)=>{
if(err){
    console.error("Error in connecting to mysql:" +err.stack);
    return;
}
console.log("Connected Sucessfuly:" +connection.threadId)
})