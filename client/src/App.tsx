import React from "react";
import { FC } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


interface AppProps {
  title: string;
}

const App: FC<AppProps> = ({ title }) => {
  return (
    <NavigationContainer>
      <View>
        <Text>{title}</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
