import styles from './index.module.css';

import { Props } from './models'

const AppHeader = ({ currentPage }: Props) => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.inner}>{currentPage}</div>
    </div>
  </header>
);

export default AppHeader;
