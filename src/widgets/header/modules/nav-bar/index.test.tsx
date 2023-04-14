import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AppNav from './NavBar';

const TEST_ID = 'nav';
const NAV_LINK_HOME = 'About Us';

describe('test for AppNav component', () => {
  it('is AppNav component renders clearly', () => {
    render(<AppNav />, { wrapper: BrowserRouter });
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(NAV_LINK_HOME)).toBeInTheDocument();
  });
});
