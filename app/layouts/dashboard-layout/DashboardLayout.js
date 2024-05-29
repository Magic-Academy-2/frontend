import { getUserFromLocalStorage } from '../../helpers';
import HamburguerIcon from '../../assets/icons/hamburguer.png';
import CloseIcon from '../../assets/icons/close.png';
import LogoHeader from '../../assets/images/logo.png';
import HomeWhite from '../../assets/icons/home_white.png';
import booksWhite from '../../assets/icons/books_white.png';
import LogoRiwiWhite from '../../assets/images/logo_riwi_white.png';
import LogoWhite from '../../assets/images/logo_white.png';
import styles from './DashboardLayout.css';
import { logOut } from '../../helpers/log-out';
export function DashboardLayout({ mainHtml, mainContentLogic }) {
  const root = document.getElementById('root');
  const user = getUserFromLocalStorage();

  root.innerHTML = /*html*/ `
    <header id="${styles.header}">
      <div id="${styles.logo_menu}">
        <img
          id="${styles.icon_hamburguer}"
          class="${styles.show_element}"
          src="${HamburguerIcon}"
          alt="Logo_MagicAcademy_Short"
        />
        <img
          id="${styles.icon_close}"
          src="${CloseIcon}"
          alt="Logo_MagicAcademy_Short"
        />
        <a id="${styles.logo_header}" href="index.html">
          <img
            src="${LogoHeader}"
            alt="Logo_MagicAcademy_Short"
          />
        </a>
      </div>

      <nav id="${styles.nav_main}">
        <ul>
          <li>
            <a href="" id="${styles.a_profile}"
              ><img src="${user.avatar_url}" alt="${user.name} photo profile" class="${styles.img_profile}">
              ${user.name}</a
            >
            <ul>
              <li><a href="">Mi perfil</a></li>
              <li><a href="">Configuraciones</a></li>
              <li><a href="" id="btn-logout">Cerrar sesion</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <aside>
        <ul>
          <h5 class="${styles.aside_headdress}">Menu Principal</h5>
          <li>
            <div class="${styles.item_link_aside}">
              <div class="${styles.link_icon}">
                <img 
                src="${HomeWhite}" 
                alt="course_icon" />
              </div>
              <a href="#">Home</a>
            </div>
          </li>
          <li>
            <div class="${styles.item_link_aside}">
              <div class="${styles.link_icon}">
                <img 
                src="${booksWhite}" 
                alt="course_icon" />
              </div>
              <a href="#">Mis cursos</a>
            </div>
          </li>
        </ul>
      </aside>
      <!-- MAIN CONTENT OF THE PAGE RECEIVED  -->
      <section>
        <h1>hellooo${user.name}</h1>
        ${mainHtml}
      </section>
      <!-- MAIN CONTENT OF THE PAGE RECEIVED  -->
    </main>
     <footer id="${styles.footer}">
      <div id="${styles.footer_navs_container}" class="${styles.container}">
        <nav id="${styles.nav_footer}">
          <ul>
            <li><a href="">Inicios</a></li>
            <li><a href="">Quienes somos</a></li>
            <li><a href="">Formar/te con nosotros</a></li>
            <li><a href="">Quienes nos inspiran</a></li>
          </ul>
        </nav>

        <nav id="${styles.nav_politics}">
          <ul>
            <li><a href="">Preferencias de Cookies</a></li>
            <li><a href="">Terminos</a></li>
            <li><a href="">Politica de privacidad</a></li>
          </ul>
        </nav>

        <nav id="${styles.nav_collaborators}">
          <h5>Colaboradores</h5>
          <ul>
            <li>
              <a href="">
                <img 
                src="${LogoRiwiWhite}" 
                alt="LOGO RIWI WHITE"
              /></a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="${styles.footer_copyrigth}" class="${styles.container}">
        <a href="index.html"
          ><img
            src="${LogoWhite}"
            alt="magic_academic_logo"
        /></a>
        <h4>Copyrigth 2024</h4>
      </div>
    </footer>
  `;

  const $logOutBtn = document.getElementById('btn-logout');
  if (!$logOutBtn) throw new Error('Log out button not found');
  $logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  const $sidebar = document.querySelector('aside');
  // console.log($sidebar);
  const $btnHamburguer = document.getElementById(styles.icon_hamburguer);
  // console.log($btnHamburguer);
  const $btnClose = document.getElementById(styles.icon_close);
  // console.log($btnClose);
  const $headdressAside = document.querySelectorAll(
    `.${styles.aside_headdress}`,
  );

  $btnHamburguer.addEventListener('click', () => {
    $sidebar.classList.add('show_menu_complete');
    $btnHamburguer.classList.remove('show_element');
    $btnClose.classList.add('show_element');
    $headdressAside.forEach((element) => {
      element.classList.add('full_opacity');
    });
  });

  $btnClose.addEventListener('click', () => {
    $sidebar.classList.remove('show_menu_complete');
    $btnHamburguer.classList.add('show_element');
    $btnClose.classList.remove('show_element');
    $headdressAside.forEach((element) => {
      element.classList.remove('full_opacity');
    });
  });

  mainContentLogic();
}
