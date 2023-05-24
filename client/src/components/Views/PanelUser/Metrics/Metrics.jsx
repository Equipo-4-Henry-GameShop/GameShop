import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
<<<<<<< HEAD
=======
  SafeAreaView,
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
} from "react-native";
import CardDataPanel from "../../../helpers/CardDataPanel";

import {
  color_azul,
  color_blanco,
  color_negro,
} from "../../../../constants/Colors";
import { persons } from "../../../../utils/arrayPersons";

<<<<<<< HEAD
////Acá podemos pasar como props los datos del usuarios para que este 
////componente sea netamente visual y el codigo quede mas prolijo



export const Metrics= (route) => {
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
=======
import MyBezierLineChart from "./LineChart";
import MyBarChart from "./BarChart";

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

export const Metrics = (route) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Bezier Line Chart</Text>
        <MyBezierLineChart style={styles.container} />

        <Text>Bar Chart</Text>
        <MyBarChart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    marginLeft: -15,
  },
});
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
