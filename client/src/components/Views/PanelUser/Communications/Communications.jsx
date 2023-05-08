// import { Link } from "expo-router";


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

////Acá podemos pasar como props los datos del usuarios para que este 
////componente sea netamente visual y el codigo quede mas prolijo



export const Communications= (route) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("MyPosts", { name: "My posts" })
          }
        >
          <View >
            <Text style={styles.buttonText}>MyPosts</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("Preferences", { name: "Preferences" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Preferences</Text>
          </View>
        </TouchableOpacity >
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("Communications", { name: "Communications" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Communications</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MyProfile", { name: "MyProfile" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>MyProfile</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Videogame</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>

    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
    alignItems: "center"
  },
  button: {
    width: "100%",

    borderRadius: 8,
    backgroundColor: color_azul,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: color_blanco
  }
});