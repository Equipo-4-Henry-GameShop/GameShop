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
  color_gris,
  color_negro,
} from "../../constants/Colors";

const CardAlert = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {props.message.map((m) => {
        return (
          <View>
            <Text style={styles.title}>*{m}</Text>
          </View>
        );
      })}

      <View>
        <TouchableOpacity style={styles.miniButton}>Acept</TouchableOpacity>
        <TouchableOpacity style={styles.miniButton}>Cancel</TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
    header: {
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color_azul,
      width: "100%",
    },
    container: {
      backgroundColor: color_blanco,
      height: "100%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      padding: 8,
    },
  
    containerLogin: {
      margin: "auto",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      width: 320,
      height: "85%",
      borderColor: color_negro,
      backgroundColor: color_blanco,
      alignItems: "center",
  
      padding: 10,
    },
    title: {
      margin: 24,
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    
    input: {
      textAlign: "center",
      height: 50,
      borderWidth: 2,
      borderColor: color_azul,
      paddingHorizontal: 70,
      marginLeft: "2%",
      marginRight: "2%",
      borderColor: "#ddd",
      backgroundColor: "#fff",
      marginBottom: 15,
      borderRadius: 8,
    },
    miniButton: {
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      marginBottom: "8%",
      height: "10%",
      width: "50%",
      padding: 0,
      backgroundColor: color_azul,
      borderRadius: 8,
    },
    error: {
      textAlign:"center",
      marginTop: -15,
      fontSize: 14,
      color: "red",
      fontWeight: "bold",
    },
    buttonText: {
      textAlign: "center",
      padding: 10,
      fontSize: 15,
      fontWeight: "bold",
      color: color_blanco,
    },
    buttonGoogle: {
      marginTop: "10%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 20,
    },
    imageGoogle: {
      height: 40,
      width: 250,
    },
  });
  