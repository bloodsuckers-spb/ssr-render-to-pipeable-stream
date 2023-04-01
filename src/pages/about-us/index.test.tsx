import { render, screen } from '@testing-library/react';

import { AboutUs } from '.';

const TEST_ID = 'about-us-page';

describe('test for AboutUs component', () => {
  test('is AboutUs component renders clearly', () => {
    render(<AboutUs />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
