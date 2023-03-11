import { Outlet } from 'react-router-dom';

import { AppHeader } from '../../components';

const RootLayout = () => (
  <>
    <AppHeader />
    <Outlet />
  </>
);

export default RootLayout;
