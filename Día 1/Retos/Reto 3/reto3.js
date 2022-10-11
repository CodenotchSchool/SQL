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


// let sql = "DELETE FROM escuela.marks WHERE YEAR(NOW())-YEAR(date) > 10"

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos borrados");
//         console.log(result);
//     }
// })

let sql = "UPDATE marks SET mark = 5 WHERE mark < 5"

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos actualizados");
        console.log(result);
    }
})