import { combineReducers } from '@reduxjs/toolkit';

import cep from '../cep';
import configs from '../draggable';
import { ApplicationState } from './storeConfig';

const combinedReducer = combineReducers<ApplicationState>({
  cep,
  configs,
});

const rootReducer = (state: ApplicationState, action: any) => {
  return combinedReducer(state, action);
};

export default rootReducer;
