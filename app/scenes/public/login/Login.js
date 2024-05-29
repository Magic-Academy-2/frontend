import logoBlack from '../../../assets/images/logo-black.png';

import globalStyles from '../../../styles/global.css';
import sharedAuthStyles from '../shared-auth-styles.css';
import styles from './Login.css';
import { LoginForm } from './components/form/LoginForm';

export function LoginScene({ searchParams }) {
  const { html: loginFormHtml, logic: loginFormlogic } = LoginForm();

  const html = /*html*/ `
    <div class="${styles.login_page}">
      <header class="${styles.header}">
          <h1>¡Bienvenido!</h1>
      </header>
      <main class="${globalStyles.container}">
          <section class="${sharedAuthStyles.form_container}">
            <div id="${sharedAuthStyles.img_logo}">
                <img src="${logoBlack}" alt="Logo">
            </div>
            <h2>Iniciar Sesión</h2>
            ${loginFormHtml}
          </section>
      </main>
    </div>
  `;

  const logic = () => {
    loginFormlogic();
  };
  return {
    html,
    logic,
  };
}
