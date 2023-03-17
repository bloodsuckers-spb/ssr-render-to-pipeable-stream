import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AppRouter = (routesConfig: RouteObject[]) =>
  createBrowserRouter(routesConfig);

export default AppRouter;
