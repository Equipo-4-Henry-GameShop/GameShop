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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSales } from "../../../../redux/salesActions";
import CardDataPanel from "../../../helpers/CardDataPanel";
import arrayPersons from "../../../../utils/arrayPersons"
import ExcelGenerator from "../../../helpers/ExcelGenerate";

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

export const Sales = (props) => {
  const dispatch = useDispatch();

  const allSales = useSelector((state) => state.salesState);

  const allgames = useSelector((state) => state.videogamesState);

  console.log(allSales);

  console.log(allgames);

  useEffect(() => {
    dispatch(getAllSales());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Sales History</Text>
      <View style={styles.buttonContainer}>
        <Text>Lista de ventas</Text>
      </View>

      <View>
        <TouchableOpacity>
          <CardDataPanel />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ExcelGenerator data={arrayPersons} fileName="archivo" />
      </View>



      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Aqui se descarga excel")}
        >
          <Text style={styles.buttonText}>Descargar</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    alignItems: "center",
    top: 50,
  },
  buttonContainer: {
    width: "90%",
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
});
