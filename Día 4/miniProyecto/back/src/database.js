const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"escuela"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Conexión correcta");
    }
})

module.exports = connection;