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
// let params = ["A"]
// let sql = `SELECT marks.mark, subjects.tittle, CONCAT(students.first_name, " ", students.last_name ) AS full_name
//             FROM marks JOIN students ON (marks.student_id = students.student_id)
//             JOIN subjects ON (subjects.subject_id = marks.subject_id)
//             JOIN groups ON ( students.group_id = groups.group_id)
//             WHERE groups.name =?;`;

// connection.query(sql,params, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

// let params = ["Marta", "González"]
// let sql = `SELECT AVG(marks.mark)
// FROM marks JOIN students ON (students.student_id = marks.student_id) 
// WHERE students.first_name = ? AND students.last_name = ?;`;

// connection.query(sql,params, (err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

let params = ["Daniel", "Vera"]
let sql = `SELECT DISTINCT subjects.tittle
FROM subjects JOIN subject_teacher ON ( subjects.subject_id= subject_teacher.subject_id)
JOIN teacehrs ON (teacehrs.teacher_id = subject_teacher.teacher_id) 
WHERE teacehrs.first_name = ? AND teacehrs.last_name = ?;`;

connection.query(sql,params, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})

