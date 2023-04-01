import { Home } from './home';
import { NotFound } from './not-found';
import { AboutUs } from './about-us';
import { Forms } from './forms';

export const routes = [
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
