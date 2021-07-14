interface CepInfosType {
  bairro: string;
  cidade: string;
  endereco: string;
  localidade: string;
  uf: string;
}

export interface MessageState {
  message: string;
  loading: boolean;
  cepInfo: null | CepInfosType;
}
