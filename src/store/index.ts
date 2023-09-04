import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { testApi } from "./services/testApi";
import { api } from "./services/api";
import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  [testApi.reducerPath]: testApi.reducer,
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  user: userReducer,
});

export const setupStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        api.middleware,
        testApi.middleware
      )
  });
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  setupListeners(store.dispatch);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
