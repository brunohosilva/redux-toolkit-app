import { all, takeLatest } from 'redux-saga/effects';

import { cepInfos } from '../Cep';
import { getCepInfos } from '../Cep/saga';

export default function* rootSaga(): any {
  return yield all([takeLatest(cepInfos, getCepInfos)]);
}
