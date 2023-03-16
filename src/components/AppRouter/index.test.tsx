import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const About = () => <div>You are on the about page</div>;
const Home = () => <div>You are home</div>;
const NoMatch = () => <div>No match</div>;

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

export const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="*"
        element={<NoMatch />}
      />
    </Routes>
    <LocationDisplay />
  </div>
);

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();
  await user.click(screen.getByText(/about/i));
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});
