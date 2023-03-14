import AppNav from '../AppNav';

import styles from './index.module.css';

import { Props } from './models';

const AppHeader = ({ Heading }: Props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {Heading}
          <AppNav />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
