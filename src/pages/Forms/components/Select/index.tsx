import { countries } from '../Form/constants';

const Select = () => {
  return (
    <select>
      {countries.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Select;
