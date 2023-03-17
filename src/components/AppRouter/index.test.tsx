import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AppRouter from '.';
import routesConfig from './routesConfig';

const APP_ROLE = 'app';
const HEADING_ROLE = 'app-heading';
const HOME_HEADING_TEXT = 'Home';
const ABOUT_US_HEADING_TEXT = 'AboutUs';
const NOT_FOUND_HEADING_TEXT = 'NotFound';
const BAD_ROUTE = '/123';

describe('Tests for AppRouter', async () => {
  const setTestDefinition = (page: string) => `Render ${page} page`;

  it('is AppRouter provider works clearly', async () => {
    render(<RouterProvider router={AppRouter(routesConfig)} />);
    expect(screen.getByRole(APP_ROLE)).toBeInTheDocument();
  });

  it(setTestDefinition('About Us'), () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/about-us'],
    });
    render(<RouterProvider router={router} />);
    const heading = screen.getByRole(HEADING_ROLE);
    expect(heading).toHaveTextContent(ABOUT_US_HEADING_TEXT);
  });

  it(setTestDefinition('Home page'), () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    const heading = screen.getByRole(HEADING_ROLE);
    expect(heading).toHaveTextContent(HOME_HEADING_TEXT);
  });

  it(setTestDefinition('NotFound page'), () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [BAD_ROUTE],
    });
    render(<RouterProvider router={router} />);
    const heading = screen.getByRole(HEADING_ROLE);
    expect(heading).toHaveTextContent(NOT_FOUND_HEADING_TEXT);
  });
});
