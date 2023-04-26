import React from 'react';
import ReactDOM from 'react-dom/client';

import { StoreProvider } from 'app/providers';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
