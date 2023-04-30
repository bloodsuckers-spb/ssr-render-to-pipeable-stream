import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PreloadedState } from '@reduxjs/toolkit';
import {
  RootState,
  setupStore,
} from 'app/providers/StoreProvider/config/store';

import { App } from './app/App';

declare global {
  interface Window {
    __PRELOADED_STATE__: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
