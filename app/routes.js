import { HomeScene } from './scenes/private/home';

import { RootScene } from './scenes/public/root/root';
import { LoginScene } from './scenes/public/login';
import { RegisterScene } from './scenes/public/register';

export const routes = {
  private: [{ path: '/home', component: HomeScene }],
  public: [
    { path: '/', component: RootScene },
    { path: '/login', component: LoginScene },
    { path: '/register', component: RegisterScene },
  ],
};
