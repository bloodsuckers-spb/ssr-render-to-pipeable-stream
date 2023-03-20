import { render, screen } from '@testing-library/react';

import Heading from '.';

const TEST_ID = 'heading';
const defaultTitle = 'Home';

describe('test for Heading component', () => {
  it('is Heading component renders clearly with default title', () => {
    render(<Heading />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  });
});
