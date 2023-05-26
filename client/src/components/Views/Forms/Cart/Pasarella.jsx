
import { View, Text, StyleSheet, TextInput, Button, Alert, Image } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { removeItem,cleanCart} from "./CardCartController";
import { useDispatch } from "react-redux";
import { updateCart } from '../../../../redux/cartSlice';
//linea para llamar a modo DARK
import { ThemeContext } from '../../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../../Languaje/LocalizationContext';
import React, { useEffect, useState ,useContext,useRef} from 'react';

const Pasarella = ({ navigation, route }) => {

  const dispatch=useDispatch()
  const {  StringsDark,isDarkMode} = useContext(ThemeContext);
  const {StringsLanguaje ,locale}= useContext(LocalizationContext)
  const { Cart ,tot,userid} = route.params;

  const cardFieldRef = useRef(null);

  useEffect(()=>{
    // console.log("esta entrando ?")
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Pasarella}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    })
},[isDarkMode,locale])

  if (isNaN(tot)) {
  console.log("tot no es un número válido");
} else {
  // Convertir tot a un número válido con dos decimales
  const amountfx = (Number(tot) * 100).toFixed(0);
  console.log("amountfx",amountfx);
  var datos = {
    items: Cart,
    amount: amountfx,
    userId: userid,
  };
  
  // console.log("Datos:", datos.amount);
}
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const subscribe = async () => {

    try {
        const response = await fetch("https://gameshop-production-e844.up.railway.app/pay", {  
        method: "POST",
        body: JSON.stringify({ datos }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("lo que hay en data")
      console.log(data)
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      console.log("estoy bien")
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
      });
      if (error) {
        alert(`Payment Confirmation Error ${error.message}`);
      } else if (paymentIntent) {
        const itemsFormat = JSON.stringify(datos.items)
        console.log("items formateados----> " + itemsFormat);
        try {

            const response = await fetch("https://gameshop-production-e844.up.railway.app/createSale", {
            method: "POST",
            body: JSON.stringify({
              paymentId: paymentIntent.id,
              amount: datos.amount,
              items: itemsFormat,
              userId: userid
            }),
            headers: {
              "Content-Type": "application/json",
            },

          });
          const data = await response.json();
          console.log(typeof data.message)
          if (data.message === "ok") {
            console.log("Entro a pago exitoso")
            alert("Payment Successful");
            console.log("Payment successful ", paymentIntent.status);
            cleanCart();
            dispatch(updateCart());
            navigation.navigate('HomeScreen');
            
          } else {
            alert("It was not possible to complete the purchase, the payment has been refunded.")
          }

        } catch (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        }

        if (cardFieldRef.current) {
          cardFieldRef.current.clear(); // Limpia el contenido del CardField
        }

      }
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong, try again later!");
    }
  };

  return (
    <View style={[styles.container,{backgroundColor:StringsDark.backgroundContainer}]}>
      <View >
        <Image
          style={styles.mario}
          source={require("../../../../assets/gameShop-white-mario.png")}
        ></Image>
      </View>
      <CardField
        ref={cardFieldRef}
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        
        cardStyle={[styles.card,{backgroundColor:StringsDark.txtprice}]}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={subscribe} title={StringsLanguaje.chkOut} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
    borderRadius:8
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  mario:{
    width: '90%',
    alignSelf:'center',
    resizeMode:'contain'
  },
  card: {
    // backgroundColor: "green",
  },
  cardContainer: {
    height: 100,
    marginVertical: 30,
  },
  botonPago:{
    fontSize:45,
    fontWeight:'bold'
  }
  ,
});

export default Pasarella;
