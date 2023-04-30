import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers';

import { App } from 'app/App';

const APP_TEST_ID = 'app';
const HEADING_TEST_ID = 'heading';

const HOME_HEADING_TEXT = 'Home';
const ABOUT_US_HEADING_TEXT = 'About Us';

const NOT_FOUND_HEADING_TEXT = 'Not Found';
const BAD_ROUTE = '/123';

describe('Tests for AppRouter', async () => {
  const init = () => {
    render(
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    );
  };

  const setTestDefinition = (page: string) => `Render ${page} page`;

  const isHaveTextContent = (route: string, TEXT: string) => {
    window.history.pushState({}, 'Page Title', route);
    init();
    expect(screen.getByTestId(HEADING_TEST_ID)).toHaveTextContent(TEXT);
  };

  it('is AppRouter provider works clearly', () => {
    init();
    expect(screen.getByTestId(APP_TEST_ID)).toBeInTheDocument();
  });

  it(setTestDefinition('About Us'), () => {
    isHaveTextContent('/about-us', ABOUT_US_HEADING_TEXT);
  });

  it(setTestDefinition('Home page'), () => {
    isHaveTextContent('/', HOME_HEADING_TEXT);
  });

  it(setTestDefinition('NotFound page'), () => {
    isHaveTextContent(BAD_ROUTE, NOT_FOUND_HEADING_TEXT);
  });
});
