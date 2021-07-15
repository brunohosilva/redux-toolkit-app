import { all, takeLatest } from 'redux-saga/effects';

import { cepInfos } from '../cep';
import { getCepInfos } from '../cep/saga';

export default function* rootSaga(): any {
  return yield all([takeLatest(cepInfos, getCepInfos)]);
}
