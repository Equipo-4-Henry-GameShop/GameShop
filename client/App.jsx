import 'react-native-gesture-handler';
// variables proveedoras del thema
import { ThemeProvider,ThemeContext } from './src/components/Theme/ThemeProvider';
  
import {useContext} from 'react';
//variable para envoler el lenguaje de la APP
import { LocalizationProvider ,LocalizationContext} from './src/components/Languaje/LocalizationContext';
// import {strings } from './src/components/Languaje/localizeStrings'

import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from './src/constants/Colors'
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/components/Views/Home/Home'
import {MyVideogames, PanelUser, MyPosts, MyProfile, Security, Communications, CreateUser, CreateVideogame, VideoGameList, UserList} from "./src/components/Views/PanelUser/routesPanelUser"

import Landing from './src/components/Views/Landing'

import Carrito from './src/components/Views/Forms/Cart'
import { Provider } from 'react-redux'
import store from './src/redux/store'

import { Login } from './src/components/Views/LogIn';
import MenuItems from './src/components/Views/MenuApp/MenuItems';
import axios from "axios";



const Drawer = createDrawerNavigator();
  //esta linea debo de llamar en cada componente 
  

export default function App() {
  // axios.defaults.baseURL = "https://gameshopback-pf-ek5y.onrender.com/"
  axios.defaults.baseURL = "https://gameshop-production-e844.up.railway.app/"
  
  
  return ( 
  <>
  <LocalizationProvider>
    <ThemeProvider>
     <Provider store={store}>
        <NavigationContainer>
             
        <Drawer.Navigator
              drawerContent={(props)=> <MenuItems {...props}/>}
            >
          
            <Drawer.Screen  
                    name="Landing" 
                    component={Landing} 
                    options={{ title: `Bienvenido`,
                      headerStyle: {
                        backgroundColor: color_azul,
                      },
                      headerTintColor: color_blanco,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:25
                      }
                     }}
          />
          <Drawer.Screen  
                    name="HomeScreen" 
                    component={HomeScreen} 
                    initialParams={{ fromChild: 'Initial' }} 
                    
                    options={{ 
                      title: 'Home',
                      headerStyle: {
                        backgroundColor: color_azul,
                      },
                      
                      headerTintColor: color_blanco,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:25
                      },
                      headerRight :  ( ) => ( 
                        
                        <TouchableOpacity onPress={()=> alert("trabajando")}>
                              <MaterialCommunityIcons name="cart" color={color_blanco}  size={30}/>
                              
                        </TouchableOpacity>
                        ),
                     
                      
                    }}
          />

          <Drawer.Screen 
              name='Carrito'
              component={Carrito} 
              options={{ 
                title: 'Shopping Car',
                headerStyle: { backgroundColor: color_azul,},
                headerTintColor: color_blanco,
                headerTitleStyle: { fontWeight: 'bold', fontSize:25  }
              }}
            />



          <Drawer.Screen
              name="PanelUser"
              component={PanelUser}
              options={{
                title: "Panel User",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

          <Drawer.Screen
              name="CreateUser"
              component={CreateUser}
              options={{
                title: "Register",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="CreateVideogame"
              component={CreateVideogame}
              options={{
                title: "Create Videogame",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="MyPosts"
              component={MyPosts}
              options={{
                title: "My posts",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="MyProfile"
              component={MyProfile}
              options={{
                title: "My Profile",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="Security"
              component={Security}
              options={{
                title: "Security",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="Communications"
              component={Communications}
              options={{
                title: "Communications",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

          <Drawer.Screen  
                    name="Login" 
                    component={Login} 
                    options={{ title: 'Bienvenido',
                      headerStyle: {
                        backgroundColor: color_azul,
                      },
                      drawerIcon: ({ color_azul }) => (
                        <Image
                          source={require('./src/assets/gameShop-white-mario.png')}
                          style={{width:20, height:20}}
                        />),
                      headerTintColor: color_blanco,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:25
                      }
                     }}
          />

          <Drawer.Screen
              name="UserList"
              component={UserList}
              options={{
                title: "User List",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

            <Drawer.Screen
              name="VideoGameList"
              component={VideoGameList}
              options={{
                title: "Videogame List",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />

          <Drawer.Screen
              name="MyVideogames"
              component={MyVideogames}
              options={{
                title: "My games",
                headerStyle: {
                  backgroundColor: color_azul,
                },
                headerTintColor: color_blanco,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />
            
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
    </ThemeProvider>
    </LocalizationProvider>
      </>
  );
}
