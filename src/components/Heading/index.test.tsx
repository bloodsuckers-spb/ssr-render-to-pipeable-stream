import { render, screen } from '@testing-library/react';

import Heading from '.';

const TEST_ID = 'heading';
const DEFAULT_TITLE = 'Home';
const ABOUT_US_TITLE = 'About Us';
const NOT_FOUND_TITLE = 'Not Found';

describe('test for Heading component', () => {
  it('is Heading component renders clearly with default title', () => {
    render(<Heading />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
  });

  it('is Heading component renders clearly with Abous Us title', () => {
    window.history.pushState({}, 'Page Title', '/about-us');
    render(<Heading />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_US_TITLE)).toBeInTheDocument();
  });

  it('is Heading component renders clearly with Abous Us title', () => {
    window.history.pushState({}, 'Page Title', '/44444');
    render(<Heading />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(NOT_FOUND_TITLE)).toBeInTheDocument();
  });
});
