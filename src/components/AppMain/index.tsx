import { Outlet } from 'react-router-dom';

import { SideBar } from '..';

import styles from './index.module.css';

const AppMain = () => (
  <div className="main">
    <div className="container">
      <div className={styles.inner}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  </div>
);

export default AppMain;
