import { render, screen } from '@testing-library/react';

import AppFooter from '.';

const FOOTER_ROLE = 'footer';
const FOOTER_TEXT = 'RSS 2023';

describe('test for AppFooter component', () => {
  it('is AppFooter component renders clearly', () => {
    render(<AppFooter />);
    expect(screen.getByRole(FOOTER_ROLE)).toBeInTheDocument();
    expect(screen.getByText(FOOTER_TEXT)).toBeInTheDocument();
  });
});
