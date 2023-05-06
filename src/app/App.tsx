import { Layout } from 'shared/ui';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

import { AppRouter } from './providers';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { toastContainerOptions } from './constants';

export const App = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount ? (
    <>
      <Layout>
        <AppRouter />
      </Layout>
      <ToastContainer {...toastContainerOptions} />
    </>
  ) : null;
};
