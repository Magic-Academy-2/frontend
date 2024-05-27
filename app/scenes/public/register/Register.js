import { navigateTo } from '../../../Router';

import globalStyles from '../../../styles/global.css';
import styles from './Register.css';

export function RegisterScene({ searchParams }) {
  const html = /*html*/ `
      <div class="${globalStyles.container} ${styles.container}">
        <header>
          <h1>Registro</h1>
        </header>
        <main>
          <h2>Coming soon!</h2>
          <p>Estamos preparando esta sección.</p>
          <button id="btn-login">Volver al login</button>
        </main>
      </div>
  `;

  const logic = () => {
    const $loginBtn = document.getElementById('btn-login');
    if (!$loginBtn) throw new Error('Login button not found');
    $loginBtn.addEventListener('click', () => {
      navigateTo('/login');
    });
  };
  return { html, logic };
}
