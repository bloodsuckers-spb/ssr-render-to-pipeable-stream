import { RouterProvider } from 'react-router-dom';

import { Router } from '../pages';

import './index.scss';

const App = () => <RouterProvider router={Router()} />;

export default App;
