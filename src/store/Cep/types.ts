interface CepInfosType {
  bairro: string;
  cidade: string;
  endereco: string;
  localidade: string;
  uf: string;
}

export interface CepState {
  loading: boolean;
  cepInfo: null | CepInfosType;
}
