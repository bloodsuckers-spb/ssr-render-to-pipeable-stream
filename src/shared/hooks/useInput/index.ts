import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
