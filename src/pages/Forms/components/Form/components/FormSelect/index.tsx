import { countries } from '../../constants';

const FormSelect = () => {
  return (
    <fieldset>
      <legend></legend>
      <select>
        {countries.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default FormSelect;
