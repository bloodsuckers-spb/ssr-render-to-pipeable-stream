import { Component, ChangeEvent } from 'react';

import { localStorageService } from '../../services/StorageWrapper';

import { Props, State, SearchInputProps, FormProps } from './models';

export default class SearchBar extends Component<Props, State> {
  private static readonly searchValue = 'searchValue';
  private static readonly formProps: FormProps = {
    className: 'search-form',
    role: 'search-form',
  };
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
  }: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: value });
  };

  public render() {
    return (
      <form {...SearchBar.formProps}>
        <input
          {...SearchBar.searchInputProps}
          defaultValue={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
}
