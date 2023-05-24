import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";
import { uploadImageAsync } from "../../../helpers/uploadImage";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  color_azul,
  color_blanco,
  color_gris,
  color_negro,
} from "../../../../constants/Colors";
import axios from "axios";
import { getUserByName, updateUser } from "../../../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import { color_celeste } from "../../../Theme/stringsColors";
import { convertirFecha } from "../../../helpers/InvertDate";

export const MyProfile = ({ navigation }) => {
  const [acceptTac, setAcceptTac] = useState(true);
  const [receibenewsLetter, setReceivenewsLetter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState(null);
  const dispatch = useDispatch();
  const dataUserdb = useSelector((state) => state.usersState.dataUser);

  console.log(dataUser);
  console.log(dataUserdb);
  const getDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("loggedGameShop");
      if (data !== null) {
        console.log("Valor almacenado en AsyncStorage:", data);
        const parsedData = JSON.parse(data);
        dispatch(getUserByName(parsedData.user)); // Despachar la acción antes de actualizar el estado
        setDataUser(parsedData);
        console.log(parsedData);

        // Realiza las operaciones que necesites con los datos obtenidos
        // ...

        setIsLoading(false);
      } else {
        console.log("No se encontró ningún valor en AsyncStorage");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error al acceder a AsyncStorage:", error);
      setIsLoading(false);
    }
  };
  
  // const loadimage = ()=>{
  //   setImage(dataUserdb[0].image)
  // }
  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);



  console.log(dataUserdb);

const imageUser = 'https://us.123rf.com/450wm/nuwaba/nuwaba1707/nuwaba170700076/81763793-persona-usuario-icono-de-ilustraci%C3%B3n-de-amigo-vectror-aislado-sobre-fondo-gris.jpg'

  const [image, setImage] = useState(!dataUserdb.length ? imageUser : dataUserdb[0].image);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [4, 4],
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

      setImage(arrLks[0]);
      console.log(`4-----${image}`);
      console.log(`46-----${arrLks}`);
      return arrLks;
    }
  };

  const onSubmit = async (values) => {
    const userData = {
      ...values,
      tac: acceptTac,
      newsLetter: receibenewsLetter,
      id: 1 + Math.floor(Math.random() * 999),
      userAdmin: true,
      image: image,
    };

    console.log(`Antes del try ${userData}`);
    const objupdatedUser = {};

    // Verifica cada propiedad y agrega solo las que no sean nulas
    if (userData.user) objupdatedUser.user = userData.user;
    if (userData.fullname) objupdatedUser.fullname = userData.fullname;
    if (userData.password) objupdatedUser.password = userData.password;
    if (userData.userAdmin) objupdatedUser.userAdmin = userData.userAdmin;
    if (userData.email) objupdatedUser.email = userData.email;
    if (userData.date) objupdatedUser.date = userData.date;
    if (userData.image) objupdatedUser.image = userData.image;
    if (userData.phone) objupdatedUser.phone = userData.phone;
    if (userData.tac) objupdatedUser.tac = userData.tac;
    if (userData.newsLetter) objupdatedUser.newsLetter = userData.newsLetter;
    objupdatedUser.id= dataUserdb[0].id 


    console.log(objupdatedUser)
    try {
      console.log(`Después del try ${userData}`);
      console.log(objupdatedUser)


      updateUser(objupdatedUser);




      console.log(`Respuesta del servidor:`, response.data);

      Alert.alert("Data update!", "", [
        {
          text: "Go to home",
          onPress: () => navigation.navigate("Home", { name: "Home" }),
        },
      ]);
    } catch (error) {

      console.log(`Error en el backend:, ${error},data enviada  ${objupdatedUser}`);
      Alert.alert("Auch...Something went wrong");
    }
  };


if (!dataUserdb.length)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color_azul,
        }}
      >
        <TouchableOpacity onPress={pickImage} style={styles.ImageButton}>
          <Image
            source={{ uri: image }}
            style={{ borderRadius: 100, margin: 5, width: 200, height: 200 }}
          />
        </TouchableOpacity>
      </View>

      <Formik
        initialValues={{
          user: "",
          password: "",
          fullname: "",
          email: "",
          date: "",
          phone: "",
        }}
        // validate={(values) => {
        //   // let errors = {};
        //   // if (values.user) {
        //   //   errors.user = "Modified value";
        //   // }
        //   // if (values.password) {
        //   //   errors.password = "Modified value";
        //   // }
        //   // if (values.fullname) {
        //   //   errors.fullname = "Modified value";
        //   // }
        //   // if (values.email) {
        //   //   errors.email = "Modified value";
        //   // } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        //   //   errors.email = "Please enter a valid email address";
        //   // }
        //   // if (values.date) {
        //   //   errors.date = "Modified value";
        //   // }
        //   // if (values.phone) {
        //   //   errors.phone = "Modified value";
        //   // }

        //   return errors;
        // }}
        image={image}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          image,
        }) => (
          <View>
            <View style={styles.container}>
              <View style={styles.containerLogin}>
                <View>
                  <TextInput
                    style={styles.input}
                    value={values.user}
                    placeholder={dataUserdb[0].user}
                    onChangeText={handleChange("user")}
                    onBlur={handleBlur("user")}
                  />
                  {errors.user && touched.user && (
                    <Text style={styles.error}>{errors.user}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={values.password}
                    placeholder="••••••••••"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {/* {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={values.fullname}
                    placeholder={dataUserdb[0].fullname}
                    onChangeText={handleChange("fullname")}
                    onBlur={handleBlur("fullname")}
                  />
                  {/* {errors.fullname && touched.fullname && (
                    <Text style={styles.error}>{errors.fullname}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={values.email}
                    placeholder={dataUserdb[0].email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                  {/* {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={values.date}
                    placeholder={convertirFecha(dataUserdb[0].date)}
                    onChangeText={handleChange("date")}
                    onBlur={handleBlur("date")}
                  />
                  {/* {errors.date && touched.date && (
                    <Text style={styles.error}>{errors.date}</Text>
                  )} */}
                </View>

                <View>
                  <TextInput
                    style={styles.input}
                    value={values.phone}
                    placeholder={dataUserdb[0].phone}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                  />
                  {/* {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )} */}
                </View>

                <View style={styles.boxcontainercheckbox}>
                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={acceptTac}
                      onValueChange={setAcceptTac}
                    />
                    <Text style={styles.checkboxParagraph}>
                      I accept the Terms and Conditions
                    </Text>
                  </View>

                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={receibenewsLetter}
                      onValueChange={setReceivenewsLetter}
                    />
                    <Text style={styles.checkboxParagraph}>
                      I want to receive the newsLetter
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.submitContainer}>
                <TouchableOpacity
                  style={styles.miniButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  /////
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_azul,
    width: "100%",
  },

  container: {
    marginTop: 0,
    backgroundColor: color_azul,
    height: "120%",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
  },

  containerLogin: {
    margin: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 320,

    borderColor: color_negro,
    backgroundColor: color_blanco,
    padding: 10,
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
  submitContainer: {
    alignItems: "center",
  },
  ImageButton: {
    marginTop: "10%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    width: 250,
    height: 250,
    padding: 0,
    backgroundColor: color_blanco,
    borderRadius: 125,
  },
  miniButton: {
    marginTop: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "50%",
    padding: 0,
    backgroundColor: color_azul,
    borderRadius: 8,
  },
  error: {
    textAlign: "center",
    marginTop: -15,
    fontSize: 14,
    color: color_celeste,
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_blanco,
  },
  buttonGoogle: {
    marginTop: "10%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 20,
  },
  imageGoogle: {
    height: 40,
    width: 250,
  },

  boxcontainercheckbox: {
    flex: 1,
    alignItems: "center",
  },

  checkboxSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxParagraph: {
    color: color_negro,
    fontSize: 12,
  },
  checkbox: {
    margin: 8,
  },
});
