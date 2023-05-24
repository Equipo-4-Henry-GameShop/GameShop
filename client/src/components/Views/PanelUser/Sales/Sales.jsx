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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSales } from "../../../../redux/salesActions";
import CardDataBuy from "../../../helpers/CardDataBuy";
import { persons } from "../../../../utils/arrayPersons";
import ExcelGenerator from "../../../helpers/ExcelGenerate";
import { getvideoGames } from "../../../../redux/videogamesActions";

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

export const Sales = (props) => {
  const dispatch = useDispatch();

  const allSales = useSelector((state) => state.salesState.allSales);

  const allgames = useSelector((state) => state.videogamesState);

  useEffect(() => {
    dispatch(getAllSales());
  }, []);
  useEffect(() => {
    dispatch(getvideoGames());
  }, []);

  console.log(allSales.allSales);

  console.log(allgames);

  const [aprobed, setAprobed] = useState();


  const [noAprobed, setNoAprobed] = useState();

  if (!allSales.length) {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
    );}else{
  return (
    <View style={styles.container}>
      <Text>Sales History</Text>
      <View style={styles.buttonContainer}>
        <Text>Lista de ventas</Text>
      </View>

      <View>
        <View>
          {
            allSales.map((s) => {
              console.log(s)
              return (
                <View key={s.id}>
                  <TouchableOpacity>
                    <CardDataBuy id={s.id} user={s.user.fullname} image={s.image} Quabtity={s.items.reduce((sum, item) => sum + item.quantity, 0)} date={s.date}/>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ExcelGenerator fileName="archivo" />
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
}
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
