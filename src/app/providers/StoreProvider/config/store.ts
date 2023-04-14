import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchReducer, cardsReducer } from './reducers';
import { charactersApi } from './services/charactersApi';
import { RTKQueryErrorLogger } from '../ui/RTKQueryErrorLogger';

const rootReducer = combineReducers({
  searchReducer,
  cardsReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        charactersApi.middleware,
        RTKQueryErrorLogger
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
