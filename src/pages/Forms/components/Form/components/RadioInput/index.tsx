type Props = {
  hook: (input: HTMLInputElement) => HTMLInputElement;
};

const RadioInput = ({ hook }: Props) => {
  return (
    <fieldset>
      <legend></legend>
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
    </fieldset>
  );
};

export default RadioInput;
