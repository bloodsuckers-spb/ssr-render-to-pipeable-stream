import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import { Home } from '../../pages';

import { AppRoutes } from './models';

const AppRouter = (routes: AppRoutes) => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          element={
            <App title="Home">
              <Home />
            </App>
          }
        />
        {routes.map(({ id, path, title, content }) => {
          return (
            <Route
              key={id}
              path={path}
              element={<App title={title}>{content}</App>}
            />
          );
        })}
      </Route>
    )
  );
};

export default AppRouter;
