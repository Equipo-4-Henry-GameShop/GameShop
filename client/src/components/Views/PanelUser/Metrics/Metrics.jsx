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
import CardDataPanel from "../../../helpers/CardDataPanel";

import {
  color_azul,
  color_blanco,
  color_negro,
} from "../../../../constants/Colors";
import { persons } from "../../../../utils/arrayPersons";

import LineChart from './LineChar';
import BarChart from './BarChar';


////Acá podemos pasar como props los datos del usuarios para que este 
////componente sea netamente visual y el codigo quede mas prolijo



export const Metrics= (route) => {
  return (
    <View>
      <Text> Ejemplo de grafico de ventas: </Text>
      <LineChart/>

      <Text> Ejemplo de grafico de rating: </Text>
      <BarChart/>
    </View>

)};
