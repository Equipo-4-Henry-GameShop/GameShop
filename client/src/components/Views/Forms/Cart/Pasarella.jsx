import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, Image } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { removeItem,cleanCart } from "./CardCartController";
import { useDispatch } from "react-redux";
// import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";

const Pasarella = ({ route }) => {
  const dispatch=useDispatch()
  const { Cart ,tot,userid} = route.params;

  // console.log("Esto me llega de props totl:", userid);
  const cardFieldRef = useRef(null);
  //Data
  // const items = [{ videogameId: 3498, videogameName: "Grand Theft Auto V", unitPrice: 20, quantity: 2 }, 
  //                { videogameId: 4200, videogameName: "Portal 2", unitPrice: 20, quantity: 5 }];
  // console.log("--->>")
  // console.log("llega",tot.toFixed(2))
  var datos = {
    items: Cart,
    amount: (tot.toFixed(2)*100),
    userId: userid,
  };
  // console.log("ese",(datos.amount))
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
            // dispatch(cleanCart())
            // navigation.navigate('HomeScreen');
            
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
    <View style={styles.container}>
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
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={subscribe} title="Pay" disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 100,
    marginVertical: 30,
  },
});

export default Pasarella;
