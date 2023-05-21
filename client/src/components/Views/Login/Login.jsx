import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
  TextInput,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

import {
  color_azul,
  color_blanco,
  color_gris,
  color_negro,
} from "../../Theme/stringsColors";
import { persons } from "../../../utils/arrayPersons";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { logService } from "../../../services/ServiceLogin";


export const Login = ({ navigation }) => {
  useEffect(() => {
    const LoggedUserJSON = window.localStorage.getItem("loggedGameShop");
    if (LoggedUserJSON) {
      const user = JSON.parse(LoggedUserJSON);
      setUser(user);
      logService.setToken(user.token);
    }
  }, []);
  const [token, setToken] = useState();

  const [session, setSession] = useState(null);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const handdleLogin = async (values) => {
    setUser(values.user);
    setPassword(values.password);
    try {
      const user = await logService({
        user,
        password,
      });

      window.localStorage.setItem("loggedGameShop", JSON.stringify(user));

      setSession(session);
      setUser("");
      setPassword("");
    } catch (error) {
      setErrorMsg(true);
      setTimeout(() => {
        setErrorMsg(false);
      }, 5000);

      console.log(error);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      validate={(val) => {
        let errors = {};

        if (!val.user) {
          errors.user = "Enter Username";
        } else if (!persons.some((e) => e.user.includes(val.user))) {
          errors.user = "Username invalid";
        }

        if (!val.password) {
          errors.password = "Enter password";
        }
        // else if (user ? ){ errors.user = "Username invalid"}

        return errors;
      }}
      onSubmit ={handdleLogin}
      >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        handdleLogin,
        values,
        errors,
        touched,
        onSubmit,
      }) => {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={styles.mario}
                source={require("../../../assets/gameShop-white-mario.png")}
              ></Image>
            </View>
            <View style={styles.containerLogin}>
              <View>
                <TextInput
                  placeholder="Username"
                  value={values.user}
                  onChangeText={handleChange("user")}
                  onBlur={handleBlur("user")}
                  style={styles.input}
                />
                {errors.user && touched.user && (
                  <Text style={styles.error}>{errors.user}</Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry={true}
                  onBlur={handleBlur("password")}
                  style={styles.input}
                />
                {/* <TouchableOpacity title={isPasswordVisible ? 'Hide Password' : 'Show Password'} onPress={() => setIsPasswordVisible(!isPasswordVisible)} /> */}
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity style={styles.miniButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
              {errorMsg && <Text>Incorrect user or password</Text>}
              <TouchableOpacity
                style={styles.miniButton}
                onPress={() =>
                  navigation.navigate("CreateUser", { name: "CreateUser" })
                }
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <View>
                <Text>or</Text>
              </View>
              <View>
                <Text>-------- Sign up with --------</Text>
              </View>
              <TouchableOpacity style={styles.buttonGoogle}>
                <Image
                  style={styles.imageGoogle}
                  source={require("../../../assets/singinwhitgoogle.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_azul,
    width: "100%",
  },
  mario: {
    margin: 10,
    height: 70,
    width: 310,
  },
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
    height: "85%",
    borderColor: color_negro,
    backgroundColor: color_blanco,
    alignItems: "center",

    padding: 10,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    textAlign: "center",
    height: 50,
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
  miniButton: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: "10%",
    width: "50%",
    padding: 0,
    backgroundColor: color_azul,
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
});
