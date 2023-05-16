import * as React from 'react';
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList,FlatList} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import CardDet from './CardDet';
import Carrousel from './Carrousel';
import CardExtra from './CardExtra';

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
    const {  StringsDark} = React.useContext(ThemeContext);
    const {StringsLanguaje }= React.useContext(LocalizationContext)

    return (
     
      <Tab.Navigator
      initialRouteName={"Información"}
      
      screenOptions={{
        headerStyle: {
          backgroundColor: StringsDark.backgroundContainer,
        },
        headerTintColor:  StringsDark.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
        }
      }}
    >

      
       <Tab.Screen 
        name={route.params.videogame.nombre} //detalle de CARD
        options={{
          headerTitleStyle: {
            color: StringsDark.bktitle
          },
          tabBarIcon: ({  size }) => (
            <MaterialCommunityIcons name="information-circle-outline" 
            color={StringsDark.txtprice} size={size} />
          )
        }}
      >
        {props => <TabInfo {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>

      <Tab.Screen 
        name="Capturas de Pantalla" 
        options={{
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