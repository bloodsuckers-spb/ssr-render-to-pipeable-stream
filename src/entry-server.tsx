import React from 'react';
import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from 'app/providers/StoreProvider/config/store';
import { charactersApi } from 'app/providers/StoreProvider/config/services/charactersApi';

import { App } from './app/App';

export const render = async (
  url: string,
  options: RenderToPipeableStreamOptions
) => {
  const store = setupStore();
  store.dispatch(charactersApi.endpoints.getCharactersByName.initiate(''));
  await Promise.all(
    store.dispatch(charactersApi.util.getRunningQueriesThunk())
  );
  
  const preloadedState = store.getState();

  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );

  return { stream, preloadedState };
};
