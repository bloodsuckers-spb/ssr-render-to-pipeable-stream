import { render, screen } from '@testing-library/react';

import AboutUs from '.';

const ABOUT_US_ROLE = 'about-us-page';

describe('test for AboutUs component', () => {
  test('is AboutUs component renders clearly', () => {
    render(<AboutUs />);
    expect(screen.getByRole(ABOUT_US_ROLE)).toBeInTheDocument();
  });
});
