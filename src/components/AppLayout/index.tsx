import { AppNav, Heading, Bounding } from '..';

import styles from './index.module.scss';

import { AppProps } from './models';

const AppLayout = ({ children }: AppProps) => (
  <div
    className={styles.app}
    role="app"
  >
    <header className={styles.header}>
      <Bounding>
        <Heading />
        <AppNav />
      </Bounding>
    </header>
    <main>
      <Bounding>{children}</Bounding>
    </main>
    <footer className={styles.footer}>RSS 2023</footer>
  </div>
);

export default AppLayout;
