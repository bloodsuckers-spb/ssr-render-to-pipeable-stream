import styles from './index.module.css';

import { Props } from './models';

const AppMain = ({ content }: Props) => (
  <div className="main">
    <div className={styles.container}>
      <div className={styles.inner}>
        {content}
      </div>
    </div>
  </div>
);

export default AppMain;
