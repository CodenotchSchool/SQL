function postNota(){

    let date = document.getElementById("date").value;
    let mark = document.getElementById("mark").value;
    let student_id = document.getElementById("student_id").value;
    let subject_id = document.getElementById("subject_id").value;
    let nota = new Nota(student_id, 0, subject_id, mark, date)
    let url = 'http://localhost:3000/notas'
    console.log(nota);
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'POST',
        body: JSON.stringify(nota)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

function getNotas(){
    let student_id = document.getElementById("student_id").value;
    let url = student_id ? 
            'http://localhost:3000/notas?alumno_id=' + student_id : 
            'http://localhost:3000/notas';

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
                    <h3>Nota: ${response.result[i].mark}</h3>
                    <ul>
                        <li>ID Alumno: ${response.result[i].student_id}</li>
                        <li>ID Asignatura: ${response.result[i].subject_id}</li>
                        <li>ID Nota: ${response.result[i].mark_id}</li>
                        <li>Fecha: ${response.result[i].date.slice(0,10)}</li>
                    </ul>
                </div>   `
            }
        }
    })
    .catch(err => console.error(err));
}

function putNota(){
    let date = document.getElementById("date").value;
    let mark = document.getElementById("mark").value;
    let student_id = document.getElementById("student_id").value;
    let subject_id = document.getElementById("subject_id").value;
    let mark_id = document.getElementById("mark_id").value;
    let nota = new Nota(student_id, mark_id, subject_id, mark, date)
    let url = 'http://localhost:3000/notas'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'PUT',
        body: JSON.stringify(nota)
    };
      
    fetch(url, params)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

function delNota(){

    let mark_id = document.getElementById("mark_id").value;
    let nota = new Nota("",mark_id,"","","")
    let url = 'http://localhost:3000/notas'
    let params = {
        headers:{"Content-type": "application/json; charset = UTF-8"},
        method: 'DELETE',
        body: JSON.stringify(nota)
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
crear.addEventListener("click", postNota)
mostrar.addEventListener("click", getNotas)
modificar.addEventListener("click", putNota)
eliminar.addEventListener("click", delNota)