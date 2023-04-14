import { RouterProvider } from './providers';
import { ToastContainer } from 'react-toastify';
import { Router } from './providers/RouterProvider/Router';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { toastContainerOptions } from './constants';

export const App = () => (
  <>
    <RouterProvider router={Router()} />
    <ToastContainer {...toastContainerOptions} />
  </>
);
