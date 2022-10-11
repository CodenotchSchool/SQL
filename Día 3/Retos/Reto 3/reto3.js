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

let sql = `SELECT COUNT(students.student_id), subjects.tittle, teacehrs.first_name, teacehrs.last_name
            FROM teacehrs JOIN subject_teacher ON (teacehrs.teacher_id = subject_teacher.teacher_id)
            JOIN subjects ON (subjects.subject_id = subject_teacher.subject_id) 
            JOIN groups ON (groups.group_id = subject_teacher.group_id)
            JOIN students ON ( students.group_id = groups.group_id)
            GROUP BY subjects.tittle;`;

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})

