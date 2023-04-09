import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { SearchBar } from '.';

const ERROR_MESSAGE = 'Error, This is not Input Element';
const PLACEHOLDER_TEXT = 'Search';
const FORM_TEST_ID = 'search-form';
const BTN_TEST_ID = 'search-button';

describe('tests for SearchBar component', () => {
  const handleSubmit = vi.fn();

  const renderSearchBar = () => {
    render(<SearchBar handleSubmit={handleSubmit} />);
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
});
