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

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo




export const UserList = () => {

  return (
    <View>
      {persons.map((p)=>{
        return(
        <CardDataPanel
        image={p.image}
        name={p.name}
        id={p.id}
        />)

      })}
    </View>

)};