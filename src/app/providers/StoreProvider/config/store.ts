import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './reducers';
import { charactersApi } from './services/charactersApi';

import { rtkQueryErrorLogger } from 'widgets/error-logger/rtkQueryErrorLogger';

const rootReducer = combineReducers({
  searchReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        charactersApi.middleware,
        rtkQueryErrorLogger
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
