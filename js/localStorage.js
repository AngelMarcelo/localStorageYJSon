let listaTareas = document.querySelector("#lista");
let tarea = [];

const crearLista = (texto) => {
    let contenedor = document.createElement("div");
    let cardTarea = 
    <div class="card mt-2 card-list">
        <div class="card-body d-flex justify-content-between aling-items-center">
            ${texto.toUpperCase()}
            <button class="btn btn-outline-danger">x</button>
        </div>
    </div>
};