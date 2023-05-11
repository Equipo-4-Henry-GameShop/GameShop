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

export const Security = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>User</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Password</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Videogame</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Email</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "CreateVideogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Delete my account</Text>
          </View>
        </TouchableOpacity>
      </View>
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
