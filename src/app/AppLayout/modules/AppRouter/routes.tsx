import { Home, AboutUs, NotFound, Forms } from '../../../pages'

import { AppRoutes } from './models';

export const routes: AppRoutes = [
  {
    id: 'home',
    path: '/',
    content: <Home />,
  },
  {
    id: 'not-found',
    path: '*',
    content: <NotFound />,
  },
  {
    id: 'about-us',
    path: '/about-us',
    content: <AboutUs />,
  },

  {
    id: 'forms',
    path: '/forms',
    content: <Forms />,
  },
];
