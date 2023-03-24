import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './app/AppRouter';
import routesConfig from './app/AppRouter/routesConfig';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter(routesConfig)} />
  </React.StrictMode>
);
