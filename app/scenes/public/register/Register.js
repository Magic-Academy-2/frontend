import { navigateTo } from '../../../Router';
import logoBlack from '../../../assets/images/logo-black.png';

import globalStyles from '../../../styles/global.css';
import sharedAuthStyles from '../shared-auth-styles.css';
import styles from './Register.css';

import { RegisterForm } from './components/RegisterForm';

export function RegisterScene({ searchParams }) {
  const { html: registerFormHtml, logic: registerFormLogic } = RegisterForm();
  const html = /*html*/ `
    <div class="${styles.register_page}">
      <header class="${styles.header}">
          <h1>Registro</h1>
      </header>
      <main class="${globalStyles.container}">
          <section class="${sharedAuthStyles.form_container}">
              <div id="${sharedAuthStyles.img_logo}">
                <img src="${logoBlack}" alt="Logo">
              </div>
              ${registerFormHtml}
              <div class="${styles.fallback}">
                <span>¿Tienes cuenta?</span>
                <button>Inicia sesión</button>
              </div>
          </section>
      </main>
    </div>
  `;

  const logic = () => {
    registerFormLogic();
    const $loginBtnLink = document.querySelector(`.${styles.fallback} button`);
    $loginBtnLink.addEventListener('click', () => {
      navigateTo('/login');
    });
  };

  return { html, logic };
}
