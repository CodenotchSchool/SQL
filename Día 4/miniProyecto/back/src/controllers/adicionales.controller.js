const connection = require("../database")

const getMedia = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let params = [req.query.alumno_id]
    if(req.query.alumno_id){
        sql = `SELECT AVG(mark) AS media FROM marks WHERE student_id = ?;`
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

const getApuntadas = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let params = [req.query.alumno_id]
    if(req.query.alumno_id){
        sql = `SELECT DISTINCT students.student_id, students.first_name, students.last_name, subjects.tittle 
            FROM students JOIN groups ON students.group_id = groups.group_id 
            JOIN subject_teacher ON subject_teacher.group_id = groups.group_id 
            JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
            WHERE students.student_id = ? 
            ORDER BY students.student_id;`
    }else{
        sql = `SELECT DISTINCT students.student_id, students.first_name, students.last_name, subjects.tittle 
            FROM students JOIN groups ON students.group_id = groups.group_id 
            JOIN subject_teacher ON subject_teacher.group_id = groups.group_id 
            JOIN subjects ON subject_teacher.subject_id = subjects.subject_id 
            ORDER BY students.student_id;`
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

const getImpartidas = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let params = [req.query.profesor_id]
    if(req.query.profesor_id){
        sql = `SELECT DISTINCT teacehrs.teacher_id, teacehrs.first_name, teacehrs.last_name, subjects.tittle
            FROM teacehrs JOIN subject_teacher ON teacehrs.teacher_id = subject_teacher.teacher_id
            JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
            WHERE teacehrs.teacher_id= ?;`
    }else{
        sql = `SELECT DISTINCT teacehrs.teacher_id, teacehrs.first_name, teacehrs.last_name, subjects.tittle
            FROM teacehrs JOIN subject_teacher ON teacehrs.teacher_id = subject_teacher.teacher_id
            JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
            ORDER BY teacehrs.teacher_id;`
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

module.exports = {getMedia, getApuntadas, getImpartidas};