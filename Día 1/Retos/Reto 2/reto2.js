const mysql = require('mysql2');

let connection = mysql.createConnection(
    {
        host : "localhost",
        user: "root",
        password: "",
        database: "escuela"
    }
);

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Conexión correcta");
    }
})

// let sql = "UPDATE marks SET mark = 0"

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos actualizados");
//         console.log(result);
//     }
// })

// let sql = "SELECT first_name, last_name FROM students"

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos encontrados");
//         console.log(result);
//     }
// })

// let sql = "SELECT * FROM teacehrs"

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos encontrados");
//         console.log(result);
//     }
// })