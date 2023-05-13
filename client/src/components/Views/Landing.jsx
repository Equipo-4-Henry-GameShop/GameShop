
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import {color_azul, color_blanco, color_gris, color_negro, } from '../../constants/Colors'
import { ThemeContext } from '../Theme/ThemeProvider';
import * as React from 'react';

const Landing =({ navigation, route})=>{

  //esta linea debo de llamar en cada componente 
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
    return (
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={styles.imgContainer}>
          <Image 
            source={isDarkMode ? require( '../../assets/gameShop-white-mario.png') :require( '../../assets/gameshop.png')}
            // style={styles.image}
            
            />
        </View>
      <View style={styles.buttonContainer} >
      <Button title={isDarkMode ? 'Light Mode' : 'Dark Mode'} onPress={toggleTheme} />
      <TouchableOpacity onPress={() =>
            navigation.navigate('HomeScreen', { name: 'Usuario Invitado ?' })
          }
      >
          <View style={[styles.button, isDarkMode && styles.darkButton ]}>
            <Text style={[styles, isDarkMode && styles.darkButtonText ]}>Acceder</Text>
          </View>
        </TouchableOpacity>
      </View>
  </View> 
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: color_blanco,
      alignItems: 'center',
      width: '100%',
    },
    darkContainer:{
      flex: 1,
      justifyContent: 'center',
      
      alignItems: 'center',
      width: '100%',
      backgroundColor: color_negro,
      
    },
    imgContainer:{
     
      alignItems: 'center',
      margin:50,
      width: '100%',
      // backgroundColor: 'red',
    },
    buttonContainer:{
      margin:50,
    },
    
    button: {
      marginBottom: 30,
      width: 250,
      alignItems: 'center',
      backgroundColor: color_azul,
      borderRadius:8,
  
    },
    darkButton:{
      marginBottom: 30,
      width: 250,
      alignItems: 'center',
      backgroundColor: color_gris,
      borderRadius:8,
    },
 
    buttonText: {
      textAlign: 'center',
      padding: 20,
      fontSize:45,
    fontWeight: 'bold',
      color: color_blanco,
  
    },
    darkButtonText:{
      textAlign: 'center',
      padding: 20,
      fontSize:45,
    fontWeight: 'bold',
      color: color_negro,
    }
 
    
   
  });
  export default Landing