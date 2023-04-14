import styles from './ConfirmMessage.module.scss';

import { Props } from './ConfirmMessage.models';

export const ConfirmMessage = ({ confirm }: Props) => {
  const clickHandler = () => confirm(true);
  return (
    <div className={styles.confirm}>
      <h1>The card has been added</h1>
      <button
        className={styles.btn}
        onClick={clickHandler}
      >
        Confirm
      </button>
    </div>
  );
};
