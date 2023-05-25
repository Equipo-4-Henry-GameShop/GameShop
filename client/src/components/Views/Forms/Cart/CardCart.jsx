import { StyleSheet, Text, View, Image, TouchableOpacity, Alert ,ActivityIndicator} from "react-native";

import React, {useContext} from 'react';
//import useSelector from react redux
import { useDispatch ,useSelector} from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import {     amountAdd, amountSub, removeItem } from "./CardCartController";
import { updateCart } from '../../../../redux/cartSlice';
//linea para llamar a modo DARK
import { ThemeContext } from '../../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../../Languaje/LocalizationContext';

 const CartItems = (props) => {
      
    const {id,img,price,amount,title}=props.item
    const cartKEy= props.llave
    
    const {  StringsDark,isDarkMode} = useContext(ThemeContext);
    const {StringsLanguaje ,locale}= useContext(LocalizationContext)
    const dispatch = useDispatch();

    if (typeof(cartKEy)===undefined) {
        console.log("capturando id undefined")
        return
    }
    const handlePress = () => {
      // console.log()
      removeItem(cartKEy)
      dispatch(updateCart());
    }; 
    // console.log("asi llega img", img)
  return (
    
    <View key={id} style={[styles.cartItem, {backgroundColor:StringsDark.tabActive,shadowColor:StringsDark.text}]}>
      <Image source={img} style={styles.cartItemImg} 
        PlaceholderContent={<ActivityIndicator color={StringsDark.bkContesp} size={"large"}/>}
      />
      <View style={styles.carDet}>
        <Text style={[styles.cartItemTitle,{color:StringsDark.text}]}>{title}</Text>
        <Text style={[styles.cartItemPrice,{color:StringsDark.txtprice}]}>${price}</Text>
        <View style={styles.cartItemAmount}>
          <TouchableOpacity
            onPress={() => {
              if (amount === 1) {
                  Alert.alert(
                  "Are you sure you want to delete the Item?",
                  "",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () =>  handlePress()   
                    },
                  ],
                  { cancelable: false }
                );
            }
              else 
              amountSub(cartKEy,amount)
              dispatch(updateCart())
            }
             }
          >
            <Ionicons name="md-remove" size={24} color={StringsDark.text}/>
          </TouchableOpacity>
          <Text style={styles.cartItemAmountText}>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
                amountAdd(cartKEy, amount);
                dispatch(updateCart());
              }}
          >
            
            <Ionicons name="md-add" size={24} color={StringsDark.text}/>
          </TouchableOpacity>
        </View>
        <View style={styles.cartItemRemove}>
          <TouchableOpacity
            onPress={() => {
                removeItem(cartKEy)
                dispatch(updateCart());
            }}
            style={styles.cartItemRemoveButton}
          >
            <Ionicons name="md-trash" size={15} color={StringsDark.text} />
            <Text style={{color:StringsDark.text}}>{StringsLanguaje.remove}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  cartItem: {
    padding: 15,
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    // shadowColor: "#ff2301",
    shadowOpacity: 0.23,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  cartItemImg: {
    width: '40%',
    height: '105%',
    borderRadius:8,   
    resizeMode: 'cover',
    // backgroundColor: "white",
  },carDet:{
    width: '58%',
    height: '105%',
    borderRadius:8,   
    // backgroundColor: "red",
  },
  cartItemTitle: {
    fontSize: 18,
    marginVertical: 5,
    textAlign:'center',
  },
  cartItemPrice: {
    textAlign:'center',
    fontSize: 16,
    color: "coral",
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
