import { Home, AboutUs, NotFound } from '../../pages';

import { AppRoutes } from './models';

export const titles = {
  Home: 'Home',
  AboutUs: 'AboutUs',
  NotFound: 'NotFound',
} as const;

export const routes: AppRoutes = [
  {
    id: 0,
    path: '/',
    title: 'Home',
    content: <Home />,
  },
  {
    id: 1,
    path: 'about-us',
    title: 'AboutUs',
    content: <AboutUs />,
  },
  {
    id: 2,
    path: '*',
    title: 'NotFound',
    content: <NotFound />,
  },
];
