import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from '.';

const ERROR_MESSAGE = 'Error, This is not Input Element';
const PLACEHOLDER_TEXT = 'Search';
const storageKey = 'searchValue';
const INPUT_VALUE = '23';
const FORM_TEST_ID = 'search-form';
const BTN_TEST_ID = 'search-button';

describe('tests for SearchBar component', () => {
  const renderSearchBar = () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    if (!(searchBar instanceof HTMLInputElement)) {
      throw new Error(ERROR_MESSAGE);
    }
    return searchBar;
  };

  it('is SearchBar component renders clearly', () => {
    expect(renderSearchBar()).toBeInTheDocument();
    expect(screen.getByTestId(FORM_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(BTN_TEST_ID)).toBeInTheDocument();
  });

  it('is SearchBar have focus', () => {
    expect(renderSearchBar()).toHaveFocus();
  });

  test('is SearchBar set value to localStorage during unmount clearly', () => {
    const { unmount } = render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    if (!(searchBar instanceof HTMLInputElement)) {
      throw new Error(ERROR_MESSAGE);
    }
    fireEvent.change(searchBar, { target: { value: INPUT_VALUE } });
    expect(searchBar.value).toBe(INPUT_VALUE);
    unmount();
    const storageValue = JSON.parse(localStorage.getItem(storageKey) ?? '');
    expect(storageValue).toBe(INPUT_VALUE);
  });
});
