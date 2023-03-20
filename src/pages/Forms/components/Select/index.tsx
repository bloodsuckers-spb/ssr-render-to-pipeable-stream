type Props = {
  options: Array<string>;
};

const Select = ({ options }: Props) => {
  return (
    <select>
      {options.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Select;
