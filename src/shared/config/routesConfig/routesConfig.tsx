import { Home } from 'pages/home';
import { AboutUs } from 'pages/about-us';
import { NotFound } from 'pages/not-found';
import { Forms } from 'pages/forms';

export const routesConfig = [
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
