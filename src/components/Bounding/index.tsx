import { ReactNode } from 'react';
import styles from './index.module.scss';

type Props = {
  children: ReactNode;
};

const Bounding = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Bounding;
