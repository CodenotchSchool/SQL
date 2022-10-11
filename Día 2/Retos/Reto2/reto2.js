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

// let sql = `SELECT student_id, mark FROM marks 
//             WHERE (student_id > 0 AND student_id < 21) OR 
//             (mark > 8 AND YEAR(date) = YEAR(NOW()))`;

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

// let sql = `SELECT subject_id, AVG(mark) FROM marks 
//             WHERE YEAR(date) = YEAR(NOW()) - 1 GROUP BY subject_id;`;

// connection.query(sql, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

let sql = `SELECT student_id, AVG(mark) FROM marks 
            WHERE YEAR(date) = YEAR(NOW()) - 1 GROUP BY student_id;`;

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})

