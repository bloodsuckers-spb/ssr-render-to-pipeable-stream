import { AppNav, Heading, Bounding } from '../../modules';

import styles from './index.module.scss';

import { Props } from './models';

const AppLayout = ({ children }: Props) => (
  <div
    className={styles.app}
    data-testid="app"
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
