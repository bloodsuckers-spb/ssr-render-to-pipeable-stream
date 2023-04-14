import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Layout } from 'shared/ui';
import { routesConfig } from 'shared/config/routesConfig/routesConfig';

export const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {routesConfig.map(({ id, path, content }) => {
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
