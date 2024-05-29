import { navigateTo } from '../../../../Router';
import styles from './RegisterForm.css';

export function RegisterForm() {
  const html = /*html*/ `
    <div class="${styles.form_wrapper}">
      <form id="registerForm">
          <div class="${styles.input_group}">
              <label for="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
          </div>
          <div class="${styles.input_group}">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
          </div>
          <div class="${styles.input_group}">
              <label for="email">Correo:</label>
              <input type="email" id="email" name="email" required />
          </div>
          <!-- <p class="${styles.steps_indicator}">Paso 1 de 2</p> -->
          <!-- <button type="button" id="${styles.next_btn}">Siguiente</button> -->
          <button type="submit" id="${styles.next_btn}">Registrarse</button>
      </form>
    </div>
    `;
  const logic = () => {
    const $registerForm = document.getElementById('registerForm');
    $registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      // Validate form
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!name || !email || !password) {
        alert('Por favor complete todos los campos.');
        return;
      }

      // Run register logic
      try {
        // Registro solo como estudiante
        await register({ name, email, password });
        // Redirect to logiin
        navigateTo('/login');
      } catch (err) {
        alert(err);
      }
    });

    // -*******************************************************************************-
    // Load course topics

    // -*********************-
    // const step1 = document.getElementById('step_1');
    // const step2 = document.getElementById('step_2');
    // const nextButton = document.getElementById(styles.nextButton);
    // const registerButton = document.getElementById('register_btn_student');
    // const showAlert = (message) => {
    //   alert(message);
    // };
    // const showStep2 = () => {
    //   step1.classList.add('hidden');
    //   step2.classList.remove('hidden');
    // };
    // nextButton.addEventListener('click', () => {
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const password = document.getElementById('password').value;
    //   if (name && email && password) {
    //     showStep2();
    //   } else {
    //     showAlert('Por favor complete todos los campos.');
    //   }
    // });
    // registerButton.addEventListener('click', async (event) => {
    //   event.preventDefault();
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const password = document.getElementById('password').value;
    //   const interestsElements = document.querySelectorAll(
    //     'input[name="interests"]:checked',
    //   );
    //   const interests = [];
    //   interestsElements.forEach((el) => {
    //     interests.push(el.value);
    //   });
    //   if (interests.length > 0) {
    //     const studentData = { name, email, password, interests };
    //     const response = await fetch('https://localhost:400/register', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(studentData),
    //     });
    //     const data = await response.json();
    //     if (response.ok && data.success) {
    //       showAlert('Registro exitoso');
    //       // Aquí puedes redirigir al usuario o limpiar el formulario, según sea necesario
    //     } else {
    //       showAlert('Error en el registro: ' + data.message);
    //     }
    //   } else {
    //     showAlert('Por favor seleccione al menos un tema de interés.');
    //   }
    // });
    // -*******************************************************************************-
  };
  return { html, logic };
}

async function register({ name, email, password, user_roles_id = 2 }) {
  const apiUrl = 'http://localhost:4000/api';
  try {
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, user_roles_id }),
    });

    if (!response.ok) {
      const { message: errorMessage } = await response.json();
      throw new Error(`${response.status}: ${errorMessage}`);
    }
  } catch (err) {
    console.error('Registro fallido:', err);
    throw err;
  }
}

function getCourseTopics(userToken) {
  const apiUrl = 'https://localhost:4000/api';
  try {
    const response = fetch(`${apiUrl}/topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });
  } catch (err) {}
}
