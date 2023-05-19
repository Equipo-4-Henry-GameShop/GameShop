import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
//import useSelector from react redux
import { useDispatch ,useSelector} from "react-redux";
import { Ionicons } from "@expo/vector-icons";
 import {     amountAdd, amountSub, removeItem } from "./CardCartController";
 import { updateCart } from '../../../../redux/cart';


 const CartItems = (props) => {
    //  console.log("esto es lo q llega de props", props)
    const {id,img,price,amount,title}=props.item
    const dispatch = useDispatch();
    if (typeof(id)===undefined) {
        console.log("capturando id undefined")
        return
    }

  return (
    <View key={id} style={styles.cartItem}>
      <Image source={img} style={styles.cartItemImg} />
      <View style={styles.carDet}>
        <Text style={styles.cartItemTitle}>{title}</Text>
        <Text style={styles.cartItemPrice}>${price}</Text>
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
                      onPress: () =>   removeItem(id)   
                      
                    },
                  ],
                  { cancelable: false }
                );
            }
              else 
              amountSub(id,amount)
              dispatch(updateCart())
            }
             }
          >
            <Ionicons name="md-remove" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.cartItemAmountText}>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
                amountAdd(id, amount);
                dispatch(updateCart());
              }}
          >
            
            <Ionicons name="md-add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.cartItemRemove}>
          <TouchableOpacity
            onPress={() => {
                removeItem(id)
                dispatch(updateCart());
            }}
            style={styles.cartItemRemoveButton}
          >
            <Ionicons name="md-trash" size={15} color="black" />
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  cartItem: {
    padding: 20,
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
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
