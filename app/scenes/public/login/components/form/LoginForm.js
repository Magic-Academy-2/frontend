import { navigateTo } from '../../../../../Router';
import { formValidator } from '../../../../../helpers/form-validator';
import styles from './LoginForm.css';

export function LoginForm() {
  const html = /*html*/ `
    <form id="loginForm">
      <div class="${styles.input_group}">
          <label for="email">Correo:</label>
          <input type="email" id="email" name="email" required>
      </div>
      <div class="${styles.input_group}">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required>
      </div>
      <div class="${styles.input_group}">
          <button type="submit">Iniciar sesión</button>
      </div>
      <div class="${styles.fallback}">
          <span>¿No estás registrado aún?</span>
          <button>Regístrate</button>
      </div>
    </form>
    `;

  const logic = () => {
    const $registerBtnLink = document.querySelector(
      `.${styles.fallback} button`,
    );
    $registerBtnLink.addEventListener('click', () => {
      navigateTo('/register');
    });

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // previene el comportamiento por default que es: enviar la peticion y recargar la pagina
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!formValidator(email, password)) {
        alert('Please fill in all fields');
        return;
      }

      const token = await login(email, password);
      if (token) {
        localStorage.setItem('token', token);
        navigateTo('/home');
      } else {
        alert('Invalid credentials');
      }
    });
  };

  return { html, logic };
}

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}
