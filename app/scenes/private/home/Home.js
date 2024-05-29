import { USER_ROLES } from '../../../constants';
import globalStyles from '../../../styles/global.css';
import styles from './Home.css';

export function HomeScene({ searchParams }) {
  const userFromStorage = localStorage.getItem('user');
  if (!userFromStorage) {
    console.error('User not found in localStorage');
  }
  const user = JSON.parse(userFromStorage);

  console.log(user);

  console.log(USER_ROLES);

  let logic;
  let html;
  // user.user_roles_id = 3; prueba

  switch (user.user_roles_id) {
    case USER_ROLES.ADMIN:
      html = /*html*/ ``;
      logic = () => {};
      break;
    case USER_ROLES.STUDENT:
      html = /*html*/ ``;
      logic = () => {};
      break;
    case USER_ROLES.INSTRUCTOR:
      html = /*html*/ ``;
      logic = () => {};
      break;
  }

  return {
    html,
    logic,
  };
}
