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

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import {
  color_azul,
  color_blanco,
  color_gris,
  color_negro,
} from "../../constants/Colors";
import { persons } from "../../utils/arrayPersons";
import { Formik } from "formik";
import { useState } from "react";



export const Login = ({navigation}) => {
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
        } else if (persons.map((e)=>  e.name.includes(val.user))) {
          errors.user = "Username invalid";
        }

        if (!val.password) {
          errors.password = "Enter password";
        }
        // else if (user ? ){ errors.user = "Username invalid"}

        
        return errors;
      }
    }
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
            <View style={styles.header}>
              <Image
                style={styles.mario}
                source={require("../../assets/gameShop-white-mario.png")}
              ></Image>
            </View>
            <View style={styles.containerLogin}>
              <View>
                <TextInput placeholder="Username" value={values.user} onChangeText={handleChange("user")} onBlur={handleBlur("user")} style={styles.input} />
                {errors.user && touched.user && <Text style={styles.error}>{errors.user}</Text>}
              </View>
              <View>
                <TextInput placeholder="Password" value={values.password} onChangeText={handleChange("password")} secureTextEntry={true} onBlur={handleBlur("password")} style={styles.input} />
                {/* <TouchableOpacity title={isPasswordVisible ? 'Hide Password' : 'Show Password'} onPress={() => setIsPasswordVisible(!isPasswordVisible)} /> */}
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity style={styles.miniButton}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
                <TouchableOpacity style={styles.miniButton}
                  onPress={() =>
                    navigation.navigate("CreateUser", { name: "CreateUser" })
                  }
                ><Text style={styles.buttonText}>Register</Text></TouchableOpacity>
              <View>
                <Text>or</Text>
              </View>
              <View>
                <Text>-------- Sign up with --------</Text>
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
    textAlign:"center",
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
