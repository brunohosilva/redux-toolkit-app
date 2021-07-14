import React from 'react';
import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { setMessage, cepInfos } from '../../store/Message';
import { ApplicationState } from '../../store/rootReducer/storeConfig';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state: ApplicationState) => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
    dispatch(cepInfos());
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{message}</Text>
      <Button title="Set Message" onPress={handlePress} />
      <Button title="get cep info" onPress={handlePress} />
    </View>
  );
};

export default Home;
