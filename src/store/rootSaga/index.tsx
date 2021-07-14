import { all, takeLatest } from 'redux-saga/effects';

import { cepInfos } from '../Message';
import { getCepInfos } from '../Message/saga';

export default function* rootSaga(): any {
  return yield all([takeLatest(cepInfos, getCepInfos)]);
}
