import { createRoutesFromElements, Route } from 'react-router-dom';

import App from '../../app/AppLayout';

import { routes } from './routes';

const routesConfig = createRoutesFromElements(
  <Route>
    {routes.map(({ id, path, content }) => {
      return (
        <Route
          key={id}
          path={path}
          element={<App>{content}</App>}
        />
      );
    })}
  </Route>
);

export default routesConfig;