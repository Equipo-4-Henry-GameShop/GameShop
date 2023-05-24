import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
} from "react-native";
import {
    color_azul,
    color_blanco,
    color_gris,
    color_negro,
  } from "../../constants/Colors";


const CardDataBuy = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.goToDetail}>
        <Image style={styles.image} source={{ uri: props.image }}/>
        <View >
          <Text style={styles.text}>Id buy: {props.id}</Text>
          <Text style={styles.text}>Games {props.games}</Text>
          <Text style={styles.text}>items: {props.items}</Text>
          <Text style={styles.text}>user: {props.user}</Text>
          <Text style={styles.text}>date: {props.date}</Text>
          <Text style={styles.text}>Total$ {props.price}</Text>

        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    alignContent: "space-around",

  },
  buttonContainer: {
    alignContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    backgroundColor:color_blanco,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 20 ,
  },
  text:{
    color:"282828",
  },
});

export default CardDataBuy;
