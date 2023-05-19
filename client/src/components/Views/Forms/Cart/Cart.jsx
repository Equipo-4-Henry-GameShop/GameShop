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

const Cart = ({navigation}) => {
    const dispatch=useDispatch()
    const cartG = useSelector((state) => state.cartState);
    // console.log("estado q llega del redux", cartG)
    const [Carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    //linea para setear el lenguaje /obtener palabras de lenguaje
    const {  StringsDark,isDarkMode} = useContext(ThemeContext);
    const {StringsLanguaje ,locale}= useContext(LocalizationContext)
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

  useEffect(() => {
    // console.log("entre una vez");
     removeItem('EXPO_CONSTANTS_INSTALLATION_ID');
     getAllItems();
  }, []);
  
  useEffect(() => {
    // console.log("entro xq me llama Carrito")
    Carrito.forEach((el) => {
      const calculos = Number(el.value.price) * Number(el.value.amount);
      acumulador += calculos;
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

  const handlePress = () => {
    cleanCart();
    dispatch(updateCart);
  }; 

  const getAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
  
      const result = items.map(([key, value]) => {
        let parsedValue;
        try {
          parsedValue = JSON.parse(value);
        } catch (error) {
          console.log(`Error al analizar el valor para la clave ${key}:`, error);
          parsedValue = null; // O puedes manejar el error de otra manera según tus necesidades
        }
  
        return { key, value: parsedValue };
      });
  
    //   console.log("get ALL estado de carrito", result);
      setCarrito(result);
    } catch (error) {
      console.log('Error al obtener los elementos:', error);
    }
  };
  

  if (Carrito.length < 1) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={[styles.emptyCart,{color:StringsDark.text}]}>{StringsLanguaje.emptycar}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.cartContainer,{backgroundColor:StringsDark.tabInactive}]}>
      <View>
        <Text style={[styles.cartTitle,{color:StringsDark.text}]}>{StringsLanguaje.youtCart}</Text>
      </View>
      <View style={{backgroundColor:StringsDark.bktitle}}>
        {
            Carrito.map((el) => {
                return (  <CardCard key={el.key} item={el.value}/> )
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
      <TouchableOpacity onPress={AlertItem} style={[styles.chkOutCart,{backgroundColor:StringsDark.btnPagar}]}>
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
    emptyCart: {
        fontSize: 25,
        
    }
  });
  
export default Cart