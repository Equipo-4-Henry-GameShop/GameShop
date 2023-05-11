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
import CardDataPanel from "../../../Extras/CardDataPanel";

import { Items } from "../../../../utils/Items";
////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo



export const MyPosts= () => {
  return (
    <View>
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

