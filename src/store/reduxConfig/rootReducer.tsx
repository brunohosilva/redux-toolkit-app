import { combineReducers } from '@reduxjs/toolkit';

import cep from '../Cep';
import { ApplicationState } from './storeConfig';

const combinedReducer = combineReducers<ApplicationState>({
  cep,
});

const rootReducer = (state: ApplicationState, action: any) => {
  return combinedReducer(state, action);
};

export default rootReducer;
