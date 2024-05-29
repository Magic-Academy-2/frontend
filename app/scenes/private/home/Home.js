import { USER_ROLES } from '../../../constants';
import { getUserFromLocalStorage } from '../../../helpers';
import { getUserRoles } from '../../../constants';

import styles from './Home.css';

export function HomeScene({ searchParams }) {
  const user = getUserFromLocalStorage();

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
