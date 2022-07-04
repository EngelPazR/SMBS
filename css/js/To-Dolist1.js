let boton = document.getElementById('agregar');
let texto = document.getElementById('texto');
let lista = document.getElementById('lista');
let tareas = document.getElementById('trash');
let textos = document.getElementById('texto');
let db = document.getElementById('texto').value;

function clean(params) {
  return texto.value === '';
}
boton.addEventListener('click', (e) => {
  if (texto.value === '') {
    alert('Por favor, ingrese una tarea');
  } else if (localStorage.getItem('dbs') === null) {
    let dbs = [];
    dbs.push(db);
    localStorage.setItem('dbs', JSON.stringify(dbs));
  } else {
    let dbs = JSON.parse(localStorage.getItem('dbs'));
    dbs.push(db);
    localStorage.setItem('dbs', JSON.stringify(dbs));

    lista.innerHTML += `<section class="nuevo">
      <span id='titulo'>
        ${texto.value}
      </span>
      <button class='trash' ><i class="fa-solid fa-trash-can"></i></button>
    </section>
    `;
    document.getElementById('texto').value = '';

    let actual = document.querySelectorAll('.trash');

    for (let i = 0; i < actual.length; i++) {
      actual[i].onclick = function () {
        this.parentNode.remove();
        if (dbs[i].texto === texto) {
          dbs.splice(i, 1);
        }
      };
    }
  }
});
