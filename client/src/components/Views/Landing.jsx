
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import {color_azul, color_blanco, color_gris, color_negro, color_negro_grafito, color_negro_ligero, color_verdeNeon, } from '../../constants/Colors'
import { ThemeContext } from '../Theme/ThemeProvider';
import {useContext,useEffect} from 'react';

import { StatusBar } from 'react-native';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../Languaje/LocalizationContext';
//este es el boton para cambiar lenguaje
const Landing =({ navigation, route}, props)=>{
  
  //linea para setear el modo dark
  const { isDarkMode, StringsDark } = useContext(ThemeContext);
  //linea para setear el lenguaje /obtener palabras de lenguaje
  const {locale,toggleLanguaje,StringsLanguaje }= useContext(LocalizationContext)
//  console.log("StringsLanguaje",StringsLanguaje)
  
useEffect(()=>{
  navigation.setOptions({
    headerTitle: `${StringsLanguaje.Welcome}`,
    headerStyle: {
      backgroundColor: StringsDark.backgroundContainer,
    },
  })
},[isDarkMode,locale])
  //esta linea debo de llamar en cada componente 
    return (
      <View style={[styles.container, {backgroundColor:StringsDark.tabInactive}]}>
        <StatusBar backgroundColor={isDarkMode ? color_negro: color_azul} barStyle="light-content" />
        <View style={styles.imgContainer}>
          <Image 
            source={require( '../../assets/gameshop.png')}
            style={[styles.image,isDarkMode && styles.Darkimage]}
            
            />
        </View>
      <View style={styles.buttonContainer} >
                {/* <Text>TExto de Prueba</Text>
                <Text>{StringsLanguaje.Welcome}</Text>
                <Button title={isDarkMode ? 'Light Mode' : 'Dark Mode'} onPress={toggleTheme} />
                <Button title={locale==='es' ? 'English':'Español' }  onPress={toggleLanguaje}  />
                <Button title={Darkmode==='light' ? 'Dark Mode':'Light Mode' } onPress={toggleThemeText} /> */}
           <TouchableOpacity onPress={() =>
            navigation.navigate('HomeScreen', { name: 'Usuario Invitado ?' })
             }
           > 
          <View style={[styles.button, isDarkMode && styles.darkButton ]}>
            <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText ]}>{StringsLanguaje.Acces}</Text>
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
      // backgroundColor: color_blanco,
      alignItems: 'center',
      width: '100%',
    },
    darkContainer:{
      flex: 1,
      justifyContent: 'center',
      
      alignItems: 'center',
      width: '100%',
      // backgroundColor: color_negro_ligero,
      
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