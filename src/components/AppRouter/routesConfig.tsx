import { createRoutesFromElements, Route } from 'react-router-dom';

import App from '../App';
import { Home } from '../../pages';

import { routes } from './routes';

const routesConfig = createRoutesFromElements(
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
);

export default routesConfig;
