import { FormInput as Props } from '../Form/constants';

import styles from './index.module.scss';

const FormInput = ({ title, id, inputType, errorMessage }: Props) => {
  return (
    <div>
      <h4>{title}</h4>
      <label
        className={styles.sr}
        htmlFor={id}
      >
        Surname Name
      </label>
      <input
        type={inputType}
        id={id}
      />
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormInput;
