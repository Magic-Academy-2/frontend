import './Login.css';
import { LoginForm } from './components/form';

export function LoginScene({ searchParams }) {
  const { html, logic } = LoginForm();
  return {
    html,
    logic,
  };
}
