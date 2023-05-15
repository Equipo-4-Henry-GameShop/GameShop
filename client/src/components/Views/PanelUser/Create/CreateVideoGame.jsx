import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

import { allGenres, allPlatforms } from "./components/dataFilteredgames";
import { useState, useRef, useEffect } from "react";
import {
  color_azul,
  color_blanco,
  color_negro,
} from "../../../../constants/Colors";

import { ImagePickerExample } from "../../../helpers/imagePicker";

const CreateVideogame = () => {
  const inputRef = useRef();

  
  const [stackData, setStackData] = useState({
    platform: allPlatforms,
    image: "",
    genres: allGenres,
    screnShots: "",
    tags: "",
  });
  const [newVideoGame, setNewVideoGame] = useState({
    name: "",
    platform: [],
    description: "",
    image: "",
    genres: [],
    screnShots: "",
    releaseDate: "",
    tags: [],
  });

  // useEffect(() => {
  //   pushItemGenres()
  //   removeItemGenres()
    
  // }, [stackData.platform, newVideoGame.platform])
  
  console.log(newVideoGame)
  console.log(stackData)
    

  const pushItemGenres = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      genres: [...prevState.genres, value],

    })) ;


    setStackData((prevState) => ({
      ...prevState,
      genres: prevState.genres.filter((p) => p !== value),
    }));

  };

  const removeItemGenres = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      genres: prevState.genres.filter((p) => p !== value),
    }));

    setStackData((prevState) => ({
      ...prevState,
      genres: [...prevState.genres, value],
    }));
  };

  ///////

  const pushItemPlatform = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      platform: [...prevState.platform, value],
    }));

    setStackData((prevState) => ({
      ...prevState,
      platform: prevState.platform.filter((p) => p !== value),
    }));
  };

  const removeItemPlatform = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      platform: prevState.platform.filter((p) => p !== value),
    }));

    setStackData((prevState) => ({
      ...prevState,
      platform: [...prevState.platform, value],
    }));
  };

  const pushItemTag = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      genres: [...prevState.genres, value],
    }));

    setStackData((prevState) => ({
      ...prevState,
      genres: prevState.genres.filter((p) => p !== value),
    }));
  };

  const removeItemTag = (value) => {
    setNewVideoGame((prevState) => ({
      ...prevState,
      genres: prevState.genres.filter((p) => p !== value),
    }));

    setStackData((prevState) => ({
      ...prevState,
      genres: [...prevState.genres, value],
    }));
  };

  const handleInputChange = (inputName, inputValue) => {
    setNewVideoGame({
      ...newVideoGame,
      [inputName]: inputValue,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ImagePickerExample/> */}
        <View>
          <Text style={styles.title}>Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the game"
            value={newVideoGame.name}
            keyboardAppearance="light"
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>
        <View>
          <Text style={styles.title}>Description: </Text>
          <TextInput
            style={styles.input}
            placeholder="Insert descrption"
            value={newVideoGame.description}
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>

        <View>
          <Text style={styles.title}>Image: </Text>
          <TextInput
            style={styles.input}
            value={newVideoGame.image}
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>

        <View>
          <Text style={styles.title}>Screnshots: </Text>
          <TextInput
            style={styles.input}
            value={newVideoGame.screnShots}
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>

        <View>
          <Text style={styles.title}>Release Date: </Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yy"
            value={newVideoGame.releaseDate}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange("name", text)}
          />
          <View>
            <Text style={styles.title}>Tags: </Text>
            <TextInput
              style={styles.input}
              placeholder="Insert Tags"
              value={newVideoGame.tags}
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </View>

          <Text style={styles.title}>Add Genre</Text>
          <View>
            <SelectList
              placeholder="Add genre"
              setSelected={(val) => pushItemGenres(val)}
              data={stackData.genres}
              search={false}
            />
          </View>
          <View>
            <SelectList
              placeholder="Remove genres"
              setSelected={(val) => removeItemGenres(val)}
              data={newVideoGame.genres}
              search={false}
            />
          </View>

          <Text style={styles.title}>Add Platform</Text>
          <View>
            <SelectList
              placeholder="Add platform"
              setSelected={(val) => pushItemPlatform(val)}
              data={stackData.platform}
              search={false}
            />
          </View>
          <View>
            <SelectList
              placeholder= "Remove platforms"
              setSelected={(val) => removeItemPlatform(val)}
              data={newVideoGame.platform}
              search={false}
            />
          </View>
          <Text style={styles.title}>Add Tags</Text>
          <View>
            <SelectList
              placeholder="Add tag"
              setSelected={(val) => pushItemPlatform(val)}
              data={stackData.platform}
              search={false}
            />
          </View>
          <View>
            <SelectList
              placeholder= "Remove tag"
              setSelected={(val) => removeItemPlatform(val)}
              data={newVideoGame.platform}
              search={false}
            />
          </View>
          <View>
            <Button title="Submit"></Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  boxButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  miniButton: {
    margin: "2%",
    width: "20%",
    padding: 0,
    backgroundColor: color_azul,
    borderRadius: 8,
    color: color_blanco,
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 10,

    fontWeight: "bold",
    color: color_blanco,
  },
});

export default CreateVideogame;
