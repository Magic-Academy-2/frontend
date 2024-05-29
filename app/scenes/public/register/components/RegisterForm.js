import { formValidator } from '../../../../../helpers/form-validator';
import styles from './styles.css';

export function registerForm() {
  const html = /*html*/ `
      <header>
          <h1>Registro</h1>

        </header>
        <main>
          <section class="${styles.register_container}">
           <div class="${styles.role_buttons}">
            <button class=${styles.student_btn}></button>
             
           </div>
          </section>
          
          <button id="btn-login">Volver al login</button>
        </main>
      </div>
    `;
}
const logic = () => {
    const $registerBtnLink = document.querySelector(
      `.${styles.fallback} button`,
    );
    $registerBtnLink.addEventListener('click', () => {
      navigateTo('/register');
    });

}    