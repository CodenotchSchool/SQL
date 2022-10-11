const connection = require("../database")
const getStart = (req,res)=>{
    let respuesta = {error: false, codigo: 200, mensaje: 'Funciona'}
    res.send(respuesta)
}

const getNotas = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let params = [req.query.alumno_id]
    if(req.query.alumno_id){
        sql = `SELECT * FROM marks WHERE student_id = ?;`
    }else{
        sql = `SELECT * FROM marks;`
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

const postNotas = (req,res)=>{

    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""
    let student_id =        req.body.student_id;   
    let subject_id =        req.body.subject_id;   
    let date =              req.body.date;    
    let mark =              req.body.mark;

    let params = [student_id, subject_id, date, mark]

    sql =  `INSERT INTO marks 
            (student_id, subject_id, date, mark) 
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

const putNotas = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 304, result : []}
    let sql = ""

    let student_id =        req.body.student_id ?        req.body.student_id     : null;
    let subject_id =        req.body.subject_id ?        req.body.subject_id     : null;
    let date =              req.body.date       ?        req.body.date           : null;
    let mark =              req.body.mark       ?        req.body.mark           : null;
    let mark_id =           req.body.mark_id    ?        req.body.mark_id        : null;

    let params = [student_id, subject_id, date, mark, mark_id]

    sql =  `UPDATE marks 
            SET student_id = COALESCE(?,student_id), 
            subject_id = COALESCE(?,subject_id), 
            date = COALESCE(?,date), 
            mark = COALESCE(?,mark) 
            WHERE mark_id = ?;`

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

const delNotas = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 500, result : []}
    let sql = ""

    let mark_id = req.body.mark_id;    

    let params = [mark_id]

    sql =  `DELETE FROM marks WHERE mark_id = ?;`

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

module.exports = {getStart, getNotas, postNotas, putNotas, delNotas};