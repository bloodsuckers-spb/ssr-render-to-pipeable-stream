import { Nav } from '../';
import styles from './index.module.css';

const AppHeader = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.inner}>
        <Nav />
      </div>
    </div>
  </header>
);

export default AppHeader;
