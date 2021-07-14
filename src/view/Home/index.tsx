import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../store/Message";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  const handlePress = () => {
    dispatch(setMessage("Message from Component"));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{message}</Text>
      <Button title={"Set Message"} onPress={handlePress} />
    </View>
  );
};

export default Home;
