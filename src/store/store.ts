import { configureStore } from '@reduxjs/toolkit';
import {thunk }from "redux-thunk"
import { rootReducer, initialState} from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer, // Add your root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
