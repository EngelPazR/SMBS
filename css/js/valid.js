let form, nombr, lastn, email, passw, commit;
form = document.getElementById('form');
nombr = document.getElementById('nombre');
lastn = document.getElementById('lastN');
email = document.getElementById('email');
passw = document.getElementById('passw');
commit = document.getElementById('commit');

const patronPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
const patronEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

form.addEventListener('submit', (e) => {
  if (passw.value.length >= 6 && patronPass.test(passw.value)) { } else {
    alert(
      'El contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito '
    );
  }
  if (nombr.value === '' && commit.value === '' && email.value === '') {
    alert(
      'Los campos de NOMBRES, EMAIL y COMENTARIOS  son requeridos, por lo que no pueden quedar vacios'
    );
  } else {
    if (nombr.value === '') {
      alert(
        'El campo de NOMBRES es requerido por lo que no puede quedar vacio'
      );
    } else {
      if (email.value === '') {
        alert(
          'El campo de EMAIL es requerido por lo que no puede quedar vacio'
        );
      } else {
        if (commit.value === '') {
          alert(
            'El campo de COMENTARIOS es requerido por lo que no puede quedar vacio'
          );
        }
      }
    }
  }
});

nombr.addEventListener('blur', (e) => {
  if (nombr.value === '') {
    alert('El campo de NOMBRES es requerido por lo que no puede quedar vacio');
  }
});

email.addEventListener('blur', (e) => {
  if (email.value === '' || !patronEmail.test(email.value)) {
    alert('El campo de EMAIL es invalido');
  }
});

lastn.addEventListener('blur', (e) => {
  if (lastn.value === '') {
    alert('El campo de APELLIDO es requerido por lo que no puede quedar vacio');
  }
});

passw.addEventListener('blur', (e) => {
  if (
    passw.value === '' ||
    passw.value.length < 6 ||
    !patronPass.test(passw.value)
  ) {
    alert('El campo de CONTRASEÑA debe ser coherente');
  }
});

commit.addEventListener('blur', (e) => {
  if (commit.value === '' || commit.value.length > 50) {
    alert('El campo de COMENTARIOS es inválido');
  }
});