import { configureStore } from '@reduxjs/toolkit';
import updateReducer from './update-slice';
import authReducer from './auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    update: updateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
