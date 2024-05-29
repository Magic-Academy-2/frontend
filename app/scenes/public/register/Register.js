import { navigateTo } from '../../../Router';
import '../styles/global.css';  

export function RegisterScene({ searchParams }) {
  const html = /*html*/ `
      <div class="${global.container} ${styles.register_container}">
    <form id="registerStudent">
      <div class="${styles.input_group}">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
        </div>
     <div class="${styles.input_group}">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        </div>
     <div class="${styles.input_group}">
            <label for="email">Correo:</label>
            <input type="email" id="email" name="email" required>
        </div>
      <div class="${styles.step_navigation}">
        <span>Paso 1 de 2</span>
        <button type="button" id="${styles.next_btn}">Siguiente</button>
        </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step_1');
    const step2 = document.getElementById('step_2');
    const nextButton = document.getElementById('next_btn');
    const registerButton = document.getElementById('register_btn_student');

    const showAlert = (message) => {
        alert(message);
    };

    const showStep2 = () => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    };

    nextButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password) {
            showStep2();
        } else {
            showAlert('Por favor complete todos los campos.');
        }
    });

    registerButton.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const interestsElements = document.querySelectorAll('input[name="interests"]:checked');
        const interests = [];

        interestsElements.forEach(el => {
            interests.push(el.value);
        });

        if (interests.length > 0) {
            const studentData = { name, email, password, interests };
            const response = await fetch('https://localhost:400/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });
            const data = await response.json();

            if (response.ok && data.success) {
                showAlert('Registro exitoso');
                // Aquí puedes redirigir al usuario o limpiar el formulario, según sea necesario
            } else {
                showAlert('Error en el registro: ' + data.message);
            }
        } else {
            showAlert('Por favor seleccione al menos un tema de interés.');
        }
    });
});

      
