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

import { color_azul, color_blanco, color_gris, color_negro } from "../../constants/Colors";
import { persons } from "../../utils/arrayPersons";
import { Formik } from "formik";


export const Login = () => {
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
        } else if (!persons.name.includes(user)) {
          errors.user = "Username invalid";
        }

        if (!val.password) {
          errors.password = "Enter password";
        }
        // else if (user ? ){ errors.user = "Username invalid"}

        return errors;
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        onSubmit,
      }) => {
        return (
          <View style={styles.container}>
            <View style={styles.containerLogin}>
              <View >
                <TextInput placeholder="Username" style={styles.input} />
                {errors.user && touched.user && <Text>{errors.user}</Text>}
              </View>
              <View>
                <TextInput placeholder="Password" style={styles.input} />
                {errors.password && touched.password && (
                  <Text>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity style={styles.buttonGoogle}>
                <Image
                  style={styles.imageGoogle}
                  source={require("../../assets/singinwhitgoogle.png")}
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
  container: {
    flexDirection: "row",
    backgroundColor: color_blanco,
    height:"100vh",
    alignContent:"center",
    justifyContent:"center",
    padding: 8,
  },
  
  containerLogin: {
    borderRadius:8,
    width:"50%",
    height:"50%" ,
    borderColor: color_negro,
    backgroundColor: color_azul,
    alignItems: "center",
    padding: 10,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
    width: "90%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius:8,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: color_blanco,
  },
  buttonGoogle: {
    width: "50%",
    borderRadius: 8,
  },
  imageGoogle: {
    height: 40,
    width:"100%",
  },
});
