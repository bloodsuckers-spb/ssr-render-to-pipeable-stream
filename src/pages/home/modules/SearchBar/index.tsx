import { FormEvent } from 'react';

import useLocalStorage from '../../../../shared/hooks/useLocalStorage';

import styles from './index.module.scss';

const SearchBar = () => {
  const { storageValue, setStorageValue } = useLocalStorage('', 'searchValue');

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
