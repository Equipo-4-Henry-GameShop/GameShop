import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState ,useContext} from 'react';
import { useDispatch, useSelector } from "react-redux";

import CardCard from './CardCart';
import {     removeItem,cleanCart } from "./CardCartController";
import { updateCart } from '../../../../redux/cartSlice';

import { useFocusEffect } from '@react-navigation/native';
//linea para llamar a modo DARK
import { ThemeContext } from '../../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../../Languaje/LocalizationContext';

import {getItemAsyncStorage} from '../../Forms/Cart/CardCartController'
// import { electron } from 'webpack';

const Cart = ({navigation}) => {
    const dispatch=useDispatch()
    const cartG = useSelector((state) => state.cartState);
    // console.log("estado q llega del redux", cartG)
    const [Carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    //linea para setear el lenguaje /obtener palabras de lenguaje
    const {  StringsDark,isDarkMode} = useContext(ThemeContext);
    const {StringsLanguaje ,locale}= useContext(LocalizationContext)
    
    const [isLogged, setIsLogged]=useState(false)
    const [logginUser, setLoggingUser] = useState("");
    const isLoggedGlobal =useSelector((state)=>state.usersState.isLogged)


    let acumulador = 0;

    useEffect(()=>{
        // console.log("navigation",navigation.setOptions)
        navigation.setOptions({
          headerTitle: `${StringsLanguaje.Shopping_Car}`,
          headerStyle: {
            backgroundColor: StringsDark.backgroundContainer,
          },
        })
    },[isDarkMode,locale])

 useFocusEffect(
        React.useCallback(() => {
           getAllItems();
        }, [cartG])
      );
useFocusEffect(
        React.useCallback(() => {
         getUserStorage()
        },[isLoggedGlobal] )
       //  [cartG]
    );
  useEffect(() => {
     console.log("entre una vez------------------->");
     removeItem('EXPO_CONSTANTS_INSTALLATION_ID');
     getAllItems();
  }, []);
  
  useEffect(() => {
    // console.log("entro xq me llama Carrito")
    Carrito.forEach((el) => {
      if (el && el.value && el.value.price) {
        const calculos = Number(el.value.price) * Number(el.value.amount);
        acumulador += calculos;
      }
    });
  
    setTotal(acumulador);
  }, [Carrito]);
  
  
  const AlertItem = () => {
    Alert.alert(
      StringsLanguaje.MsgAlertTitle,
      '',
      [
        {
          text: StringsLanguaje.optCancel,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => handlePress(),
          
        },
      ],
      { cancelable: false }
    );
  };

  const getUserStorage = async () => {
    try {
      const LoggedUserJSON = await getItemAsyncStorage("loggedGameShop");
      // console.log("variable LoggedUserJSON menu ITEMS->",LoggedUserJSON)
      if(LoggedUserJSON !=='vacio'){
      setLoggingUser(LoggedUserJSON);
        setIsLogged(true) 
        // console.log("Usuario Cargado correctamente menu ITEMS name->", logginUser.fullname);
      }else {
      setLoggingUser('vacio')
        setIsLogged(false) 
      }
    } catch (error) {
      console.log("Error al obtener la clave de  loggedGameShop:", error);
    }
  };
  const handlePress = async () => {
    await cleanCart();
    setCarrito([]); // Actualiza el estado de Carrito para que esté vacío
    dispatch(updateCart())
  };
// console.log("logginUser",Carrito)
  const handlePasarellaPress = () => {
    const proceedWithPurchase = () => {
      if (isLogged) {
        const itemsCart=Carrito.map(el=>{
          return { videogameId:   el.value.id, 
                   videogameName: el.value.title,
                   unitPrice: el.value.price,
                   quantity:  el.value.amount.toFixed(2)}
        })
        // const items = [{ videogameId: 3498, videogameName: "Grand Theft Auto V", unitPrice: 20, quantity: 2 }] 
        navigation.navigate('Pasarella', { Cart: itemsCart, tot:total ,userid:logginUser.id});
      } else {
        alert("Es necesario Regisrar inicio de Sesión")
        navigation.navigate('Login');
      }
    };
  
    Alert.alert(
      'Proceder con la compra',
      '',
      [
        {
          text: StringsLanguaje.optCancel,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: proceedWithPurchase,
        },
      ],
      { cancelable: false }
    );
  };


  const getAllItems = () => {
    AsyncStorage.getAllKeys((error, keys) => {
      if (error) {
        console.log('Error al obtener las claves de AsyncStorage:', error);
        return;
      }
  
      const filteredKeys = keys.filter((el) => el.substring(0, 4) === 'cart');
      console.log('Claves filtradas del carrito:', filteredKeys);
  
      AsyncStorage.multiGet(filteredKeys, (error, items) => {
        if (error) {
          console.log('Error al obtener los elementos de AsyncStorage:', error);
          return;
        }
  
        const result = items.map(([key, value]) => {
          let parsedValue;
          try {
            parsedValue = JSON.parse(value);
          } catch (error) {
            console.log(`Error al analizar el valor para la clave ${key}:`, error);
            parsedValue = null;
          }
          return { key, value: parsedValue };
        });
  
        setCarrito(result);
      });
    });
  };
  
  

  if (Carrito.length < 1) {
    
    return (
      <View style={[styles.emptyCartContainer,{backgroundColor:StringsDark.btnPagar}]}>
        <Text style={[styles.emptyCart,{color:StringsDark.srchBartxt}]}>{StringsLanguaje.emptycar}</Text>
          
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={[styles.clearCart,{backgroundColor:StringsDark.txtClaro}]}>
        <Text style={[styles.clearCartText,{color:StringsDark.text}]}>{StringsLanguaje.Home}</Text>
      </TouchableOpacity>

      </View>
    );
  }
  // console.log("longitus de carrito", Carrito)
  return (
    <ScrollView style={[styles.cartContainer,{backgroundColor:StringsDark.tabInactive}]}>
      <View>
      <Text style={[styles.cartSubTitle,{color:StringsDark.text}]}>
                    {isLogged ? `${logginUser.fullname}` : StringsLanguaje.CartValidate}    
                  </Text>
        <Text style={[styles.cartTitle,{color:StringsDark.text}]}>{StringsLanguaje.youtCart}</Text>
      </View>
      <View style={{backgroundColor:StringsDark.bktitle}}>
        {
            Carrito.map((el) => {
                // console.log("keyyy", el.key);
                return (  <CardCard key={el.key} llave={el.key} item={el.value}/> )
        })
        }
      </View>
      <View style={[styles.cartTotal,{borderColor:StringsDark.txtprice}]}>
        <Text style={[styles.cartTotalTitle,{color:StringsDark.text}]}>Total</Text>
        <Text style={[styles.cartTotalPrice,{color:StringsDark.text}]}>U$S {total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={AlertItem} style={[styles.clearCart,{backgroundColor:StringsDark.txtClaro}]}>
        <Text style={[styles.clearCartText,{color:StringsDark.text}]}>{StringsLanguaje.clCart}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePasarellaPress} style={[styles.chkOutCart,{backgroundColor:StringsDark.btnPagar}]}>
        <Text style={[styles.clearCartText,{color:StringsDark.text}]}>{StringsLanguaje.chkOut}</Text>
      </TouchableOpacity>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    cartContainer: {
    
    },
    emptyCartContainer:{

    },
    cartItems: {
        // backgroundColor: color_azul
    },
    cartTotal: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      padding: 20,
      borderTopWidth: 1,
    },
    cartTotalPrice:{
        // color: color_azul,
        fontSize:20,
        fontWeight:'bold'
    },
    cartTotalTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    clearCart: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "coral",
      padding: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 20,
    },
    chkOutCart: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 20,
      },
    clearCartText:{
        fontSize:18,
        fontWeight:'bold',
    },
    cartTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginHorizontal: 20,
      marginVertical: 10,
    },
    cartSubTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 20,
      marginVertical: 10,
    },
    emptyCartContainer:{
        width:'100%',
        height:'50%',
    },
    emptyCart: {
         margin:'20%',
        // marginBottom: '80%',
        // marginTop: '80%',
        // alignContent:'center',
        // alignItems:'center',
        // alignItems:'center',
        // textAlign:'center',
        fontSize: 25,
        fontWeight:'bold',
      
    }
  });
  
export default Cart