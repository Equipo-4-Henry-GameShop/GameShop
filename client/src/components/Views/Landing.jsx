
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import {color_azul, color_blanco, color_gris, color_negro, color_negro_grafito, color_negro_ligero, color_verdeNeon, } from '../../constants/Colors'
import { ThemeContext } from '../Theme/ThemeProvider';
import * as React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';


const Landing =({ navigation, route})=>{

  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  
  useEffect(()=>{
    navigation.setOptions({
      HeaderTitle: 'Bienvenido',
      headerStyle: {
        backgroundColor: isDarkMode ? color_negro_grafito: color_azul,
      },
    })
  })
  //esta linea debo de llamar en cada componente 
    return (
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <StatusBar backgroundColor={isDarkMode ? color_negro: color_azul} barStyle="light-content" />
        <View style={styles.imgContainer}>
          <Image 
            source={require( '../../assets/gameshop.png')}
            style={[styles.image,isDarkMode && styles.Darkimage]}
            
            />
        </View>
      <View style={styles.buttonContainer} >
      <Button title={isDarkMode ? 'Light Mode' : 'Dark Mode'} onPress={toggleTheme} />
      <TouchableOpacity onPress={() =>
            navigation.navigate('HomeScreen', { name: 'Usuario Invitado ?' })
          }
      >
          <View style={[styles.button, isDarkMode && styles.darkButton ]}>
            <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText ]}>Acceder</Text>
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
      backgroundColor: color_negro_ligero,
      
    },
    image:{
        opacity:0.99
    },
    Darkimage:{
      opacity:0.95
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