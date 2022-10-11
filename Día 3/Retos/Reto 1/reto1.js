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

let sql = `SELECT students.first_name, students.last_name, subjects.tittle 
            FROM students JOIN groups ON (students.group_id = groups.group_id) 
            JOIN subject_teacher ON (subject_teacher.group_id = groups.group_id) 
            JOIN subjects ON (subject_teacher.subject_id=subjects.subject_id) 
            ORDER BY students.first_name, students.last_name;`;

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})

