import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AppNav from '.';

const NAV_ROLE = 'navigation';
const NAV_LINK_HOME = 'About Us';

describe('test for AppNav component', () => {
  test('is AppNav component renders clearly', () => {
    render(<AppNav />, { wrapper: BrowserRouter });
    expect(screen.getByRole(NAV_ROLE)).toBeInTheDocument();
    expect(screen.getByText(NAV_LINK_HOME)).toBeInTheDocument();
  });
});
