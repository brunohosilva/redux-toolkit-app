import { combineReducers } from '@reduxjs/toolkit';

import message from '../Message';
import { ApplicationState } from './storeConfig';

const combinedReducer = combineReducers<ApplicationState>({
  message,
});

const rootReducer = (state: ApplicationState, action: any) => {
  return combinedReducer(state, action);
};

export default rootReducer;
