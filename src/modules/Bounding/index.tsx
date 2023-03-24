import styles from './index.module.scss';

import { Props } from './models';

const Bounding = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Bounding;
