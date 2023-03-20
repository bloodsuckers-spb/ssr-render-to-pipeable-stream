import { AppNav, AppHeading, Bounding } from '..';

import styles from './index.module.scss';

import { AppProps } from './models';

const AppLayout = ({ children }: AppProps) => (
  <div
    className={styles.app}
    role="app"
  >
    <header className={styles.header}>
      <Bounding>
        <AppHeading />
        <AppNav />
      </Bounding>
    </header>
    <main>
      <Bounding>{children}</Bounding>
    </main>
    <footer
      role="footer"
      className={styles.footer}
    >
      RSS 2023
    </footer>
  </div>
);

export default AppLayout;
