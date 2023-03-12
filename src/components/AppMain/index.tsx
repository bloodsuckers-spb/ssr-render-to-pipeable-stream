import { Outlet } from 'react-router-dom';

import { SideBar } from '..';

import styles from './index.module.css';

import { Props } from './models';

const AppMain = ({ changeCurrentPage }: Props) => (
  <div className="main">
    <div className={styles.container}>
      <div className={styles.inner}>
        <SideBar changeCurrentPage={changeCurrentPage} />
        <Outlet />
      </div>
    </div>
  </div>
);

export default AppMain;
