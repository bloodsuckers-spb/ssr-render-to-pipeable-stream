import { forwardRef, ForwardedRef } from 'react';

import styles from './index.module.scss';

import { Props } from './models';

export const SearchBar = forwardRef(
  (
    {handleSubmit }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        data-testid="search-form"
      >
        <input
          id="search-input"
          type="text"
          className="search-bar"
          autoComplete="off"
          placeholder="Search"
          autoFocus={true}
          defaultValue={localStorage.getItem('searchValue') ?? ''}
          ref={ref}
        />
        <button
          className={styles.btn}
          data-testid="search-button"
        >
          Search
        </button>
      </form>
    );
  }
);
