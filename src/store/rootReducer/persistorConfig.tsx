import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export const persitorConfig = {
  key: 'App',
  storage: AsyncStorage,
  whitelist: [''],
};

/**
 * Returns an enhanced reducer
 * @param {Function} reducers
 */
export default (reducers: any) => persistReducer(persitorConfig, reducers);
