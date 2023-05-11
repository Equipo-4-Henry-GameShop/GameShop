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

import { color_azul, color_blanco, color_negro } from "../../constants/Colors";
import { persons } from "../../utils/arrayPersons";
import { Formik } from "formik";

export const Login = () => {
  <Formik
    initialValues={{
      user: "",
      password: "",
    }}
    validate={(val) => {
      let errors = {};

      if (!user) {
        errors.user = "Enter Username";
      } else if (!persons.name.includes(user)) {
        errors.user = "Username invalid";
      }

      if (!password) {
        errors.password = "Enter password";
      }
      // else if (user ? ){ errors.user = "Username invalid"}
    }}
  >
    return(
    <View>
      <TextInput placeholder="Username" style={styles.input}></TextInput>
    </View>
    <View>
      <TextInput placeholder="Password" style={styles.input}></TextInput>
    </View>
    <TouchableOpacity>
        <image />
    </TouchableOpacity>
    )
  </Formik>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // paddingTop: Constants.statusBarHeight + 200,
    backgroundColor: "#ecf0f1",
    padding: 8,
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
