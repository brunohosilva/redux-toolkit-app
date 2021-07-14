import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MessageState } from './types';

const initialState: MessageState = {
  message: 'Messagem inicial',
  loading: false,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state = initialState, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    cepInfos(state = initialState) {
      state.loading = true;
    },
  },
});

export const { setMessage, cepInfos } = messageSlice.actions;
export default messageSlice.reducer;
