import { configureStore } from '@reduxjs/toolkit';
import { rootReducer} from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer, // Add your root reducer
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
