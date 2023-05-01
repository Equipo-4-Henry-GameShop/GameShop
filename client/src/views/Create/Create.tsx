import { View, Text, TextInput, Button, Picker } from "react-native";
import SelectDropDown from "react-native-select-dropdown"

import { useState } from "react";

const CreatePublication = () => {
  interface newVideoGame {
    id: string;
    name: string;
    platform: string[];
    description: string;
    image: string;
    genres: string;
    screnShots: string;
    tags: string[];
    releaseDate: string;
  }

  const [newVideoGame, setNewVideoGame] = useState({
    id: "",
    name: "",
    platform: [],
    description: "",
    image: "",
    genres: "",
    screnShots: "",
    tags: "",
    releaseDate: "",
  });

  const handleInputChange = (inputName: string, inputValue: string) => {
    setNewVideoGame({
      ...newVideoGame,
      [inputName]: inputValue,
    });
  };

  return (
    <View>
      <View>
        <Text>Id: </Text>
        <TextInput
          value={newVideoGame.id}
          onChangeText={(text) => handleInputChange("email", text)}
        />
      </View>

      <View>
        <Text>Name: </Text>
        <TextInput
          value={newVideoGame.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
      </View>

      <View>
        <Text>Platform: </Text>
        <SelectDropDown></SelectDropDown>
      </View>

      <View>
        <Text>Name: </Text>
        <TextInput
          value={newVideoGame.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
      </View>

      <View>
        <Text>Name: </Text>
        <TextInput
          value={newVideoGame.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
      </View>
    </View>
  );
};
