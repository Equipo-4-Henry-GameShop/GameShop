import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { color_gris,color_azul ,color_negro,color_blanco} from '../../../constants/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';


const MenuButtonSubItem = ({nombre, onPress,icon}) => {

    //esta linea debo de llamar en cada componente 
    const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={onPress}>
      <MaterialCommunityIcons name={icon} color={isDarkMode ? color_blanco :color_azul}  size={20}/> 
     <View style={styles.ItemContainer}>
        <Text style={[styles.text, isDarkMode && styles.darkModetext]}>{nombre}</Text>
        <View style={styles.separator}/>
     </View>
     

    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  buttonContainer:{
    flexDirection:'row',
        padding: 5,
        width: '100%',
        alignContent: 'center',
        alignItems:'center',
        marginLeft:40
},
    ItemContainer:{
        flexDirection:'column',
        width: '100%',
        // marginLeft:2
    },
    text:{
        fontSize:20,
        fontWeight: 'bold',
        marginLeft:20,
        fontFamily: 'Roboto',
        textAlign:'justify',
        alignContent: 'flex-start'
        //  color: color_azul

    },
    separator: {
      //  marginVertical: 30,
      margin:2,
      height: 0,
      width: '100%',
      marginLeft:20,
      borderColor:color_negro,
      borderWidth:1,
      borderBottomWidth:0,
      opacity: .31,
      
    },
    darkModetext:{
      color: color_blanco
    }
})
export default MenuButtonSubItem