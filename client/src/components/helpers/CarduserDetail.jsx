import { View } from "react-native/types"


export const CardUserDetail = (props) => {
    <View>
        <View><Image source={{ uri: props.image }}/></View>
        <View><Text>Name: {props.fullname}</Text></View>
        <View><Text>Email: {props.email}</Text></View>
        <View><Text>Date of Birth: {props.date}</Text></View>
        <View><Text>Phone: {props.phone}</Text></View>
        <View><Text>Shopping history: {props.Buys}</Text></View>

    </View>

}