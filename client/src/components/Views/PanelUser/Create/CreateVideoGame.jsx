import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { uploadImageAsync } from "../../../helpers/uploadImage";

import { validate } from "./components/Validate/CreateGameValidate";

import { SelectList } from "react-native-dropdown-select-list";

import { allGenres, allPlatforms } from "./components/dataFilteredgames";
import { useState, useRef, useEffect } from "react";
import {
  color_azul,
  color_blanco,
  color_negro,
} from "../../../../constants/Colors";

const CreateVideogame = () => {
  const [image, setImage] = useState([]);

  const [imageScreen, setImageScreen] = useState([]);

  const [stackData, setStackData] = useState({
    platform: allPlatforms,
    genres: allGenres,
    screnShots: "",
    tags: "",
  });
  const [newVideoGame, setNewVideoGame] = useState({
    name: "",
    description: "",
    releaseDate: "",
    image: [],
    screnShots: [],
    platform: [],
    genres: [],
    tags: [],
  });

  // console.log(allPlatforms)
  // console.log(allGenres)

  console.log(newVideoGame);

  useEffect(() => {
    validate(newVideoGame);
  }, [newVideoGame]);

  const validateNvg = validate(newVideoGame);

  ///////

  const pushItemGenres = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genres: [...prevState.genres, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        genres: prevState.genres.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemGenres = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genres: prevState.genres.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        genres: [...prevState.genres, value],
      }));
    }, 1200);
  };

  ///////

  const pushItemPlatform = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        platform: [...prevState.platform, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        platform: prevState.platform.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemPlatform = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        platform: prevState.platform.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        platform: [...prevState.platform, value],
      }));
    }, 1200);
  };

  ///////

  const pushItemTag = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genres: [...prevState.genres, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        genres: prevState.genres.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemTag = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genres: prevState.genres.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        genres: [...prevState.genres, value],
      }));
    }, 1200);
  };

  ///////

  const handleInputChange = (inputName, inputValue) => {
    setNewVideoGame({
      ...newVideoGame,
      [inputName]: inputValue,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [3, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      const arrLks = [];
      // const arrView = []
      const uploadedImages = await Promise.all(
        result.assets.map(async (image) => {
          let imageUrl = await uploadImageAsync(image.uri);

          // arrView.push(image.uri)
          arrLks.push(imageUrl);

          console.log(`3-----${arrLks}`);
          // return arrImg
        })
      );

      setNewVideoGame((newVideoGame) => ({
        ...newVideoGame,
        image: [...newVideoGame.image, ...arrLks],
      }));

      console.log(`4-----${newVideoGame}`);
      return arrLks;
    }
  };

  const deleteImage = (image) => {
    setNewVideoGame((newVideoGame) => ({
      ...newVideoGame,
      image: newVideoGame.image.filter((i) => i !== image),
    }));
  };

  const deleteScreen = (image) => {
    setNewVideoGame((newVideoGame) => ({
      ...newVideoGame,
      screnShots: newVideoGame.screnShots.filter((i) => !image),
    }));
  };

  const pickImageScreen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [3, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      const arrLks = [];
      // const arrView = []
      const uploadedImages = await Promise.all(
        result.assets.map(async (image) => {
          let imageUrl = await uploadImageAsync(image.uri);

          // arrView.push(image.uri)
          arrLks.push(imageUrl);

          console.log(`3-----${arrLks}`);
          // return arrImg
        })
      );

      setNewVideoGame((newVideoGame) => ({
        ...newVideoGame,
        screnShots: [...newVideoGame.screnShots, ...arrLks],
      }));
      console.log(`4-----${newVideoGame}`);
      return arrLks;
    }
  };

  console.log(newVideoGame);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <View>
            <Text style={styles.title}>Title </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Game name"
              value={newVideoGame.name}
              keyboardAppearance="light"
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </View>

          <View>
            <Text style={styles.title}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Paste description"
              value={newVideoGame.description}
              onChangeText={(text) => handleInputChange("description", text)}
            />
          </View>

          <View>
            <Text style={styles.title}>Release Date </Text>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/yy"
              value={newVideoGame.releaseDate}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange("releaseDate", text)}
            />
          </View>

          <View>
            <Text style={styles.title}>Load image</Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage} style={styles.miniButton}>
                <Text style={styles.buttonText}>Load from gallery</Text>
              </TouchableOpacity>

              {newVideoGame.image &&
                newVideoGame.image.map((i) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => deleteImage(i)}

                      >
                        <Image
                          key={i}
                          source={{ uri: i }}
                          style={{ margin: 5, width: 200, height: 200 }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>

          <View>
            <Text style={styles.title}>Load screnshots</Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={pickImageScreen}
                style={styles.miniButton}
              >
                <Text style={styles.buttonText}>Load from gallery</Text>
              </TouchableOpacity>

              {newVideoGame.screnShots &&
                newVideoGame.screnShots.map((i) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => deleteImage(i)}>
                        <Image
                          key={i}
                          source={{ uri: i }}
                          style={{ margin: 5, width: 200, height: 200 }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>
          <View style={styles.select}>
            <Text style={styles.title}>Add Genre</Text>
            <View>
              <SelectList
                data={stackData.genres}
                placeholder="Add genres"
                setSelected={(val) => pushItemGenres(val)}
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
          </View>
          <View style={styles.select}>
            <Text style={styles.title}>Add Platform</Text>
            <View>
              <SelectList
                data={stackData.platform}
                placeholder="Add platform"
                setSelected={(val) => pushItemPlatform(val)}
                search={false}
              />
            </View>
            <View>
              <SelectList
                placeholder="Remove platforms"
                setSelected={(val) => removeItemPlatform(val)}
                data={newVideoGame.platform}
                search={false}
              />
            </View>
          </View>

          <View style={styles.select}>
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
                placeholder="Remove tag"
                setSelected={(val) => removeItemPlatform(val)}
                data={newVideoGame.platform}
                search={false}
              />
            </View>
          </View>
          <View></View>
          <View style={styles.submit} >
            <TouchableOpacity style={styles.miniButton}>
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
    textAlign: "center",
    height: 35,
    borderWidth: 2,
    borderColor: color_azul,
    paddingHorizontal: 70,
    marginLeft: "2%",
    marginRight: "2%",
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

  submit:{
    marginTop:30,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  }
});

export default CreateVideogame;
