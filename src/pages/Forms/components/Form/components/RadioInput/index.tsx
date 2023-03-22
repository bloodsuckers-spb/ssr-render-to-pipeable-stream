type RadioData = {
  value: string;
  id: string;
};

type Props = {
  hook: (input: HTMLInputElement) => HTMLInputElement;
  data: RadioData;
};

const RadioInput = ({ hook, data: { id, value } }: Props) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        ref={hook}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioInput;
