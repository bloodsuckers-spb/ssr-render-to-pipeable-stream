import { Home, AboutUs, NotFound } from '../pages';

export const routes = [
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
] as const;
