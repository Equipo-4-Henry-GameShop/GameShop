import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'
import MenuButtonSubItem from './MenuButtonSubItem';
import MenuBottonItem from './MenuButton'
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import {color_azul, color_blanco, color_crema, dark, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon, color_gris} from '../../../constants/Colors'

//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
import React from 'react';

const MenuItems=({navigation})=>{

  //esta linea debo de llamar en cada componente 
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  
    return(
      <DrawerContentScrollView style={[styles.container, isDarkMode && styles.darkModeContainer]}>
          <View style={styles.cabeceramenu}>
  
            <View style={styles.cabeceraimg}>
                  <Image 
                  source={require('../../../assets/gameshop.png')}
                  style={styles.imgmenu}
                  />
                  <Image 
                  source={require('../../../assets/Unknown.jpg')}
                  style={styles.icon}
                  />
            </View>
            <View style={styles.cabeceraText}>
                  <Text style={styles.textoUsr}>Usuario no Registrado ingresa a tu Cuenta</Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('CreateUser')}>
                      <Text style={styles.btnIngresa}>Ingresar</Text>
  
                  </TouchableOpacity>
            </View>
            <View style={styles.separator}>
  
          </View>
        </View>
          
          <MenuBottonItem
            nombre= 'Landing'
            onPress={()=> navigation.navigate('Landing')}
            icon='airplane'
          />
          <MenuBottonItem
            nombre= 'Home'
            onPress={()=> navigation.navigate('HomeScreen')}
            icon='home'
          />
         <MenuBottonItem
            nombre= 'User Panel'
            onPress={()=> navigation.navigate('PanelUser')}
            icon='person'
          />
           <MenuButtonSubItem
              nombre= 'My VideoGames'
              onPress={()=> navigation.navigate('MyVideogames')}
              icon='pricetags'
            />
             <MenuButtonSubItem
              nombre= 'Security'
              onPress={()=> navigation.navigate('Security')}
              icon='finger-print'
            />
             <MenuButtonSubItem
              nombre= 'Communications'
              onPress={()=> navigation.navigate('Communications')}
              icon='mic-circle'
            />
             <MenuButtonSubItem
              nombre= 'My Posts'
              onPress={()=> navigation.navigate('MyPosts')}
              icon='clipboard'
            />
               <MenuButtonSubItem
              nombre= 'Shoping Car'
              onPress={()=> navigation.navigate('Carrito')}
              icon='cart'
            />
  
            {/* <MenuButtonSubItem
              nombre= 'Videogames'
               onPress={()=> navigation.navigate('HomeScreen')}
            /> */}
            <MenuButtonSubItem
              nombre= 'Sign In'
              onPress={()=> navigation.navigate('CreateUser')}
            />
                      <MenuButtonSubItem
              nombre= 'Login'
              onPress={()=> navigation.navigate('Login')}
            />
      </DrawerContentScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color_blanco,
    },
    darkModeContainer:{
      backgroundColor: color_negro,
    },

    cabeceramenu:{
      backgroundColor:color_crema,
    },
    cabeceraimg:{
      flexDirection: 'row',
      // alignContent: 'space-between',
      alignItems: 'center',
      alignContent: 'space-around'
      
    },
    imgmenu: {
      marginLeft:20,
      padding:20,
      width: 120,
      height: 80,
      // justifyContent: '',
      
      resizeMode:'contain'
    },
    icon: {
      marginLeft:70,
      width: 40,
      height: 40,
      // alignContent: 'flex-end',
      // alignItems: '',
      resizeMode:'contain',
      borderRadius:100
  
    },
    cabeceraText:{
      alignContent: 'center',
      alignItems:'center',
      
    },
    btnIngresa:{
      margin:3,
      width: 150,
      height: 40,
      backgroundColor: color_blanco,
      borderRadius: 10,
      color: color_crema,
      fontWeight:'bold',
      fontSize: 25,
      textAlign: 'center',
    },
    textoUsr:{
      fontSize:13,
      color:color_blanco,
    },
    title: {
      color: color_naranja,
      fontSize: 60,
      fontWeight:'700',
    },
    separator: {
      // marginVertical: 30,
      // height: 0,
    width: '100%',
      marginTop:5,
      borderColor:color_negro,
      borderWidth:1,
      color: color_negro,
    },
  
    
  
   
  });
export default MenuItems