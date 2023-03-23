import styles from './index.module.scss';

type FormInputData = {
  id: string;
  type: string;
  title: string;
  value?: string;
};

type Props = {
  hook: (input: HTMLInputElement) => HTMLInputElement;
  data: FormInputData;
};

const FormInput = ({ data: { id, type, title, value }, hook }: Props) => {
  return (
    <>
      <label
        className={styles.sr}
        htmlFor={id}
      >
        {title}
      </label>
      <input
        type={type}
        id={id}
        ref={hook}
        value={value}
      />
    </>
  );
};

export default FormInput;
