import { configureStore } from '@reduxjs/toolkit';

import messageReducer from '../Message';
import { MessageState } from '../Message/types';

export interface ApplicationState {
  message: MessageState;
}

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
