import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { color_gris,color_blanco, color_azul } from '../../constants/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

const MenuButton = ({nombre, onPress, icon}) => {
  return (
    <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={onPress}>
     <MaterialCommunityIcons name={icon} color={color_azul}  size={20}/>
      <Text style={styles.text}>{nombre}</Text>


    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    buttonContainer:{
        // backgroundColor: color_gris,
        // marginBottom:5,
        // borderRadius:10,
        flexDirection:'row',
        padding: 5,
        width: '100%',
        alignContent: 'center',
        alignItems:'center',
        marginLeft:10
    },
    text:{
        fontSize:22,
        fontWeight: 'bold',
        marginLeft:20,
        fontFamily: 'Roboto',
        color: color_azul
    }
})

export default MenuButton