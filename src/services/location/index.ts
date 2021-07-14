import axios from 'axios';

type AddressData = {
  cidade: string;
  bairro: string;
  endereco: string;
  uf: string;
  localidade: string;
};

/**
 * Busca informações à partir do cep
 * @param cep endereço do usuário
 * @returns Promisse
 */
async function cepInformation(cep: string): Promise<AddressData | null> {
  try {
    const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const data: AddressData = {
      cidade: resp.data.localidade,
      bairro: resp.data.bairro,
      endereco: resp.data.logradouro,
      uf: resp.data.uf,
      localidade: resp.data.localidade,
    };

    return data;
  } catch (error) {
    console.log('Erro no service de CEP -->', error);
    return null;
  }
}

export default cepInformation;
