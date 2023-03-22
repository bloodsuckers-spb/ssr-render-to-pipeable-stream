type Props = {
  hook: (input: HTMLInputElement) => HTMLInputElement;
};

const RadioInput = ({ hook }: Props) => {
  return (
    <div>
      <label htmlFor="1"></label>
      <input
        id="1"
        type="radio"
        value="cat"
        name="sex"
        ref={hook}
      />
    </div>
  );
};

export default RadioInput;
