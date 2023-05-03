import * as React from 'react';
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList,FlatList} from 'react-native';
import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import CardDet from './CardDet';
const Tab = createBottomTabNavigator();

const WorldScreen = (props: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a {props.name}!</Text>
    </View>
  );
};
const Info= (props: any) => {
  // console.log("props Detail", props.videogame)
  return (
    <>
    <CardDet
        videogame= {props.videogame}
    />
    {/* <View style={styles.container}>
          <Text style={styles.title}>{route.params.nombre}</Text>
          <View style={styles.imageContenedor}>
            { route.params.imagen ? <Image source={{uri:route.params.imagen}} style={styles.image}/> 
                        : <Image source={require('../../assets/Unknown.jpg')} /> 
                    } 
         </View>
        
    <Text style={styles.text}>This is {route.params.nombre}'s profile</Text>
    <Text style={styles.text}>Rating {route.params.rating}</Text> 
     <Text>esto es detail con props {props.videogame.nombre}</Text> 
    <Button
      title='Update Title'
      onPress={() => navigation.setOptions({ title: route.params.phrase || 'Avengers'})}
      /> 
    </View> */}
  </>
  )
  
}
const DetailScreen = ({route}:{route:any},{ navigation}:{navigation: any}) => {
  // export default function DetailScreen () {
    // console.log("videogame --->", route.params.videogame)
    return (
      <Tab.Navigator
      initialRouteName="Info"
      screenOptions={{
        "tabBarActiveTintColor": "darkred"
      }}
    >
       <Tab.Screen 
        name="Info" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle-outline" color={color} size={size} />
          )
        }}
      >
        {props => <Info {...props} videogame= {route.params.videogame} />}
      </Tab.Screen>
      <Tab.Screen 
        name="ScreenShots" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="images-outline" color={color} size={size} />
          )
        }}>

        {props => <WorldScreen {...props} name="Screeens" />}
      </Tab.Screen>
      <Tab.Screen 
        name="Extra" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-tray-stacked-outline" color={color} size={size} />
          )
        }}
      >
        {props => <WorldScreen {...props} name="Nidavellir" />}
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