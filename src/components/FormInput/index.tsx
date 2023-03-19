import { FormInput as Props } from '../Form/constants';

const FormInput = ({ title, id, inputType, errorMessage }: Props) => {
  return (
    <div>
      <h4 className="title">{title}</h4>
      <label
        className="sr-only"
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
