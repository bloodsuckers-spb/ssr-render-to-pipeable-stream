import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AppRouter from '.';
import routesConfig from './routesConfig';

const APP_TEST_ID = 'app';
const HEADING_TEST_ID = 'heading';
const HOME_HEADING_TEXT = 'Home';
const ABOUT_US_HEADING_TEXT = 'About Us';
const NOT_FOUND_HEADING_TEXT = 'Not Found';
const BAD_ROUTE = '/123';

describe('Tests for AppRouter', async () => {
  const setTestDefinition = (page: string) => `Render ${page} page`;

  it('is AppRouter provider works clearly', async () => {
    render(<RouterProvider router={AppRouter(routesConfig)} />);
    expect(screen.getByTestId(APP_TEST_ID)).toBeInTheDocument();
  });

  it(setTestDefinition('About Us'), () => {
    window.history.pushState({}, 'Page Title', '/about-us');
    render(<RouterProvider router={createMemoryRouter(routesConfig)} />);
    expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent(
      ABOUT_US_HEADING_TEXT
    );
  });

  it(setTestDefinition('Home page'), () => {
    window.history.pushState({}, 'Page Title', '/');
    render(<RouterProvider router={createMemoryRouter(routesConfig)} />);
    expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent(
      HOME_HEADING_TEXT
    );
  });

  it(setTestDefinition('NotFound page'), () => {
    window.history.pushState({}, 'Page Title', BAD_ROUTE);
    render(<RouterProvider router={createMemoryRouter(routesConfig)} />);
    expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent(
      NOT_FOUND_HEADING_TEXT
    );
  });
});
