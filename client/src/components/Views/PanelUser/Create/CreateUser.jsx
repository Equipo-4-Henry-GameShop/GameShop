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

import {
  color_azul,
  color_blanco,
  color_gris,
  color_negro,
} from "../../../../constants/Colors";
import axios from "axios";

//Import Dark Mode:
import { LocalizationContext } from "../../../Languaje/LocalizationContext";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme/ThemeProvider";
//Import Dark Mode:


const CreateUser = ({ navigation }) => {

//Const Dark Mode:
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);
//UseEffect Dark Mode:
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Register}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    });
  }, [isDarkMode, locale]);
//Dark Mode:


  const [acceptTac, setAcceptTac] = useState(false);
  const [receibenewsLetter, setReceivenewsLetter] = useState(false);

  const [image, setImage] = useState(
    "https://img.freepik.com/iconos-gratis/usuario_318-644324.jpg?w=360"
  );

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

    try {
      console.log(`Después del try ${userData}`);

      const response = await axios.post(
        "https://gameshop-production-e844.up.railway.app/user",
        {
          user: userData.user,
          password: userData.password,
          fullname: userData.fullname,
          email: userData.email,
          date: userData.date,
          phone: userData.phone,
          tac: userData.tac,
          newsLetter: userData.newsLetter,
          id: userData.id,
          userAdmin: userData.userAdmin,
          image: userData.image,
        }
      );
      console.log(`Respuesta del servidor:`, response.data);

      Alert.alert("User Created!", "", [
        {
          text: "Go to login",
          onPress: () => navigation.navigate("Login", { name: "Login" }),
        },
      ]);
    } catch (error) {
      console.log("Error en el backend:", error);
      Alert.alert("Auch...Something went wrong");
    }
  };

  // const [userData, setUserData] = useState()

  // const onSubmit = async (values) => {
  //    setUserData({
  //     ...values,
  //     tac: acceptTac,
  //     newsLetter: receibenewsLetter,
  //     id: 1 + Math.floor(Math.random() * 999),
  //     userAdmin: true,
  //     image: image,
  //   });

  //   console.log(`Antes del try ${userData}`);

  //   try {
  //     console.log(`Después del try ${userData}`);

  //     if (
  //       userData.user === "" ||
  //       userData.password === "" ||
  //       userData.fullname === "" ||
  //       userData.email === "" ||
  //       userData.date === "" ||
  //       userData.phone === "" ||
  //       !userData.tac ||
  //       !userData.newsLetter ||
  //       userData.image === ""
  //     ) {
  //       setValidateSubmit(false);
  //     } else {
  //       const response = await axios.post("https://gameshop-production-e844.up.railway.app/user", {
  //         user: userData.user,
  //         password: userData.password,
  //         fullname: userData.fullname,
  //         email: userData.email,
  //         date: userData.date,
  //         phone: userData.phone,
  //         tac: userData.tac,
  //         newsLetter: userData.newsLetter,
  //         id: userData.id,
  //         userAdmin: userData.userAdmin,
  //         image: userData.image,
  //       });

  //       Alert.alert("User Created!", [
  //         {
  //           text: "Go to login",
  //           onPress: () => navigation.navigate("Login", { name: "Login" })},

  //         setUserData({
  //           user: "",
  //           password: "",
  //           fullname: "",
  //           email: "",
  //           date: "",
  //           phone: "",
  //           tac: false,
  //           newsLetter: false,
  //           id: "",
  //           userAdmin: "",
  //           image: "",
  //         }),
  //       ]);

  //       console.log(`Respuesta del servidor:`, response.data);
  //     }
  //   } catch (error) {
  //     Alert.alert("Auch...Something went wrong");
  //     console.log("Error en el backend:", error);
  //   }
  // };

  const deleteImage = (image) => {
    setImage((image) => ({
      ...image,
      image: image.filter((i) => i !== image),
    }));
  };
  return (
    <ScrollView>
      <View
        style={[
          styles.bgCont,
          { backgroundColor: StringsDark.backgroundContainer}
        ]}
      >
        <TouchableOpacity
          onPress={pickImage}
          style={[styles.ImageButton, { backgroundColor: StringsDark.tabInactive }]}
        >
          {/* {backgroundColor:StringsDark.letraverde} */}
          <Image
            source={{ uri: `${image}` }}
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
        validate={(values) => {
          let errors = {};
          if (!values.user) {
            errors.user = "Please enter a user";
          }
          if (!values.password) {
            errors.password = "Please enter a password";
          }
          if (!values.fullname) {
            errors.fullname = "Please enter your full name";
          }
          if (!values.email) {
            errors.email = "Please enter your email address";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Please enter a valid email address";
          }
          if (!values.date) {
            errors.date = "Please enter your date of birth";
          }
          if (!values.phone) {
            errors.phone = "Please enter your phone phone";
          }

          return errors;
        }}
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
          <View style={[{ backgroundColor: StringsDark.backgroundContainer}]}>
            <View style={[styles.container,
              { backgroundColor: StringsDark.backgroundColor }]}>
              <View style={[styles.containerLogin,{ backgroundColor: StringsDark.tabInactive}]}>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.user}
                    placeholder="user"
                    onChangeText={handleChange("user")}
                    onBlur={handleBlur("user")}
                  />
                  {errors.user && touched.user && (
                    <Text style={styles.error}>{errors.user}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.password}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.fullname}
                    placeholder="Full Name"
                    onChangeText={handleChange("fullname")}
                    onBlur={handleBlur("fullname")}
                  />
                  {errors.fullname && touched.fullname && (
                    <Text style={styles.error}>{errors.fullname}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.email}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.date}
                    placeholder="Date of Birth"
                    onChangeText={handleChange("date")}
                    onBlur={handleBlur("date")}
                  />
                  {errors.date && touched.date && (
                    <Text style={styles.error}>{errors.date}</Text>
                  )}
                </View>

                <View>
                  <TextInput
                    style={[
                      styles.input,
                      { backgroundColor: StringsDark.titblanco },
                    ]}
                    value={values.phone}
                    placeholder="Phone"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                  />
                  {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )}
                </View>

                <View style={styles.boxcontainercheckbox}>
                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={[
                        styles.checkbox,
                        { backgroundColor: StringsDark.bordercolor },
                      ]}
                      value={acceptTac}
                      onValueChange={setAcceptTac}
                    />
                    <Text
                      style={[
                        styles.checkboxParagraph,
                        { backgroundColor: StringsDark.bordercolor },
                      ]}
                    >
                      I accept the Terms and Conditions
                    </Text>
                  </View>

                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={[
                        styles.checkbox,
                        { backgroundColor: StringsDark.bordercolor },
                      ]}
                      value={receibenewsLetter}
                      onValueChange={setReceivenewsLetter}
                    />
                    <Text
                      style={[
                        styles.checkboxParagraph,
                        { backgroundColor: StringsDark.bordercolor },
                      ]}
                    >
                      I want to receive the newsLetter
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.submitContainer}>
                <TouchableOpacity
                  style={[
                    styles.miniButton,
                    { backgroundColor: StringsDark.bordercolor },
                  ]}
                  onPress={handleSubmit}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      { backgroundColor: StringsDark.bordercolor },
                    ]}
                  >
                    Submit
                  </Text>
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
    // backgroundColor: color_azul,
    width: "100%",
  },

  bgCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: color_azul,
  },

  mario: {
    margin: 10,
    height: 70,
    width: 310,
  },

  container: {
    marginTop: 0,
    // backgroundColor: color_azul,
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

    // borderColor: color_negro,
    // backgroundColor: color_blanco,
    padding: 10,
  },

  input: {
    textAlign: "center",
    height: 35,
    borderWidth: 2,
    // borderColor: color_azul,
    paddingHorizontal: 70,
    marginLeft: "2%",
    marginRight: "2%",
    // borderColor: "#ddd",
    // backgroundColor: "#fff",
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
    // backgroundColor: color_blanco,
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
    // backgroundColor: color_azul,
    borderRadius: 8,
  },
  error: {
    textAlign: "center",
    marginTop: -15,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    // color: color_blanco,
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
    // color: color_negro,
    fontSize: 12,
  },
  checkbox: {
    margin: 8,
  },
});

export default CreateUser;
