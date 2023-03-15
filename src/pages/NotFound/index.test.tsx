import { render, screen } from '@testing-library/react';

import NotFound from '.';

const NOT_FOUND_ROLE = 'error-page';
const NOT_FOUND_TEXT = 'Sorry, an unexpected error has occurred.';

describe('test for NotFound component', () => {
  test('is NotFound component renders clearly', () => {
    render(<NotFound />);
    expect(screen.getByRole(NOT_FOUND_ROLE)).toBeInTheDocument();
    expect(screen.getByText(NOT_FOUND_TEXT)).toBeInTheDocument();
  });
});
