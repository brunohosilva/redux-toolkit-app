import { applyMiddleware, createStore, Store } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { MessageState } from '../Message/types';
import rootSaga from '../rootSaga';
import { persitorConfig } from './persistorConfig';
import rootReducer from './rootReducer';

export interface ApplicationState {
  message: MessageState;
}

const sagaMiddleware = createSagaMiddleware();

const AppStore: Store<ApplicationState> = createStore(
  persistReducer<ApplicationState>(persitorConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const Persistor = persistStore(AppStore);

export { AppStore, Persistor };
