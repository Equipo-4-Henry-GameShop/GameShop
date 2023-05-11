import * as React from 'react';
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList,FlatList} from 'react-native';
import {color_blanco, color_azul, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import CardDet from './CardDet';
import Carrousel from './Carrousel';
import CardExtra from './CardExtra';
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
  // export default function DetailScreen () {
    // console.log("videogame en DEtail",route.params.videogame.screenshoots )
    return (
     
      <Tab.Navigator
      initialRouteName={"Información"}
      
      screenOptions={{
        "tabBarActiveTintColor": "darkred",
        headerStyle: {
          backgroundColor: color_blanco,
        },
        headerTintColor: color_azul,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
        }
      }}
    >

      
       <Tab.Screen 
        name={route.params.videogame.nombre} //detalle de CARD
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle-outline" color={color} size={size} />
          )
        }}
      >
        {props => <TabInfo {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>

      <Tab.Screen 
        name="Capturas de Pantalla" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="images-outline" color={color} size={size} />
          )
        }}>

        {props => <TabCarrousel {...props} data={route.params.videogame.screenshoots} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Extra" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-tray-stacked-outline" color={color} size={size} />
          )
        }}
      >
          {props => <TabExtra {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>
      
    </Tab.Navigator>
    );
  };
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: color_rojoNeon,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    
    title: {
      color: color_blanco,
      fontSize: 40,
      fontWeight:'700',
    },
    text: {
        color: color_blanco,
        fontSize: 30,
        fontWeight:'700',
      },
    separator: {
      marginVertical: 30,
      height: 5,
      width: '80%',
      color: color_blanco
    },
     h2: {
      color: '#FAE042',
      fontSize: 18,
      marginTop: 8,
    },
    button: {
      marginBottom: 30,
      width: 250,
      alignItems: 'center',
      backgroundColor: color_verdeNeon,
      borderRadius:8,
  
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      fontSize:40,
    
      color: color_negro,
  
    },
    image: {
      width: 360,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
    
      backgroundColor: color_negro,
    },
    imageContenedor: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        backgroundColor: color_negro,
      },
    buttonContainer: {
      backgroundColor: color_negro,
      height:'100%',
      width: '100%',
      borderRadius: 5,
      padding: 2,
      margin: 2,
      alignItems: 'center',
      // justifyContent: ,
    },
   
  });
  
  export default DetailScreen;