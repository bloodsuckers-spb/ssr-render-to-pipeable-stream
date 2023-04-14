import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Router } from 'pages/Router';

import './index.scss';

export const App = () => {
  return (
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
};
