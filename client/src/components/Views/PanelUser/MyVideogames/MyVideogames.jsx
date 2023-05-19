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
  
  export const MyVideogames = () => {
    return (
      <ScrollView>
        <View>
          {videogames.slice(0,10).map((p) => {
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
  });
  