import React from 'react';
import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server';

import { StoreProvider } from 'app/providers';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './app/App';

export const render = (url: string, options: RenderToPipeableStreamOptions) =>
  renderToPipeableStream(
    <React.StrictMode>
      <StoreProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StoreProvider>
    </React.StrictMode>,
    options
  );
