import { Component, ChangeEvent } from 'react';
import { Props, State, SearchInputProps } from './models';

export default class SearchBar extends Component<Props, State> {
  private static searchValue = 'searchValue';
  private static searchInputProps: SearchInputProps = {
    type: 'text',
    id: 'search-bar',
    autoComplete: 'off',
    autoFocus: true,
    role: 'search',
    placeholder: 'Search',
    'aria-label': 'Search',
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
    console.log(this.state);
  }

  private handleChange({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: value });
  }

  public render() {
    return (
      <form
        className="search-form"
        role="search-form"
      >
        <input
          {...SearchBar.searchInputProps}
          defaultValue={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Search</button>
      </form>
    );
  }
}
