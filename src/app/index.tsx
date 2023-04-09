import { RouterProvider } from 'react-router-dom';

import { Router } from '../pages';

import './index.scss';

export const App = () => <RouterProvider router={Router()} />;

