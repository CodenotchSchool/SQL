const connection = require("../database")
const getStart = (req,res)=>{
    let respuesta = {error: false, codigo: 200, mensaje: 'Funciona'}
    res.send(respuesta)
}

const getAlumnos = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let params = [req.query.alumno_id]
    if(req.query.alumno_id){
        sql = `SELECT * FROM students WHERE student_id = ?;`
    }else{
        sql = `SELECT * FROM students;`
    }
    
    connection.query(sql,params, (err, result)=>{
        if(err){
            console.log(err);
            res.send(respuesta)
        } else{
            respuesta.error = false;
            //Codigo 204 --> contenido vacío
            result.length ===0? respuesta.codigo = 204 : respuesta.codigo = 200;
            respuesta.result = result;
            res.send(respuesta)
        }
    })
}

const postAlumnos = (req,res)=>{

    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let first_name =        req.body.first_name;   
    let last_name =         req.body.last_name;   
    let group_id =          req.body.group_id;    
    let admission_year =    req.body.admission_year;

    let params = [first_name, last_name, group_id, admission_year]

    sql =  `INSERT INTO students 
            (first_name, last_name, group_id, admission_year) 
            VALUES(?, ?, ?, ?)`

    connection.query(sql, params,(err, result)=>{
        if(err){
            console.log(err);
            res.send(respuesta)
        } else{
            respuesta.error = false;
            //Código 201 --> created
            respuesta.codigo = 201;
            respuesta.result = result;
            res.send(respuesta)
        }
    })
}

const putAlumnos = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 304, result : []}
    let sql = ""

    let first_name =        req.body.first_name?        req.body.first_name     : null;
    let last_name =         req.body.last_name?         req.body.last_name      : null;
    let group_id =          req.body.group_id?          req.body.group_id       : null;
    let admission_year =    req.body.admission_year?    req.body.admission_year : null;
    let student_id =        req.body.student_id?        req.body.student_id     : null;

    let params = [first_name, last_name, group_id, admission_year,student_id]

    sql =  `UPDATE students 
            SET first_name = COALESCE(?,first_name), 
            last_name = COALESCE(?,last_name), 
            group_id = COALESCE(?,group_id), 
            admission_year = COALESCE(?,admission_year) 
            WHERE student_id = ?;`

    connection.query(sql, params,(err, result)=>{
        if(err){
            console.log(err);
            res.send(respuesta)
        } else{
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.result = result;
            res.send(respuesta)
        }
    })
}

const delAlumnos = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""

    let student_id = req.body.student_id;    

    let params = [student_id]

    sql =  `DELETE FROM students WHERE student_id = ?;`

    connection.query(sql, params,(err, result)=>{
        if(err){
            console.log(err);
            res.send(respuesta)
        } else{
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.result = result;
            res.send(respuesta)
        }
    })
}

module.exports = {getStart, getAlumnos, postAlumnos, putAlumnos, delAlumnos};

