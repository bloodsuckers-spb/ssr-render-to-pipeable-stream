import { Component } from 'react';
import { Props, State, SearchInputProps } from './models';

export default class SearchBar extends Component<Props, State> {
  private static searchValue = 'searchValue';
  private static searchInputProps: SearchInputProps = {
    type: 'text',
    id: 'search-bar',
    placeholder: 'Search',
    autoComplete: 'off',
    autoFocus: true,
  };
  constructor(props = {}) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem(SearchBar.searchValue) ?? '',
    };
  }

  public componentWillUnmount() {
    localStorage.setItem(SearchBar.searchValue, this.state.searchValue);
  }

  private handleClick() {
    console.log('handleClick');
  }

  public render() {
    return (
      <form
        action="/"
        method="get"
      >
        <input
          {...SearchBar.searchInputProps}
          defaultValue={this.state.searchValue}
        />
        <button onClick={this.handleClick}>Search</button>
      </form>
    );
  }
}
