import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from 'react-redux';

import { cepInfos } from '../../store/cep';
import { ApplicationState } from '../../store/reduxConfig/storeConfig';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { cepInfo } = useSelector((state: ApplicationState) => state.cep);
  const { config } = useSelector((state: ApplicationState) => state.configs);
  const [shortcut, setShorcut] = useState(config.default);
  console.log(shortcut);
  const handlePress = () => {
    dispatch(cepInfos());
  };

  // Function to render Item of shortcut
  function RenderItem({ item, drag }) {
    return (
      <View style={{ backgroundColor: 'red', marginTop: 20 }}>
        <TouchableOpacity onLongPress={drag} delayLongPress={0}>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text>dados do cep: {cepInfo?.bairro || 'n/d'}</Text>
      <Button title="get cep info" onPress={handlePress} />
      <DraggableFlatList
        data={shortcut}
        renderItem={RenderItem}
        keyExtractor={(item) => `${item.value}`}
        onDragEnd={({ data }) => setShorcut(data)}
      />
    </SafeAreaView>
  );
};

export default Home;
