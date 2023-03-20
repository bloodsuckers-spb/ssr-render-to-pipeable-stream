import { render, screen } from '@testing-library/react';

import AppHeading from '.';

const HEADING_ROLE = 'app-heading';
const titles = ['Home', 'AboutUs', 'NotFound'] as const;

describe('test for AppFooter component', () => {
  it('is AppFooter component renders clearly', () => {
    const title = titles[Math.floor(Math.random() * titles.length)];
    render(<AppHeading />);
    expect(screen.getByRole(HEADING_ROLE)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
