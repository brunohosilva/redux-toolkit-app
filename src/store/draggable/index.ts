import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Data from '../../assets/data.json';
import { ConfigsType, DraggableState } from './types';

const initialState: DraggableState = {
  config: Data,
};

const messageSlice = createSlice({
  name: 'draggable',
  initialState,
  reducers: {
    configs(state = initialState, action: PayloadAction<ConfigsType>) {
      state.config = action.payload;
    },
  },
});

export const { configs } = messageSlice.actions;
export default messageSlice.reducer;
