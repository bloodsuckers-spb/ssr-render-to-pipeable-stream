import styles from './index.module.css';

import { Props } from './models';

const AppSideBar = ({ AppNav }: Props) => (
  <aside className={styles.sidebar}>
    {AppNav}
  </aside>
);

export default AppSideBar;
