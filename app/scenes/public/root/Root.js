import { navigateTo } from '../../../Router';
import styles from './Root.css';

export function RootScene() {
  const header = `
        <header class="${styles.header}">
            <div>
                <img src=""/>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Servicios</a></li>
                    <li><a href="/register">Nosotros</a></li>
                    <li><a href="/register">Contacto</a></li>
                    <li><button id="btn-login">login</button></li>
                </ul>
            </nav>
        </header>
    `;

  const html = `
        ${header}
    `;

  // logic

  const logic = () => {
    const button = document.getElementById('btn-login');
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  };
  return { html, logic };
}
