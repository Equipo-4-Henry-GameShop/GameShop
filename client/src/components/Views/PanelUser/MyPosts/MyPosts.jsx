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



export const MyPosts= () => {
    return (
      <View>
        <View>
          {/* <Link href="/MyProfile">My profile</Link> */}
        </View>
        <View>
          {/* <Link href="/Security">Security</Link> */}
        </View>
        <View>
          {/* <Link href="/Communications">Communications</Link> */}
        </View>
        <View>
          {/* <Link href="/Myposts">Communications</Link> */}
        </View>
        <View>
          {/* <Link href="/Preferences">Communications</Link> */}
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      display:"flex",
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      
    },
  
    buttonContainer: {
      width: "80%",
    },
  
    button: {
      margin: "1%",
      borderRadius: 8,
      height: "5rem",
      width: "80%",
      backgroundColor: color_azul,
      justifyContent:"center",
      alignItems:"center",
  
    },
    buttonText: {
  
      textAlign: "center",
      padding: "10%",
      fontSize: "100%",
      fontWeight: "bold",
      color: color_blanco,
    },
  });
  