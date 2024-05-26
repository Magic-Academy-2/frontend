import { HomeScene } from './scenes/private/home';

import { RootScene } from './scenes/public/root';
import { LoginScene } from './scenes/public/login';
import { RegisterScene } from './scenes/public/register';
import { ComponetsUsageScene } from './scenes/public/components-usage';

export const routes = {
  private: [{ path: '/home', component: HomeScene }],
  public: [
    { path: '/', component: RootScene },
    { path: '/login', component: LoginScene },
    { path: '/register', component: RegisterScene },
    { path: '/components-usage', component: ComponetsUsageScene },
  ],
};
