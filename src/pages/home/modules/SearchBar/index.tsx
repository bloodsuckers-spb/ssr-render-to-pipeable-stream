import { FormEvent, useEffect, useRef } from 'react';

import useLocalStorage from '../../../../shared/hooks/useLocalStorage';
import { localStorageService } from '../../../../shared/services/StorageWrapper';

import styles from './index.module.scss';

const SearchBar = () => {
  const { storageValue, setStorageValue } = useLocalStorage<string>(
    '',
    'searchValue'
  );
  const searchRef = useRef<typeof storageValue>();

  useEffect(() => {
    searchRef.current = storageValue;
  }, [storageValue]);

  useEffect(() => {
    return () => {
      localStorageService.set('searchValue', searchRef.current ?? '');
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <input
        type="text"
        className="search-bar"
        autoComplete="off"
        placeholder="Search"
        autoFocus={true}
        defaultValue={storageValue}
        onChange={setStorageValue}
      />
      <button
        className={styles.btn}
        data-testid="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
