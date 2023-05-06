import { Routes, Route } from 'react-router-dom';

import { routesConfig } from 'shared/config/routesConfig/routesConfig';

export const AppRouter = () => (
  <Routes>
    {routesConfig.map(({ id, path, content }) => (
      <Route
        key={id}
        path={path}
        element={content}
      />
    ))}
  </Routes>
);
