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
            <View style={styles.header}>
              <Image style={styles.mario} source={require("../../assets/gameShop-white-mario.png")}></Image>
            </View>
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
              <TouchableOpacity style={styles.miniButton} >
                  <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
              <View><Text>or</Text></View>
              <View><Text>-------- Sign up with --------</Text></View>
                  
                <TouchableOpacity>
                
                </TouchableOpacity>
                <TouchableOpacity>
                
                </TouchableOpacity>
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

  header:{
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:color_azul,
    width:"100%",
    },
  mario:{
    margin:10,
    height:70,
    width:310,
  },
  container: {
    backgroundColor: color_azul,
    height:"100%",
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
    padding: 8,
  },
  
  containerLogin: {
    margin:"auto",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    width:320,
    height:"80%" ,
    borderColor: color_negro,
    backgroundColor: color_blanco,
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center",
    padding: 10,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  miniButton: {
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
    marginBottom: "10%",
    height:"10%",
    width: "50%",
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
    textAlign:"center",
    height: 50,
    borderWidth:2,
    borderColor: color_azul ,
    paddingHorizontal: 70,
    marginLeft:"2%",
    marginRight:"2%",
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 40,
    borderRadius:8,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_blanco,
  },
  buttonGoogle: {
    marginTop:"10%",
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center",
    width: "100%",
    borderRadius: 20,
  },
  imageGoogle: {
    height:40,
    width:250,
  },
});
