import React from 'react';
import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { App } from './app/App';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    options
  );
  return stream;
}
