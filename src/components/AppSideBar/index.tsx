import Nav from '../Nav';

import styles from './index.module.css';

import { Props } from './models';

const AppSideBar = ({ changeCurrentPage }: Props) => (
  <aside className={styles.sidebar}>
    <Nav changeCurrentPage={changeCurrentPage} />
  </aside>
);

export default AppSideBar;
