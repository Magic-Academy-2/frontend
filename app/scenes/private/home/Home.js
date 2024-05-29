import { getUserFromLocalStorage } from '../../../helpers';
import { logOut } from '../../../helpers/log-out';

import globalStyles from '../../../styles/global.css';
import styles from './Home.css';

export function HomeScene({ searchParams }) {
  const user = getUserFromLocalStorage();
  console.log(user);

  const html = /*html*/ `
  
  `;

  const logic = () => {};

  return {
    html,
    logic,
  };
}
