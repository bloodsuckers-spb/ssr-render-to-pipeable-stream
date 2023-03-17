import { Home, AboutUs, NotFound, Forms } from '../../pages';

import { AppRoutes } from './models';

export const titles = {
  Home: 'Home',
  AboutUs: 'AboutUs',
  NotFound: 'NotFound',
  Forms: 'Forms',
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
  {
    id: 3,
    path: 'forms',
    title: 'Forms',
    content: <Forms />,
  },
];
