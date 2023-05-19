import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadImageAsync } from "../../../helpers/uploadImage";
import { SelectList } from "react-native-dropdown-select-list";
import { allGenres, allPlatforms } from "./components/dataFilteredgames";
import { color_azul, color_blanco, color_negro } from "../../../../constants/Colors";
import axios from "axios";

const CreateItem = () => {
  const [imageScreen, setImageScreen] = useState([]);
  const [inputFocusedName, setInputFocusedName] = useState(true);
  const [inputFocusedDesc, setInputFocusedDesc] = useState(true);
  const [inputFocusedPrice, setInputFocusedPrice] = useState(true);
  const [validateSubmit, setValidateSubmit] = useState(true);
  const [stackData, setStackData] = useState({
    platforms: allPlatforms,
    genre: allGenres,
    tags: allGenres,
  });
  const [NewItem, setNewItem] = useState({
    id: 1 + Math.floor(Math.random() * 999),
    name: "",
    description: "",
    screnShots: [],
    platforms: [],
    videoGame: "",
    price: "",
  });

  console.log(NewItem);

  const handleTextChange2 = (text) => {
    setNewItem((prevVideoGame) => ({
      ...prevVideoGame,
      description: text,
    }));
  };

  const Submit = async () => {
    try {
      console.log(NewItem);
      if (
        NewItem.name === "" ||
        NewItem.description === "" ||
        NewItem.price === ""
      ) {
        setValidateSubmit(false);
      } else {
        const res = await axios.post(
          "https://gameshop-production-e844.up.railway.app/games",
          {
            id: NewItem.id,
            name: NewItem.name,
            description: NewItem.description,
            screnShots: NewItem.screnShots,
            platforms: NewItem.platforms,
            price: NewItem.price,
          }
        );

        console.log("Respuesta del servidor:", res.data);
      }
    } catch (error) {
      console.log("Error en el backend:", error);
    }
  };

  const pushItemplatforms = (value) => {
    setTimeout(() => {
      setNewItem((prevState) => ({
        ...prevState,
        platforms: [...prevState.platforms, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        platforms: prevState.platforms.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemplatforms = (value) => {
    setTimeout(() => {
      setNewItem((prevState) => ({
        ...prevState,
        platforms: prevState.platforms.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        platforms: [...prevState.platforms, value],
      }));
    }, 1200);
  };

  const handleInputChange = (inputName, inputValue) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      [inputName]: inputValue,
    }));
  };

  const deleteScreen = (image) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      screnShots: prevItem.screnShots.filter((i) => i !== image),
    }));
  };

  const pickImageScreen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.8,
    });

    console.log(result);

    if (!result.cancelled) {
      const uploadedImages = await Promise.all(
        result.assets.map(async (image) => {
          let imageUrl = await uploadImageAsync(image.uri);
          return imageUrl;
        })
      );

      setNewItem((prevItem) => ({
        ...prevItem,
        screnShots: [...prevItem.screnShots, ...uploadedImages],
      }));
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <View>
            <Text style={styles.title}>Name Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name Item"
              value={NewItem.name}
              onBlur={() => setInputFocusedName(false)}
              keyboardAppearance="light"
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </View>

          <View>
            <Text style={styles.title}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="$999.99"
              onBlur={() => setInputFocusedPrice(false)}
              value={NewItem.price}
              onChangeText={(text) => handleInputChange("price", text)}
            />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.title}>Description</Text>
            <TextInput
              style={[styles.inputStyle2, { height: Math.max(40, NewItem.description.length * 1.2) }]}
              placeholder="Paste_description"
              onBlur={() => setInputFocusedDesc(false)}
              value={NewItem.description}
              onChangeText={handleTextChange2}
              multiline
            />
          </View>

          <View>
            <Text style={styles.title}>Load Images of Item</Text>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity onPress={pickImageScreen} style={styles.miniButton}>
                <Text style={styles.buttonText}>Load from gallery</Text>
              </TouchableOpacity>

              {NewItem.screnShots[0] &&
                NewItem.screnShots.map((image) => (
                  <View key={image}>
                    <TouchableOpacity onPress={() => deleteScreen(image)}>
                      <Image
                        source={{ uri: image }}
                        style={{ margin: 5, width: 200, height: 200 }}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </View>

          <View style={styles.select}>
            <Text style={styles.title}>Add Videogame</Text>
            <View>
              <SelectList
                data={stackData.genre}
                placeholder="Add genre"
                setSelected={(val) => pushItemgenre(val)}
                search={false}
              />
            </View>
          </View>

          <View style={styles.select}>
            <Text style={styles.title}>Add platforms</Text>
            <View>
              <SelectList
                data={stackData.platforms}
                placeholder="Add platforms"
                setSelected={(val) => pushItemplatforms(val)}
                search={false}
              />
            </View>
            <View>
              <SelectList
                placeholder="Remove platforms"
                setSelected={(val) => removeItemplatforms(val)}
                data={NewItem.platforms}
                search={false}
              />
            </View>
          </View>

          <View></View>
          <View style={styles.submit}>
            <TouchableOpacity style={styles.miniButton} onPress={Submit}>
              <Text style={styles.buttonText}>Create Publication</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: color_azul,
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  containerLogin: {
    margin: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 320,
    height: "100%",
    borderColor: color_negro,
    backgroundColor: color_blanco,
    padding: 10,
  },

  title: {
    margin: 24,
    fontSize: 19,
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
    marginTop: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "70%",
    padding: 0,
    backgroundColor: color_azul,
    borderRadius: 8,
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: color_azul,
    marginHorizontal: "auto",
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_blanco,
  },

  select: {
    marginHorizontal: 50,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
  },

  submit: {
    marginTop: 30,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  containerInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  inputStyle2: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    borderWidth: 2,
    borderColor: color_azul,
    marginHorizontal: "auto",
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
  },
});


export default CreateItem;
