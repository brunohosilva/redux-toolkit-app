import { call, put } from 'redux-saga/effects';

import GetCepInfo from '../../services/location';
import { setCepInfos } from './index';

interface CepInfosType {
  bairro: string;
  cidade: string;
  endereco: string;
  localidade: string;
  uf: string;
}

export function* getCepInfos() {
  try {
    const response: CepInfosType = yield call(GetCepInfo, '12220281');

    yield put(setCepInfos(response));
  } catch (error) {
    // yield put(requestFailure());
  }
}
