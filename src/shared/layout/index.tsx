import { AppNav, Heading } from '../../features';

import styles from './index.module.scss';

import { Props } from './models';

const Layout = ({ children }: Props) => (
  <div
    className={styles.app}
    data-testid="app"
  >
    <header className={styles.header}>
      <div className={styles.bounding}>
        <div className={styles.inner}>
          <Heading />
          <AppNav />
        </div>
      </div>
    </header>
    <main>
      <div className={styles.bounding}>
        <div className={styles.inner}>{children}</div>
      </div>
    </main>
    <footer className={styles.footer}>RSS 2023</footer>
  </div>
);

export default Layout;