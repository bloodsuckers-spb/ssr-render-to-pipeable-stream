import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';

import { Home, AboutUs, Error } from './pages';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
