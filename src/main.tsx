import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/App';
import { StoreProvider } from 'app/providers/';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  </React.StrictMode>
);
