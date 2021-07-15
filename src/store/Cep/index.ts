import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CepState } from './types';

const initialState: CepState = {
  loading: false,
  cepInfo: null,
};

const messageSlice = createSlice({
  name: 'cep',
  initialState,
  reducers: {
    cepInfos(state = initialState) {
      state.loading = true;
    },
    setCepInfos(state = initialState, action: PayloadAction<string>) {
      state.cepInfo = action.payload;
    },
  },
});

export const { cepInfos, setCepInfos } = messageSlice.actions;
export default messageSlice.reducer;
