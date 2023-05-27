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
  color_negro,
} from "../../../../constants/Colors";

import { videogames } from "../../../../utils/dataVideojuegos";

import CardDataPanel from "../../../helpers/CardDataPanel";
////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

  //Dark Mode:
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import { LocalizationContext } from "../../../Languaje/LocalizationContext";
import {
  color_azul_oscuro,
  color_celeste,
  color_gris,
} from "../../../Theme/stringsColors";
//Dark Mode:


export const VideoGameList = ({navigation}) => {

        //Dark Mode:
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.VideoGameList}`,
      headerStyle: { backgroundColor: StringsDark.backgroundContainer },
    });
  }, [isDarkMode, locale]);
  //Dark Mode:


  return (
    <ScrollView>
      <View style={[styles.forDarkMode, 
    { backgroundColor: StringsDark.bordercolor }]}>
        {videogames.map((p) => {
          return <CardDataPanel image={p.image} name={p.name} id={p.id} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    width: "100%",

    borderRadius: 8,
    backgroundColor: color_azul,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: color_blanco,
  },

  forDarkMode:{

  },
});
