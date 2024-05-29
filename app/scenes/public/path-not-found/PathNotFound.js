import styles from './PathNotFound.css';
import { navigateTo } from '../../../Router';
export function PathNotFoundScene() {
  const html = `<div class="${styles.path_not_found_mss}">
                    <h1>Error &lt; 404 &gt;</h1>
                    <h2>Page Not Found</h2>
                    <p>Error: ruta destino para el sitio web no encontrada</p>
                    <button id="btn_getBack">Regresar al sitio web</button>
    </div>`;

  const logic = () => {
    const $buttonGetBack = document.getElementById(`btn_getBack`);
    $buttonGetBack.addEventListener('click', () => {
      navigateTo('/login');
    });
  };
  return { html, logic };
}
