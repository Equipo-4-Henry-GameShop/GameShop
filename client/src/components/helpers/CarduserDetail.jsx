import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

import * as stringsColors from "../Theme/stringsColors";

// //Import Dark Mode:
// import { LocalizationContext } from "../Languaje/LocalizationContext"
// import { useContext } from "react";
// import { ThemeContext } from "../Theme/ThemeProvider";
// //Import Dark Mode:

export const CardUserDetail = (props) => {
// //Const Dark Mode:
// const { StringsDark, isDarkMode } = useContext(ThemeContext);
// const { StringsLanguaje, locale } = useContext(LocalizationContext);
// //UseEffect Dark Mode:
// useEffect(() => {
//   navigation.setOptions({
//     headerTitle: `${StringsLanguaje.Register}`,
//     headerStyle: {
//       backgroundColor: StringsDark.backgroundContainer,
//     },
//   });
// }, [isDarkMode, locale]);
// //Dark Mode:
console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <View>
          <Image
            source={{ uri: props.image }}
            style={[{ width: 200, height: 200 }, styles.ImageButton]}
          />
        </View>
        <View>
          <Text>User: {props.User}</Text>
        </View>
        <View>
          <Text>Fullname: {props.fullname}</Text>
        </View>
        <View>
          <Text>Email: {props.email}</Text>
        </View>
        <View>
          <Text>Date of Birth: {props.date}</Text>
        </View>
        <View>
          <Text>Phone: {props.phone}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={props.shoppings}>
            <Text>Shopping history</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: stringsColors.color_azul,
    height: "120%",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
  },
  containerLogin: {
    margin: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 320,

    borderColor: stringsColors.color_negro,
    backgroundColor: stringsColors.color_blanco,
    padding: 10,
  },
  miniButton: {
    marginTop: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "50%",
    padding: 0,
    backgroundColor: stringsColors.color_azul,
    borderRadius: 8,
  },

  ImageButton: {
    marginTop: "10%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    width: 250,
    height: 250,
    padding: 0,
    backgroundColor: stringsColors.color_blanco,
    borderRadius: 125,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: stringsColors.color_blanco,
  },
});
