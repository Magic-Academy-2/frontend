import { logOut } from '../../../helpers/log-out';

import globalStyles from '../../../styles/global.css';
import styles from './Home.css';

export function HomeScene({ searchParams }) {
  const userFromStorage = localStorage.getItem('user');
  if (!userFromStorage) {
    console.error('User not found in localStorage');
  }

  const user = JSON.parse(userFromStorage);

  const html = /*html*/ `
    <div class="${globalStyles.container} ${styles.container}">
      <header>
        <h1>¡Hola, <span class="${styles.username}">${user.name}</span>!</h1>
        <button id="btn-logout">Cerrar sesión</button>
      </header>
      <main>
        <h2>Coming soon!</h2>
        <p>Estamos preparando esta sección.</p>
      </main>
    </div>
  `;

  const logic = () => {
    const $logOutBtn = document.getElementById('btn-logout');
    if (!$logOutBtn) throw new Error('Log out button not found');
    $logOutBtn.addEventListener('click', () => {
      logOut();
    });
  };

  return {
    html,
    logic,
  };
}
