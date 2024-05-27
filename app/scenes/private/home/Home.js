import { logOut } from '../../../helpers/log-out';

export function HomeScene({ searchParams }) {
  const userFromStorage = localStorage.getItem('user');
  if (!userFromStorage) {
    console.error('User not found in localStorage');
  }

  const user = JSON.parse(userFromStorage);

  const html = /*html*/ `
    <h1>Te damos la bienvenida, ${user.name}</h1>
    <button id="btn-logout">Cerrar sesión</button>
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
