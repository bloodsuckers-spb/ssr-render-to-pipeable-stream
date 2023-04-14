import { Home, AboutUs, NotFound, Forms } from 'pages';

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
