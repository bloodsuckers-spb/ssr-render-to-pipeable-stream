import { useState, ChangeEvent, } from 'react';

const useLocalStorage = <T>(initialValue: string, key: string) => {
  const getStorageValue = () => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue) as T;
    }

    return initialValue;
  };

  const [storageValue, setValue] = useState(getStorageValue);

  const setStorageValue = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return { storageValue, setStorageValue };
};

export default useLocalStorage;
