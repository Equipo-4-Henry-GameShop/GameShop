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
  Alert,
} from "react-native";


import * as ImagePicker from "expo-image-picker";

import { uploadImageAsync } from "../../../helpers/uploadImage";

import { validate } from "./components/Validate/CreateGameValidate";

import { SelectList } from "react-native-dropdown-select-list";

import { allGenres, allPlatforms, allTags } from "./components/dataFilteredgames";
import { useState, useRef, useEffect, useContext } from "react";
import {
  color_azul,
  color_blanco,
  color_crema,
  color_gris,
  color_negro,
  color_rojoClaro,
} from "../../../../constants/Colors";

import axios from "axios";

//Dark Mode:
import { LocalizationContext } from "../../../Languaje/LocalizationContext";
import { ThemeContext } from "../../../Theme/ThemeProvider";
//Dark Mode:

const CreateVideogame = ({navigation, route}) => {
  const [image, setImage] = useState([]);

  const [imageScreen, setImageScreen] = useState([]);

  const [inputFocusedName, setInputFocusedName] = useState(true);
  const [inputFocusedDesc, setInputFocusedDesc] = useState(true);
  const [inputFocusedDate, setInputFocusedDate] = useState(true);
  const [inputFocusedPrice, setInputFocusedPrice] = useState(true);
  const [inputFocusedrequeriments_en, setInputFocusedrequeriments_en] = useState(true);
  const [validateSubmit, setValidateSubmit] = useState(true);

//Dark Mode:  
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);
//Dark Mode:

  const [stackData, setStackData] = useState({
    platforms: allPlatforms,
    genre: allGenres,
    tags: allTags,
  });
  const [newVideoGame, setNewVideoGame] = useState({
    id: 1 + Math.floor(Math.random() * 999),
    name: "",
    description: "",
    releaseDate: "",
    image: "",
    screenShots: [],
    platforms: [],
    genre: [],
    tags: [],
    price: "",
    requeriments_en: ""
  });

  // console.log(allplatformss)
  // console.log(allgenre)

  console.log(newVideoGame);

//Dark Mode:
  useEffect(() =>{
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.CreateVideogame,"Create Videogame"}`,
      headerStyle: 
      {
        backgroundColor: StringsDark.backgroundContainer, 
      },
    });
  }, [isDarkMode, locale]);
//Dark Mode:

  useEffect(() => {
    validate(newVideoGame);
  }, [newVideoGame]);

  const validateNvg = validate(newVideoGame);

  console.log(validateNvg.name);

  ///////

  const inputStyle = {
    height: Math.max(40, newVideoGame.description.length * 1.2), // Ajusta el tamaño en base a la longitud del texto
  };

  const inputStyleVar = {
    height: Math.max(40, newVideoGame.requeriments_en.length * 1.2), // Ajusta el tamaño en base a la longitud del texto
  };

  const handleTextChange = (text) => {
    setNewVideoGame((prevVideoGame) => ({
      ...prevVideoGame,
      requeriments_en: text,
    }));
  };

  
  const handleTextChange2 = (text) => {
    setNewVideoGame((prevVideoGame) => ({
      ...prevVideoGame,
      description: text,
    }));
  };

  const Submit = async () => {
    try {
      console.log(newVideoGame);
      if (
        newVideoGame.name === "" ||
        newVideoGame.description === "" ||
        newVideoGame.releaseDate === "" ||
        !newVideoGame.platforms.length ||
        !newVideoGame.tags.length ||
        !newVideoGame.genre.length ||
        newVideoGame.image === "" ||
        !newVideoGame.screenShots.length ||
        newVideoGame.price === "" ||
        newVideoGame.requeriments_en === ""
      ) {
        setValidateSubmit(false);
      } else {
        const res = await axios.post(
          "https://gameshop-production-e844.up.railway.app/games",
          {
            id: newVideoGame.id,
            name: newVideoGame.name,
            description: newVideoGame.description,
            releaseDate: newVideoGame.releaseDate,
            image: newVideoGame.image,
            screenShots: newVideoGame.screenShots,
            platforms: newVideoGame.platforms,
            genre: newVideoGame.genre,
            tags: newVideoGame.tags,
            price: newVideoGame.price,
            requeriments_en: newVideoGame.requeriments_en,
          }
        );
        Alert.alert(
          "Publication Create!","",
          [
            {
              onPress: () =>
                setNewVideoGame({
                  id: 1 + Math.floor(Math.random() * 999),
                  name: "",
                  description: "",
                  releaseDate: "",
                  image: "",
                  screenShots: [],
                  platforms: [],
                  genre: [],
                  tags: [],
                  price: "",
                  requeriments_en: "",
                }),
                text: "Continue loading games",
            },
            { text: "Back to dashboard" , onPress: () => navigation.navigate("Dashboard", { name: "Dashboard" })},
          ]
        );
  
        console.log("Respuesta del servidor:", res.data);
      }
    } catch (error) {
      Alert.alert(
        "Auch...Something went wrong","")
      console.log("Error en el backend:", error);
    }
  };


  const CancelSubmit = () => {
    Alert.alert(
      'Cancel Publication',
      'You are about to cancel your publication',
      [
        {
          text: 'Cancel',
          onPress: () =>
            Alert.alert(
              'Return to Dashboard',
              'Are you sure you want to return to Dashboard?',
              [
                { text: 'Yes', onPress: () => navigation.navigate("Dashboard", { name: "Dashboard" })   },
                { text: 'No', onPress: () => console.log('No pressed') },
              ]
            ),
          style: 'cancel',
        },
        {
          text: 'Continue edit',
          onPress: () => console.log('Continue edit pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.'
          ),
      }
    );
  };


  ///////

  const pushItemgenre = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genre: [...prevState.genre, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        genre: prevState.genre.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemgenre = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        genre: prevState.genre.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        genre: [...prevState.genre, value],
      }));
    }, 1200);
  };

  ///////

  const pushItemplatforms = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
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
      setNewVideoGame((prevState) => ({
        ...prevState,
        platforms: prevState.platforms.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        platforms: [...prevState.platforms, value],
      }));
    }, 1200);
  };

  ///////

  const pushItemTag = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, value],
      }));

      setStackData((prevState) => ({
        ...prevState,
        tags: prevState.tags.filter((p) => p !== value),
      }));
    }, 1200);
  };

  const removeItemTag = (value) => {
    setTimeout(() => {
      setNewVideoGame((prevState) => ({
        ...prevState,
        tags: prevState.tags.filter((p) => p !== value),
      }));

      setStackData((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, value],
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
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1,
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
        image: arrLks[0],
      }));

      console.log(`4-----${newVideoGame}`);
      return arrLks;
    }
  };


  const deleteImage = () => {
    setNewVideoGame((newVideoGame) => ({
      ...newVideoGame, image: ""
    }));
  };

  const deleteScreen = (image) => {
    setNewVideoGame((newVideoGame) => ({
      ...newVideoGame,
      screenShots: newVideoGame.screenShots.filter((i) => !image),
    }));
  };

  const pickImageScreen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [ 4 , 3],
      quality: 0.8,
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
        screenShots: [...newVideoGame.screenShots, ...arrLks],
      }));
      console.log(`4-----${newVideoGame}`);
      return arrLks;
    }
  };

  console.log(newVideoGame);

  return (
    <ScrollView>
      <View style={[
          styles.bgCont,
          { backgroundColor: StringsDark.backgroundContainer}
        ]}/>
      <View style={[styles.container,{ backgroundColor: StringsDark.bktitle}]}>
        <View style={[styles.containerLogin, { backgroundColor: StringsDark.bordercolor}]}>
          <View style={[styles.containerInput,{ backgroundColor: StringsDark.nordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Title </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Game name"
              value={newVideoGame.name}
              onBlur={() => setInputFocusedName(false)}
              keyboardAppearance="light"
              onChangeText={(text) => handleInputChange("name", text)}
            />
            {validateNvg.name !== "" && !inputFocusedName && (
              <Text style={styles.error}>{validateNvg.name}</Text>
            )}
          </View>
                  
          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="$999.99"
              onBlur={() => setInputFocusedPrice(false)}
              value={newVideoGame.price}
              onChangeText={(text) => handleInputChange("price", text)}
            />
            {validateNvg.price !== "" && !inputFocusedPrice && (
              <Text style={styles.error}>{validateNvg.price}</Text>
            )}
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Description</Text>
            <TextInput
              style={[styles.inputStyle2, inputStyle]}
              placeholder="Paste_description"
              onBlur={() => setInputFocusedDesc(false)}
              value={newVideoGame.description}
              onChangeText={handleTextChange2}
              multiline
            />
            {validateNvg.description !== "" && !inputFocusedDesc && (
              <Text style={styles.error}>{validateNvg.description}</Text>
            )}
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>System requeriments_enuirements</Text>
            <TextInput
              style={[styles.inputStyle2, inputStyleVar]}
              placeholder="Paste_requeriments"
              onBlur={() => setInputFocusedrequeriments_en(false)}
              value={newVideoGame.requeriments_en}
              onChangeText={handleTextChange}
              multiline
            />
            {validateNvg.requeriments_en !== "" && !inputFocusedrequeriments_en && (
              <Text style={styles.error}>{validateNvg.requeriments_en}</Text>
            )}
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Release Date </Text>
            <TextInput
              style={styles.input}
              placeholder="dd-mm-yyyy"
              value={newVideoGame.releaseDate}
              onBlur={() => setInputFocusedDate(false)}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange("releaseDate", text)}
            />
            {validateNvg.releaseDate !== "" && !inputFocusedDate && (
              <Text style={styles.error}>{validateNvg.releaseDate}</Text>
            )}
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Video game cover</Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage} style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
                <Text style={[styles.buttonText,{ backgroundColor: StringsDark.titblanco}]}>Load from gallery</Text>
              </TouchableOpacity>
              {validateNvg.image !== "" && !validateSubmit && (
                <Text style={styles.error}>{validateNvg.image}</Text>
              )}
              {console.log(`5454--------------${newVideoGame.image}`)}
              {newVideoGame.image && 
                <View>
                  <TouchableOpacity onPress={() => deleteImage(newVideoGame.image)}>
                    <Image
                      key={newVideoGame.image}
                      source={{ uri: `${newVideoGame.image}` }}
                      style={{ margin: 5, width: 200, height: 200 }}
                    />
                  </TouchableOpacity>
                </View>
              }
            </View>
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Load screenShots</Text>

            <View style={[styles.viewContx1,{ backgroundColor: StringsDark.bordercolor}]}>
              <TouchableOpacity
                onPress={pickImageScreen}
                style={[styles.miniButton,{ backgroundColor: StringsDark.titblanco}]}
              >
                <Text style={[styles.buttonText,{ backgroundColor: StringsDark.titblanco}]}>Load from gallery</Text>
              </TouchableOpacity>
              {validateNvg.screenShots !== "" && !validateSubmit && (
                <Text style={styles.error}>{validateNvg.screenShots}</Text>
              )}

              {newVideoGame.screenShots[0] &&
                newVideoGame.screenShots.map((i) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => deleteScreen(`${i}`)}>
                        <Image
                          key={i}
                          source={{ uri: `${i}` }}
                          style={{ margin: 5, width: 200, height: 200 }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>
          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Add Genre</Text>
            <View>
              <SelectList
                data={stackData.genre}
                placeholder="Add genre"
                setSelected={(val) => pushItemgenre(val)}
                search={false}
              />
            </View>
            <View>
              <SelectList
                placeholder="Remove genre"
                setSelected={(val) => removeItemgenre(val)}
                data={newVideoGame.genre}
                search={false}
              />
            </View>
            {validateNvg.genre !== "" && !validateSubmit && (
              <Text style={styles.error}>{validateNvg.genre}</Text>
            )}
          </View>
          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Add platforms</Text>
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
                placeholder="Remove platformss"
                setSelected={(val) => removeItemplatforms(val)}
                data={newVideoGame.platforms}
                search={false}
              />
            </View>
            {validateNvg.platforms !== "" && !validateSubmit && (
              <Text style={styles.error}>{validateNvg.platforms}</Text>
            )}
          </View>

          <View style={[styles.containerInput,{ backgroundColor: StringsDark.bordercolor}]}>
            <Text style={[styles.title,{ backgroundColor: StringsDark.titblanco}]}>Add Tags</Text>
            <View>
              <SelectList
                placeholder="Add tag"
                setSelected={(val) => pushItemTag(val)}
                data={stackData.tags}
                search={false}
              />
            </View>
            <View>
              <SelectList
                placeholder="Remove tag"
                setSelected={(val) => removeItemplatforms(val)}
                data={newVideoGame.tags}
                search={false}
              />
            </View>
            {validateNvg.tags !== "" && !validateSubmit && (
              <Text style={styles.error}>{validateNvg.tags}</Text>
            )}
          </View>
          <View></View>
          <View style={[styles.submit,{ backgroundColor: StringsDark.bordercolor}]}>
            <TouchableOpacity
              style={[styles.miniButtonSubmit,{ backgroundColor: StringsDark.letraverde}]}
              onPress={() => Submit()}
            >
              <Text style={[styles.buttonTextSubmit,{ backgroundColor: StringsDark.letraverde}]}>Create Publication</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.miniButtonCancel,{ backgroundColor: StringsDark.newCancelBot}]}
              onPress={() => CancelSubmit()}
            >
              <Text style={styles.buttonTextSubmit}>Cancel Publication</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: color_azul,
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
    // borderColor: color_negro,
    // backgroundColor: color_blanco,
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
    // backgroundColor: color_blanco,
    borderRadius: 8,
    // borderBottomColor: color_gris,
    borderBottomWidth: 1,
    borderRightWidth: 2,
    // borderColor: color_gris,
    borderWidth:1
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    // color: color_negro,
  },
  miniButtonSubmit: {
    marginTop: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "70%",
    padding: 0,
    // backgroundColor: color_azul,
    borderRadius: 8,
  },
  miniButtonCancel: {
    marginTop: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "70%",
    padding: 0,
    // backgroundColor: color_rojoClaro,
    borderRadius: 8,
  },
  buttonTextSubmit: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    // color: color_blanco,
  },
  error: {
    margin: 8,
    fontSize: 14,
    // color: "red",
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16, 
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    // borderColor: color_azul,
    marginHorizontal:"auto",
    // borderColor: "#ddd",
    // backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  inputStyle2 : {
    width: '100%',
    padding: 10,
    fontSize: 16, 
    textAlign: "center",
    borderWidth: 2,
    // borderColor: color_azul,
    marginHorizontal:"auto",
    // borderColor: "#ddd",
    // backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
  },

  viewContx1: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  },

  bgCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: color_azul,
  },

});

export default CreateVideogame;
