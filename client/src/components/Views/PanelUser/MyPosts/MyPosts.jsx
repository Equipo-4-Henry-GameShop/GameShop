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
import CardDataPanel from "../../../helpers/CardDataPanel";

import { Items } from "../../../../utils/Items";
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


export const MyPosts = ({navigation, route}) => {

  //Dark Mode:
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.MyPosts}`,
      headerStyle: { backgroundColor: StringsDark.backgroundContainer },
    });
  }, [isDarkMode, locale]);
  //Dark Mode:

  return (
    <View style={[styles.container, { backgroundColor: StringsDark.bordercolor }]}>
      {Items.map((p)=>{
        return(
        <CardDataPanel
        image={p.image}
        name={p.name}
        id={p.id}
        />)

      })}
    </View>

)};

const styles = StyleSheet.create({

  container: {
  },
})

