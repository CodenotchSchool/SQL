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
});

// let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

// let sql = "SELECT COUNT(*) FROM students";

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

// let sql = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(NOW()) - 1 ";

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos eliminados");
//         console.log(result);
//     }
// });

// let sql = "SELECT * FROM students WHERE admission_year = YEAR(NOW())";

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// });

// let sql = "SELECT subject_id, COUNT(teacher_id) FROM subject_teacher GROUP BY subject_id";

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// });
