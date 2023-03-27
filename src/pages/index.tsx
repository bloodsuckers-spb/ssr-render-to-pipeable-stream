import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Layout from '../shared/layout';

import { routes } from './routes';

export const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {routes.map(({ id, path, content }) => {
          return (
            <Route
              key={id}
              path={path}
              element={<Layout>{content}</Layout>}
            />
          );
        })}
      </Route>
    )
  );
};
