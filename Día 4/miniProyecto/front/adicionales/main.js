function getMedia(){
    let id = document.getElementById("student-teacher-id").value;
    let url = id ? 
            'http://localhost:3000/media?alumno_id=' + id : 
            'http://localhost:3000/media';

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
                    <h3>Nota Media</h3>
                    <ul>
                        <li>${response.result[i].media}</li>
                    </ul>
                </div>   `
            }
        }
    })
    .catch(err => console.error(err));
}

function getApuntadas(){
    let id = document.getElementById("student-teacher-id").value;
    let url = id ? 
            'http://localhost:3000/apuntadas?alumno_id=' + id : 
            'http://localhost:3000/apuntadas';

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

            //Filtro los resultados para poder trabajar mejor con ellos
            //Para ello guardo un objeto con el id, el nombre completo y un array de asignaturas
            let filtro = [{
                id : response.result[0].student_id,
                nombre : response.result[0].first_name + " " + response.result[0].last_name,
                asignaturas : [response.result[0].tittle]
            }]
            for (let i = 1; i < response.result.length; i++) {
                
                let encontrado = false;
                let j = 0
                while(j<filtro.length){
                    if(filtro[j].id == response.result[i].student_id){
                        filtro[j].asignaturas.push(response.result[i].tittle)
                        j = filtro.length;
                        encontrado = true;
                    }else{
                        j++;
                    }
                }
                if(!encontrado){
                    filtro.push(
                        {
                            id : response.result[i].student_id,
                            nombre : response.result[i].first_name + " " + response.result[i].last_name,
                            asignaturas : [response.result[i].tittle]
                        }
                    )
                }
            }

            let container = document.getElementById("card-container");

            container.innerHTML = "";
            for (let i = 0; i < filtro.length; i++) {
                let asignaturas = '<ul>';
                filtro[i].asignaturas.forEach(element => {
                    asignaturas+= `<li>${element}</li>`
                });
                asignaturas+="</ul>"
                container.innerHTML +=`            
                <div class="card">
                    <h3>${filtro[i].nombre} </h3>
                    ${asignaturas}
                </div>   `
            }
        }
    })
    .catch(err => console.error(err));
}

function getImpartidas(){
    let id = document.getElementById("student-teacher-id").value;
    let url = id ? 
            'http://localhost:3000/impartidas?profesor_id=' + id : 
            'http://localhost:3000/impartidas';

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

            //Filtro los resultados para poder trabajar mejor con ellos
            //Para ello guardo un objeto con el id, el nombre completo y un array de asignaturas
            let filtro = [{
                id : response.result[0].teacher_id,
                nombre : response.result[0].first_name + " " + response.result[0].last_name,
                asignaturas : [response.result[0].tittle]
            }]
            for (let i = 1; i < response.result.length; i++) {
                
                let encontrado = false;
                let j = 0
                while(j<filtro.length){
                    if(filtro[j].id == response.result[i].teacher_id){
                        filtro[j].asignaturas.push(response.result[i].tittle)
                        j = filtro.length;
                        encontrado = true;
                    }else{
                        j++;
                    }
                }
                if(!encontrado){
                    filtro.push(
                        {
                            id : response.result[i].teacher_id,
                            nombre : response.result[i].first_name + " " + response.result[i].last_name,
                            asignaturas : [response.result[i].tittle]
                        }
                    )
                }
            }

            let container = document.getElementById("card-container");

            container.innerHTML = "";
            for (let i = 0; i < filtro.length; i++) {
                let asignaturas = '<ul>';
                filtro[i].asignaturas.forEach(element => {
                    asignaturas+= `<li>${element}</li>`
                });
                asignaturas+="</ul>"
                container.innerHTML +=`            
                <div class="card">
                    <h3>${filtro[i].nombre} </h3>
                    ${asignaturas}
                </div>   `
            }
        }
    })
    .catch(err => console.error(err));
}


let media = document.getElementById("btn-getMedia")
let apuntadas = document.getElementById("btn-getApuntadas")
let impartidas = document.getElementById("btn-getImpartidas")

media.addEventListener("click", getMedia)
apuntadas.addEventListener("click", getApuntadas)
impartidas.addEventListener("click", getImpartidas)
