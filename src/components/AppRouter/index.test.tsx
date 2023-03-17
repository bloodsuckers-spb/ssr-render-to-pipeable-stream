import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AppRouter from '.';
import routesConfig from './routesConfig';

const APP_ROLE = 'app';
const HEADING_TEXT = 'AboutUs';

describe('Tests for AppRouter', async () => {
  it('is AppRouter provider works clearly', async () => {
    render(<RouterProvider router={AppRouter(routesConfig)} />);
    expect(screen.getByRole(APP_ROLE)).toBeInTheDocument();
  });
  it('Render About Us page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/about-us'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(HEADING_TEXT)).toBeInTheDocument();
  });
});
