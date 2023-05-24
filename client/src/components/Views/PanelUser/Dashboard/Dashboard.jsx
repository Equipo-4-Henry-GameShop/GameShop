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

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo


export const Dashboard = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("MyProfile", { name: "MyProfile" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>My Profile</Text>
          </View>
        </TouchableOpacity>
      </View>



      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("MyPosts", { name: "My posts" })
          }
        >
          <View >
            <Text style={styles.buttonText}>My Posts</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("MyShoppings", { name: "My shoppings" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>My shoppings</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate("MyVotes", { name: "My votes" })
          }
        >
          <View >
            <Text style={styles.buttonText}>My votes</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("VideoGameList", { name: "VideoGame List" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>VideoGame list</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("UserList", { name: "User list" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>User list</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("Sales", { name: "Sales" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sales</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("CreateVideogame", { name: "Create Videogame" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Videogame</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("CreateItem", { name: "Create Item" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Publish item</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}
          onPress={() =>
            navigation.navigate("Metrics", { name: "Metrics" })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Metrics</Text>
          </View>
        </TouchableOpacity>
      </View>

      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"auto",
    alignItems: "center",
    top:50,
  },
  buttonContainer: {
    width:"90%",
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

