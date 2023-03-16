import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Home } from '../../pages';

test('event route', async () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
  ];
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router} />);
  expect(screen.getByRole('cards-list')).toBeInTheDocument();
});
