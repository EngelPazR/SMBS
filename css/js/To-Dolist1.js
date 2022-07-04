let boton = document.getElementById('agregar');
let texto = document.getElementById('texto');
let lista = document.getElementById('lista');
let dbs = [];

function agregarTask() {
  lista.innerHTML = '';
  dbs.forEach((elemento) => {
    lista.innerHTML += `<section class="nuevo">
    <span id='titulo'>
    ${elemento}
    </span>
 <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
 </section>
 `;
    texto.value = '';
  });
}

function eliminarTask(params) {
  let trash = document.querySelectorAll('.trash');
  trash.forEach((elemento, i) => {
    elemento.addEventListener('click', () => {
      elemento.parentElement.remove();
      console.log(i);
      dbs.splice(i, 1);
      let tareas = document.querySelectorAll('.nuevo');
      console.log(dbs);
      if (tareas.length === 0) {
        dbs = [];
      }
      localStorage.setItem('tareas', JSON.stringify(dbs));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  dbs = JSON.parse(localStorage.getItem('tareas')) || [];
  lista.innerHTML = '';

  agregarTask();

  eliminarTask();
});

function addTask() {
  if (texto.value === '') {
    alert('Ingrese una tarea, por favor');
    return;
  }
  let tarea = texto.value;
  dbs.push(tarea);
  console.log(dbs);

  agregarTask();
  texto.value = '';

  localStorage.setItem('tareas', JSON.stringify(dbs));

  eliminarTask();
}

boton.addEventListener('click', (e) => {
  addTask();
});
