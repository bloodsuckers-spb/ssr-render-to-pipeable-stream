import { createRoutesFromElements, Route } from 'react-router-dom';

import App from '../App';

import { routes } from './routes';

const routesConfig = createRoutesFromElements(
  <Route>
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
);

export default routesConfig;
