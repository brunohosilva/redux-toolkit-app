import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MessageState } from './types';

const initialState: MessageState = {
  message: 'Messagem inicial',
  loading: false,
  cepInfo: null,
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
    setCepInfos(state = initialState, action: PayloadAction<string>) {
      state.cepInfo = action.payload;
    },
  },
});

export const { setMessage, cepInfos, setCepInfos } = messageSlice.actions;
export default messageSlice.reducer;
