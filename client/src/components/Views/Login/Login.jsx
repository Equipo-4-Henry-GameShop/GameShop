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

//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import { useContext} from 'react';
// import {
//   color_azul,
//   color_blanco,
//   color_gris,
//   color_negro,
// } from "../../Theme/stringsColors";
import { persons } from "../../../utils/arrayPersons";
import { Formik } from "formik";
import { useState, useEffect } from "react";
// import axios from "axios";
import { logService } from "../../../services/ServiceLogin";
import {getItemAsyncStorage,InsertUserAsynStorage,removeItem} from '../Forms/Cart/CardCartController'
import { useFocusEffect } from '@react-navigation/native';
import {setUserLogging} from '../../../redux/usersSlices'
import { useDispatch } from "react-redux";
export const Login = ({ navigation }) => {

  const dispatch = useDispatch();
  const {StringsDark,isDarkMode} = useContext(ThemeContext);
  const {StringsLanguaje ,locale}= useContext(LocalizationContext)
  const [token, setToken] = useState();

  const [session, setSession] = useState(null);
  const [user, setUser] = useState("");
  const [logginUser, setLoggingUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLogged, setIsLogged]=useState(false)

   useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Login}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    })

  }, [isDarkMode,locale]);
  
  useEffect(() => {
   
    getUserStorage();
  }, [isLogged]);

  const getUserStorage = async () => {
    try {
      const LoggedUserJSON = await getItemAsyncStorage("loggedGameShop");
      // console.log("variable LoggedUserJSON->",LoggedUserJSON)
      if(LoggedUserJSON !=='vacio'){
      setLoggingUser(LoggedUserJSON);
        setIsLogged(true) 
        // dispatch(setUserLogging(true))
        console.log("Usuario Cargado correctamente", logginUser);
      }else {
      setLoggingUser('vacio')
        setIsLogged(false) 
        // dispatch(setUserLogging(false))
      }
    } catch (error) {
      console.log("Error al obtener la clave de  loggedGameShop:", error);
    }
  };
  
  //console.log("estado loginuser--->",(logginUser))
  
  const handdleLogout =()=>{
    removeItem("loggedGameShop")
    dispatch(setUserLogging(false))
    setIsLogged(false) 
  }
  const handdleLogin = async (values) => {
    // console.log("values recibido en hanndler", values)
    setUser(values.user);
    setPassword(values.password);
    // console.log("que hay en estado user", values.user)
    // console.log("que hay en estado password", values.password)
    // try {
      const userCredencials = await logService({
        user: values.user, // Utiliza values.user en lugar de user
        password: values.password, // Utiliza values.password en lugar de password
      });
      // console.log("data recibida del backHardCode",userCredencials)
      if (userCredencials!==null){
        // "Error de autenticación"
        // console.log("que llega de LOG SERVICE->",userCredencials)
        if(userCredencials.id!==undefined){

        InsertUserAsynStorage("loggedGameShop",JSON.stringify(userCredencials));
        dispatch(setUserLogging(true))
        setIsLogged(true) 
        setUser("");
        setPassword("");
        navigation.navigate("HomeScreen")
      }else {
            console.log("no encontrado")
            alert("Password Incorrecto")
            return
      }
    } 
    // catch (error) {
    //   setErrorMsg(true);
    //   setTimeout(() => {
    //     setErrorMsg(false);
    //   }, 5000);

    //   console.log("rompio en handle Logging !!!!!",error);
    // }
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
        } 
        // else if (!persons.some((e) => e.user.includes(val.user))) {
        //   errors.user = "Username invalid";
        // }

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
           <View style={[styles.container,{backgroundColor:StringsDark.backgroundContainer}]}>
            <View style={[styles.header,{backgroundColor:StringsDark.backgroundContainer}]}>
              <Image
                style={styles.mario}
                source={require("../../../assets/gameShop-white-mario.png")}
              ></Image>
            </View>
            <View style={[styles.containerLogin,{backgroundColor:StringsDark.tabInactive},{forecolor:StringsDark.bordercolor}]}>
              {logginUser ==='vacio' &&(
                    <View>
                      <TextInput
                        placeholder={StringsLanguaje.userName}
                        value={values.user}
                        onChangeText={handleChange("user")}
                        onBlur={handleBlur("user")}
                        style={styles.input}
                      />
                      {errors.user && touched.user && (
                        <Text style={styles.error}>{errors.user}</Text>
                      )}
                    </View>
                )}
                {logginUser ==='vacio' &&(
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
                )}
                  {errorMsg && <Text>Incorrect user or password</Text>}
               
               {logginUser ==='vacio' && ( 
                    <TouchableOpacity style={[styles.miniButton,{backgroundColor:StringsDark.backgroundTittle}]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText,{color:StringsDark.srchBartxt}]}>{StringsLanguaje.Login}</Text>
                  </TouchableOpacity>
               )}
                  
               {logginUser ==='vacio' && (
                  <TouchableOpacity
                    style={[styles.miniButton,{backgroundColor:StringsDark.backgroundTittle}]}
                    onPress={() =>
                      navigation.navigate("CreateUser", { name: "CreateUser" })
                    }
                  >
                    <Text style={[styles.buttonText,{color:StringsDark.srchBartxt}]}>{StringsLanguaje.Register}</Text>
                  </TouchableOpacity>
               )}
               {logginUser ==='vacio' && (
                <View>
                  <View>
                    <Text style={{textAlign:'center'}}>{StringsLanguaje.or}</Text>
                  </View>
                  <View>
                    <Text style={{textAlign:'center'}}>-------- {StringsLanguaje.Sign_inWith} --------</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonGoogle}>
                    <Image
                      style={styles.imageGoogle}
                      source={require("../../../assets/singinwhitgoogle.png")}
                    />
                  </TouchableOpacity>
                  </View>
               )}

                {/* //caso loged IN */}
              {logginUser !=='vacio' && (  
                <View style={styles.containerLogin}> 
                    <Text style={[{fontSize:45},{color:StringsDark.text}]}>{StringsLanguaje.Welcome}</Text>
                    <Text style={[{fontSize:20}, {fontWeight:'bold'},{color:StringsDark.text}]}>{logginUser.fullname}</Text> 
                        <Image 
                              style={styles.perfil}
                              source={{uri:logginUser.image}}
                            >
                        </Image>
                        <TouchableOpacity onPress={()=>{ handdleLogout()}} 
                                          style={[styles.miniButtonLogout,{backgroundColor:StringsDark.backgroundTittle}]} > 
                          <Text style={[styles.buttonText,{color:StringsDark.srchBartxt}]}>{StringsLanguaje.Logout}</Text>
                        </TouchableOpacity>
                    </View> 
              )}
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
    // backgroundColor: color_azul,
    width: "100%",
  },
 
  mario: {
    margin: 10,
    height: 70,
    width: 310,
  },
  perfil: {
     margin: 10,
    height: 150,
    width: 150,
    borderRadius:100,
    
  },
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
    height: "85%",
    // borderColor: color_negro,
    // backgroundColor: 'verde',
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
    // borderColor: color_azul,
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
    // backgroundColor: color_azul,
    borderRadius: 8,
  },
  miniButtonLogout:{
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "50%",
    height: "10%",
    width: "50%",
    padding: 0,
    //  backgroundColor: color_azul,
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
    // color:'red'
  },
  imageGoogle: {
    height: 40,
    width: 250,
  },
});