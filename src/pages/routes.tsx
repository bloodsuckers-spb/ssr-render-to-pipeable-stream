import Home from './Home';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import Forms from './Forms';

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