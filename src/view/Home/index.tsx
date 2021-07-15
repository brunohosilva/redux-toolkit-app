import React from 'react';
import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { cepInfos } from '../../store/cep';
import { ApplicationState } from '../../store/reduxConfig/storeConfig';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { cepInfo } = useSelector((state: ApplicationState) => state.cep);

  const handlePress = () => {
    dispatch(cepInfos());
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>dados do cep: {cepInfo?.bairro || 'n/d'}</Text>
      <Button title="get cep info" onPress={handlePress} />
    </View>
  );
};

export default Home;
