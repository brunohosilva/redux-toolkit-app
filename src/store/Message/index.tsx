import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MessageState } from './types';

const initialState: MessageState = {
  message: 'Messagem inicial',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state = initialState, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
