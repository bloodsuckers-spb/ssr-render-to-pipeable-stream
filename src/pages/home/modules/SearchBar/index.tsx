import { ChangeEvent, FormEvent } from 'react';
import { useState, useEffect } from 'react';

import { localStorageService } from '../../../../shared/services/StorageWrapper';

import styles from './index.module.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(
    localStorageService.get('searchValue') || ''
  );

  // ToDo custom hook
  useEffect(() => {
    return () => {
      localStorageService.set('searchValue', searchValue);
    };
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
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
        defaultValue={searchValue}
        onChange={handleChange}
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
