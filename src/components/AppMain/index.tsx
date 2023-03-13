import { Outlet } from 'react-router-dom';

import styles from './index.module.css';

import { Props } from './models';

const AppMain = ({ SideBar }: Props) => (
  <div className="main">
    <div className={styles.container}>
      <div className={styles.inner}>
        {SideBar}
        <Outlet />
      </div>
    </div>
  </div>
);

export default AppMain;
