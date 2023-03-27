import { RouterProvider } from 'react-router-dom';

import AppRouter from './providers/AppRouter';
import routesConfig from './providers/AppRouter/routesConfig';

import './index.scss';

const App = () => {
  return <RouterProvider router={AppRouter(routesConfig)} />;
};

export default App;
