import styles from './ConfirmAlert.module.scss';

import { Props } from './ConfirmAlert.models';

export const ConfirmAlert = ({ confirm }: Props) => (
  <div className={styles.confirm}>
    <h1>The card has been added</h1>
    <button
      className={styles.btn}
      onClick={() => confirm(true)}
    >
      Confirm
    </button>
  </div>
);
