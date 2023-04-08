import { forwardRef, ForwardedRef, FormEvent } from 'react';

import styles from './index.module.scss';

type Props = {
  handleSubmit: (event: FormEvent) => void;
};

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
