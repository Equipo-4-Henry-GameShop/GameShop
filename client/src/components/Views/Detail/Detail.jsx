import * as React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import CardDet from './CardDet';
import Carrousel from './Carrousel';
import CardExtra from './CardExtra';

import { useEffect, } from 'react';
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';



const Tab = createBottomTabNavigator();

const TabInfo= (props) => {

  return (
    <>
    <CardDet  videogame= {props.videogame} />
  </>
  )
}

const TabCarrousel= (props) => {
  // console.log("props.videogame.screnshoots", props)
  return (
    <>
     <Carrousel data= {props.data}  />
    </>
  )
  
}

const TabExtra= (props) => {
  // console.log("props TabExtra", props.videogame)
  return (
    <>
     <CardExtra videogame= {props.videogame}  />
    </>
  )
  
}
const DetailScreen = ({route,navigation}) => {
    //linea para setear el lenguaje /obtener palabras de lenguaje
    const { StringsDark,isDarkMode} = React.useContext(ThemeContext);
    const {StringsLanguaje, locale }= React.useContext(LocalizationContext)

    useEffect(()=>{
      navigation.setOptions({
        headerTitle: `${StringsLanguaje.Detail}`,
        headerStyle: {
          backgroundColor: StringsDark.backgroundContainer,
        },
      })
    },[isDarkMode,locale])

    return (
     
      <Tab.Navigator
      initialRouteName={"Información"}
      // tabBarStyle={{
      //   activeBackgroundColor: StringsDark.tabActive, // Cambia el fondo del tab activo
      //   inactiveBackgroundColor: StringsDark.tabInactive, // Cambia el fondo de los tabs inactivos
      // }}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: StringsDark.bktitle,
        },
        tabBarStyle: {
          backgroundColor: route.state && route.state.index === route.key ? StringsDark.tabActive : StringsDark.tabInactive,
        },
        tabBarLabelStyle: {
          color: StringsDark.bkContesp
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
          color: StringsDark.txtprice
        }
      })}
      
    >
       <Tab.Screen 
        name={StringsLanguaje.Information} //detalle de CARD
        options={({ route }) => ({
          // title: `${StringsLanguaje.Information}`,
          // headerTitleStyle: {
          //   color: StringsDark.txtprice
          // },
          
          // tabBarLabelStyle: {
          //   color: StringsDark.bkContesp
          // },
          tabBarIcon: ({  size }) => (
            <MaterialCommunityIcons name="information-circle-outline" 
            color={StringsDark.bkContesp} size={size} />
          )
        })}
      >
        {props => <TabInfo {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>

      <Tab.Screen 
        name="Capturas de Pantalla" 
        
        options={{
          title: `${StringsLanguaje.Screenshot}`,
        //    headerTitleStyle: {
        //     color: StringsDark.bkContesp
        // },
        // tabBarLabelStyle: {
        //   color: StringsDark.bkContesp
        // },
          tabBarIcon: ({  size }) => (
            <MaterialCommunityIcons name="images-outline" 
            color={StringsDark.bkContesp} size={size} />
          )
        }}>

        {props => <TabCarrousel {...props} data={route.params.videogame.screenshoots} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Extra" 
        options={{
          title: `${StringsLanguaje.Extra}`,
        //    headerTitleStyle: {
        //   color: StringsDark.bkContesp
        // },
        // tabBarLabelStyle: {
        //   color: StringsDark.bkContesp
        // },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-tray-stacked-outline" 
            color={StringsDark.bkContesp} size={size} />
          )
        }}
      >
          {props => <TabExtra {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>
      
    </Tab.Navigator>
    );
  };
  const styles = StyleSheet.create({
 
   
  });
  
  export default DetailScreen;