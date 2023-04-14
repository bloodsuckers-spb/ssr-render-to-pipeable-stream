import { ToastContainerProps } from 'react-toastify';

export const baseUrl = 'https://rickandmortyapi.com/api';

export const toastContainerOptions: ToastContainerProps = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'dark',
};
