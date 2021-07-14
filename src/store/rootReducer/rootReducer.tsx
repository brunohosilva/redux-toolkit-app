import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../Message';

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
});