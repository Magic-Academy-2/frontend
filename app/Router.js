import { DashboardLayout } from './layouts/dashboard-layout/DashboardLayout';
import { PublicLayout } from './layouts/public-layout/PublicLayout';
import { routes } from './routes';

const API_URL = 'http://localhost:4000/api/auth';

// Verificar token con la API
async function verifyToken(token) {
  // return [true, { message: 'Token verified' }];
  if (!token) return [false, { message: 'No token provided' }];
  try {
    const response = await fetch(`${API_URL}/verify-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return [data.valid, { message: data.message }];
  } catch (error) {
    console.error('Token verification failed:', error);
    return [false, { message: error.message }];
  }
}

// Navegar a una nueva ruta
export function navigateTo(path) {
  window.history.pushState({}, '', window.location.origin + path);
  Router();
}

// Definir y manejar el router
export async function Router() {
  const path = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);

  // Mostrar en /login en el caso de que no este autenticado
  const token = localStorage.getItem('token');
  const [isTokenValid] = await verifyToken(token);
  if (path === '/login' && isTokenValid) return navigateTo('/home');

  // Comprobar rutas públicas y privadas
  const publicRoute = routes.public.find((r) => r.path === path);
  const privateRoute = routes.private.find((r) => r.path === path);

  if (publicRoute) {
    const { html, logic } = publicRoute.component({ searchParams });
    PublicLayout({ mainHtml: html, mainContentLogic: logic });
  } else if (privateRoute && isTokenValid) {
    const { html, logic } = privateRoute.component({ searchParams });
    DashboardLayout({ mainHtml: html, mainContentLogic: logic });
  } else if (!publicRoute && !privateRoute) {
    console.warn(`Ruta no encontrada: ${path}. Redirigiendo al /not-found`);
    navigateTo('/not-found');
  } else {
    console.warn(`No existe token. Redirigiendo al /login`);
    navigateTo('/login');
  }
}

// Manejar el evento de retroceso/avance en el navegador
window.onpopstate = Router;
