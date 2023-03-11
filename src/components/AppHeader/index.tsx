import { Nav } from '../';
import styles from './index.module.css';

const AppHeader = () => (
  <header className={styles.header}>
    <div className="container">
      <Nav />
      <div className={styles.inner}></div>
    </div>
  </header>
);

export default AppHeader;
