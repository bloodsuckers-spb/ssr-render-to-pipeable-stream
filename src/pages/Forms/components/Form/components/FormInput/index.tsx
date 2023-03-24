import styles from './index.module.scss';

type Props = {
  hook: (input: HTMLInputElement) => void;
  id: string;
  type: string;
  title: string;
  value?: string;
  name?: string;
};

const FormInput = ({ hook, id, title, type, value, name }: Props) => {
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
        name={name}
      />
      {value && <span>{value}</span>}
    </>
  );
};

export default FormInput;
