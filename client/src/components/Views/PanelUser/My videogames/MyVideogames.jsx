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

import AsyncStorage from "@react-native-async-storage/async-storage";

import { videogames } from "../../../../utils/dataVideojuegos";

import CardDataPanel from "../../../helpers/CardDataPanel";
import { getVGameByID } from "../../../../redux/videogamesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllSalesUser } from "../../../../redux/salesActions";
import { useNavigation } from "@react-navigation/native";
////Lo que tengo que hacer acá es consumir atraves del local storage el valor id y mostrar los titulos de los videojuegos que compre.
////una vez trayendolos, los filtro y traigo la info de los videojuegos completa por id para inspeccionar. Podemos usar el detail de David

export const MyVideogames = ({navigation}) => {
  const VGID = useSelector((state) => state.videogamesState.vGameId);
  const SalesUser = useSelector((state) => state.salesState.allSlsUsr);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const getDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("loggedGameShop");
      if (data !== null) {
        console.log("Valor almacenado en AsyncStorage:", data);
        const parsedData = JSON.parse(data);
        dispatch(getAllSalesUser(parsedData.id));
        dispatch(getvideoGames) // Despachar la acción antes de actualizar el estado
        console.log(parsedData.id);

        console.log(VGID);
        console.log(SalesUser);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        console.log("No se encontró ningún valor en AsyncStorage");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error al acceder a AsyncStorage:", error);
      setLoading(false);
    }
  };

  const dataVGID=(id) =>{
    dispatch(getVGameByID(id))
    console.log(`EL ID---------------------------${id}`)
    console.log(`Se disparó la función ${VGID}`),
    navigation.navigate('Detail', { videogame: VGID })
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [getAllSalesUser]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>

        <Image
          source={{
            uri: "https://media.tenor.com/sHqEVx12ZVkAAAAM/mario-super.gif",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }
  if (!SalesUser.length) {
    return (
      <View>
        <Text>You don't have video games</Text>
      </View>
    );
  }
  console.log(SalesUser[0].items[0]);
  return (
    <ScrollView>
      <View>
        {SalesUser.map((g) => {

          return (
            <CardDataPanel
              image={g.items[0].image}
              name={g.items[0].videogameName}
              id={g.items[0].videogameId}
              redirection={() => dataVGID(g.items[0].videogameId)}
            />
          );
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
});
