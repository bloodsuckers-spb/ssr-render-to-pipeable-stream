import { FormEvent, useRef, useEffect } from 'react';

import styles from './SearchBar.module.scss';

import { useAppSelector, useAppDispatch } from 'shared/hooks';
import { searchSlice } from 'app/providers/StoreProvider/config/reducers/searchSlice/searchSlice';

export const SearchBar = () => {
  const { searchValue } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const { setSearchValue } = searchSlice.actions;

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setSearchValue(searchInputRef.current?.value ?? ''));
  };

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      data-testid="search-form"
    >
      <input
        id="search-input"
        type="text"
        className="search-bar"
        autoComplete="off"
        placeholder="Search"
        autoFocus={true}
        defaultValue={searchValue}
        ref={searchInputRef}
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
