import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { localStorageService } from '../../services/StorageWrapper';

const useLocalStorage = (initialValue: string, key: string) => {
  const searchRef = useRef<typeof storageValue>();
  const getStorageValue = () => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue) as string;
    }

    return initialValue;
  };

  const [storageValue, setValue] = useState(getStorageValue);

  const setStorageValue = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    searchRef.current = value;
  };

  useEffect(() => {
    return () => {
      if (typeof searchRef.current !== 'string') {
        return;
      }
      localStorageService.set('searchValue', searchRef.current);
    };
  }, []);

  return { storageValue, setStorageValue };
};

export default useLocalStorage;
