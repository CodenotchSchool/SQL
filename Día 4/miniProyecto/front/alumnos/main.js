import Alumno from "./alumno.js";

function postAlumno(){

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let group_id = document.getElementById("group_id").value;
    let admission_year = document.getElementById("admission_year").value;

    let alumno = new Alumno(first_name,last_name,group_id, 0, admission_year)
    let url = 'http://localhost:3000/alumnos'
    console.log(alumno);
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'POST',
        body: JSON.stringify(alumno)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

function getAlumnos(){
    let student_id = document.getElementById("student_id").value;
    let url = student_id ? 
            'http://localhost:3000/alumnos?alumno_id=' + student_id : 
            'http://localhost:3000/alumnos';

    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'GET',
    };

    fetch(url, params)
    .then(response => response.json())
    .then(response => {
        if(response.error){
            console.log(response.error);
        }else{
            let container = document.getElementById("card-container");
            container.innerHTML = "";
            for (let i = 0; i < response.result.length; i++) {
                container.innerHTML +=`            
                <div class="card">
                    <h3>${response.result[i].first_name} ${response.result[i].last_name}</h3>
                    <ul>
                        <li>ID: ${response.result[i].student_id}</li>
                        <li>ID Grupo: ${response.result[i].group_id}</li>
                        <li>Año de admisión: ${response.result[i].admission_year}</li>
                    </ul>
                </div>   `
            }
        }
    })
    .catch(err => console.error(err));
}

function putAlumnos(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let group_id = document.getElementById("group_id").value;
    let admission_year = document.getElementById("admission_year").value;
    let student_id = document.getElementById("student_id").value;
    let alumno = new Alumno(first_name,last_name,group_id, student_id, admission_year)
    let url = 'http://localhost:3000/alumnos'
    console.log(alumno);
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'PUT',
        body: JSON.stringify(alumno)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

function delAlumnos(){

    let student_id = document.getElementById("student_id").value;
    let alumno = new Alumno("","","", student_id, "")
    let url = 'http://localhost:3000/alumnos'
    console.log(alumno);
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'DELETE',
        body: JSON.stringify(alumno)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}


let crear = document.getElementById("btn-post")
let mostrar = document.getElementById("btn-get")
let modificar = document.getElementById("btn-put")
let eliminar = document.getElementById("btn-del")
crear.addEventListener("click", postAlumno)
mostrar.addEventListener("click", getAlumnos)
modificar.addEventListener("click", putAlumnos)
eliminar.addEventListener("click", delAlumnos)