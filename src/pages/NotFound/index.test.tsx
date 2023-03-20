import { render, screen } from '@testing-library/react';

import NotFound from '.';

const TEST_ID = 'error-page';
const NOT_FOUND_TEXT = 'Sorry, an unexpected error has occurred.';

describe('test for NotFound component', () => {
  test('is NotFound component renders clearly', () => {
    render(<NotFound />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(NOT_FOUND_TEXT)).toBeInTheDocument();
  });
});
