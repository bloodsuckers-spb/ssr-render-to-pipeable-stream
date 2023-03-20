import { render, screen } from '@testing-library/react';

import Heading from '.';

const TEST_ID = 'heading';
const titles = ['Home', 'AboutUs', 'NotFound'] as const;

describe('test for AppFooter component', () => {
  it('is AppFooter component renders clearly', () => {
    const title = titles[Math.floor(Math.random() * titles.length)];
    render(<Heading />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
