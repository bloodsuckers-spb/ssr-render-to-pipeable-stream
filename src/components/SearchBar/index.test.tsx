import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from '.';

const ERROR_MESSAGE = 'Error, This is not Input Element';
const PLACEHOLDER_TEXT = 'Search';
const INPUT_VALUE = '23';
const FORM_ROLE = 'search-form';
const BTN_ROLE = 'search-button';

describe('tests for SearchBar component', () => {
  test('is SearchBar component renders clearly', () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    if (!(searchBar instanceof HTMLInputElement)) {
      throw new Error(ERROR_MESSAGE);
    }
    expect(searchBar).toBeInTheDocument();
    expect(screen.getByRole(FORM_ROLE)).toBeInTheDocument();
    expect(screen.getByRole(BTN_ROLE)).toBeInTheDocument();
    fireEvent.change(searchBar, { target: { value: INPUT_VALUE } });
    expect(searchBar.value).toBe(INPUT_VALUE);
    expect(searchBar).toHaveFocus();
  });
});
