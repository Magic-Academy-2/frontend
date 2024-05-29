import { getUserRoles } from '../../../constants';
import { logOut } from '../../../helpers/log-out';

import globalStyles from '../../../styles/global.css';
import styles from './Home.css';

export function HomeScene({ searchParams }) {
  const userFromStorage = localStorage.getItem('user');
  if (!userFromStorage) {
    console.error('User not found in localStorage');
  }
  const user = JSON.parse(userFromStorage);

  console.log(user);

  const userRoles = getUserRoles();
  console.log(userRoles);

  let logic;
  let html;
  // user.user_roles_id = 3; prueba

  switch (user.user_roles_id) {
    case userRoles.admin:
      html = /*html*/ ``;
      logic = () => {};
      break;
    case userRoles.student:
      html = /*html*/ ``;
      logic = () => {};
      break;
    case userRoles.instructor:
      html = /*html*/ ``;
      logic = () => {};
      break;
  }

  return {
    html,
    logic,
  };
}
