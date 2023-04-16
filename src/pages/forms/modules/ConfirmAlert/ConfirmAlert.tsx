import styles from './ConfirmAlert.module.scss';

import { Props } from './ConfirmAlert.models';

export const ConfirmAlert = ({ confirm }: Props) => (
  <div
    className={styles.confirm}
    data-testid="confirm-alert"
  >
    <h1>The card has been added</h1>
    <button
      className={styles.btn}
      onClick={() => confirm(true)}
      data-testid="confirm-alert-btn"
    >
      Confirm
    </button>
  </div>
);
