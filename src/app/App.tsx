import { RouterProvider } from './providers';
import { ToastContainer } from 'react-toastify';
import { Router } from './providers/RouterProvider/Router';

import './index.scss';

export const App = () => (
  <>
    <RouterProvider router={Router()} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </>
);
