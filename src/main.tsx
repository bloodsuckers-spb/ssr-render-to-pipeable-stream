import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import routesConfig from './components/AppRouter/routesConfig';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter(routesConfig)} />
  </React.StrictMode>
);
