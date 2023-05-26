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
import { wrap } from "lodash";
import { color } from "react-native-elements/dist/helpers";

//Dark Mode:
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import { LocalizationContext } from "../../../Languaje/LocalizationContext";
import {
  color_azul_oscuro,
  color_celeste,
  color_gris,
} from "../../../Theme/stringsColors";
//Dark Mode:

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

export const Dashboard = ({ navigation, route }) => {
  //Dark Mode:
  // const [ modoOscuro, setModoOscuro ] = useState(false);
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Dashboard}`,
      headerStyle: { backgroundColor: StringsDark.backgroundContainer },
    });
  }, [isDarkMode, locale]);
  //Dark Mode:

  return (
    <View
      style={[styles.container, { backgroundColor: StringsDark.bordercolor }]}
    >
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: StringsDark.bordercolor },
        ]}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() =>
            navigation.navigate("MyProfile", { name: "My Profile" })
          }
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.MyProfile}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: StringsDark.bordercolor },
        ]}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() => navigation.navigate("MyPosts", { name: "My posts" })}
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.MyPosts}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() =>
            navigation.navigate("MyShoppings", { name: "My shoppings" })
          }
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.MyShoppings}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() => navigation.navigate("MyVotes", { name: "My votes" })}
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.MyVotes}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() =>
            navigation.navigate("VideoGameList", { name: "VideoGame List" })
          }
        >
          <View>
            <Text style={styles.buttonText}>
              {StringsLanguaje.VideogamesList}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() => navigation.navigate("UserList", { name: "User list" })}
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.UserList}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() => navigation.navigate("Sales", { name: "Sales" })}
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.Sales}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "Create Videogame" })
          }
        >
          <View>
            <Text style={styles.buttonText}>
              {StringsLanguaje.CreateVideogame}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() =>
            navigation.navigate("CreateItem", { name: "Create Item" })
          }
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.PublishItem}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: StringsDark.bttColor }]}
          onPress={() => navigation.navigate("Metrics", { name: "Metrics" })}
        >
          <View>
            <Text style={styles.buttonText}>{StringsLanguaje.Metrics}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color_azul,
    width: "100%",
  },

  container: {
    flex: 1,
    width: "auto",
    alignItems: "center",
    // top: 50,
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: color_azul_oscuro,
    // backgroundColor: color_azul,
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
