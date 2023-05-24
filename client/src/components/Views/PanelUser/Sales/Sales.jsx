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

export const Sales = ({ navigation }, props) => {
  const dispatch = useDispatch();

  const allSales = useSelector((state) => state.salesState.allSales);



  useEffect(() => {
    dispatch(getAllSales());
  }, []);

  console.log(allSales.allSales);

  const imageDefault =
    "https://img.freepik.com/iconos-gratis/usuario_318-644324.jpg?w=360";

  if (!allSales.length) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } 
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Sales History</Text>
          <View style={styles.buttonContainer}>
            <Text>Lista de ventas</Text>
          </View>

          {/* {"amount": 100, "createdAt": "2023-05-23T17:37:14.843Z", "date": "2023-05-23T17:37:14.843Z", "id": "pi_3NAz91IEe9GBUqtL10h3KH81", "items": [{"quantity": 2, "unitPrice": 20, "videogameId": 3498, "videogameName": "Grand Theft Auto V"}, {"quantity": 5, "unitPrice": 20, "videogameId": 4200, "videogameName": "Portal 2"}], "salesStatus": "Aproved", "updatedAt": "2023-05-23T17:37:14.843Z", "user": {"fullname": "asdadfasdsddasd", "id": 945, "user": "Santiago2"}} */}

          <View>
            <View>
              {allSales.map((s) => {
                console.log(s);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("UserDetail", { id: s.user.id })
                    }
                  >
                    <View key={s.id}>
                      <CardDataBuy
                        id={s.id}
                        user={s.user.fullname}
                        games={s.items.map((g) =>
                          g.videogameName.concat(".  ")
                        )}
                        image={!s.user.image ? imageDefault : s.user.image}
                        items={s.items.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                        date={s.date}
                        price={s.items.reduce(
                          (sum, item) => sum + item.unitPrice * item.quantity,
                          0
                        )}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ExcelGenerator fileName="archivo" />
          </View>

          <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Aqui se descarga excel")}
        >
          <Text style={styles.buttonText}>Descargar</Text>
        </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
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
