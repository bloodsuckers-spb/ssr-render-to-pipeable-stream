import { createBrowserRouter } from 'react-router-dom';

import { Home, AboutUs, NotFound } from '../../pages';

import App from '../App';

const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default AppRouter;
