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
  
export const CardUserDetail = (props) => {

    <View>
        <View><Image source={{ uri: props.image }}/></View>
        <View><Text>User: {props.user}</Text></View>
        <View><Text>Fullname: {props.fullname}</Text></View>
        <View><Text>Email: {props.email}</Text></View>
        <View><Text>Date of Birth: {props.date}</Text></View>
        <View><Text>Phone: {props.phone}</Text></View>
        <View><TouchableOpacity onPress={props.shoppings}><Text>Shopping history</Text></TouchableOpacity></View>

    </View>
 
}