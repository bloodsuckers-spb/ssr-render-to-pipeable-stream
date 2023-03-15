import { Component, ChangeEvent, FormEvent } from 'react';

import { localStorageService } from '../../services/StorageWrapper';

import { Props, State, SearchInputProps } from './models';

import styles from './index.module.css';

export default class SearchBar extends Component<Props, State> {
  private static readonly searchValue = 'searchValue';
  private static readonly searchInputProps: SearchInputProps = {
    type: 'text',
    className: 'search-bar',
    autoComplete: 'off',
    autoFocus: true,
    placeholder: 'Search',
    role: 'search',
    'aria-label': 'Search',
  };
  constructor(props = {}) {
    super(props);
    this.state = {
      searchValue: localStorageService.get(SearchBar.searchValue) || '',
    };
  }

  public componentWillUnmount() {
    localStorageService.set(SearchBar.searchValue, this.state.searchValue);
  }

  private handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: value });
  };

  private handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  public render() {
    return (
      <form
        className={styles.form}
        role="search-form"
        onSubmit={this.handleSubmit}
      >
        <input
          {...SearchBar.searchInputProps}
          defaultValue={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button
          className={styles.btn}
          role="search-button"
        >
          Search
        </button>
      </form>
    );
  }
}
