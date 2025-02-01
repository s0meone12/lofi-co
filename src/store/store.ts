import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers'; // Import your root reducer
// import { initialState } from './reducers';

const store = configureStore({
  reducer: rootReducer, // Add your root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // preloadedState :initialState,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
