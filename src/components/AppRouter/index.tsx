import { createBrowserRouter } from 'react-router-dom';

import { Home, AboutUs, Error } from '../../pages';

import App from '../App';

const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
      ],
    },
  ]);
};

export default AppRouter;
