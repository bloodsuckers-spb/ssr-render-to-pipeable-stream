import styles from './index.module.css';

import { Props } from './models';

const AppMain = ({ children }: Props) => (
  <div className="main">
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  </div>
);

export default AppMain;
