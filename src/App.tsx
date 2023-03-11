import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import RootLayout from './components/RootLayout';
import { Home, AboutUs } from './pages';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path="about-us"
        element={<AboutUs />}
      />
    </Route>
  )
);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
