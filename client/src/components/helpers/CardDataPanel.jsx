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

const CardDataPanel = (props,{navigation}) => {
  console.log(props.redirection)
  return (
    <View key={props.id} style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}  onPress={props.redirection}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View>
          <Text style={styles.text}>{props.fullname}</Text>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={styles.text}>ID: {props.id}</Text>
          <Text style={styles.text}>{props.email}</Text>
          
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    alignContent: "space-around",
  },
  buttonContainer: {
    alignContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    backgroundColor: color_blanco,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 20,
  },
  text: {
    color: "282828",
  },
});

export default CardDataPanel;
