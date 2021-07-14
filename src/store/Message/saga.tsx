import { call, put } from 'redux-saga/effects';

import GetCepInfo from '../../services/location';

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
    console.log('response -->', response.bairro);
    // yield put(accessTokenSuccess(access_token));
  } catch (error) {
    // yield put(requestFailure());
  }
}
