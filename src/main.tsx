import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './app/AppLayout/modules/AppRouter';
import routesConfig from './app/AppLayout/modules/AppRouter/routesConfig';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter(routesConfig)} />
  </React.StrictMode>
);
