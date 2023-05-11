import 'react-native-gesture-handler';

import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from './src/constants/Colors'
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/components/Views/Home'

import {MyVideogames, PanelUser, MyPosts, MyProfile, Security, Communications, CreateUser, CreateVideogame, VideoGameList, UserList} from "./src/components/Views/PanelUser/routesPanelUser"

import Landing from './src/components/Views/Landing'
import Form_Create from './src/components/Views/Forms/Form_Create'
import Registro from './src/components/Views/Forms/Registro';
import Carrito from './src/components/Views/Forms/Cart'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MenuBottonItem from './src/components/Extras/MenuButton'
import MenuButtonSubItem from './src/components/Extras/MenuButtonSubItem';
import { Login } from './src/components/Views/LogIn';



import axios from "axios";

const Drawer = createDrawerNavigator();


export default function App() {
  axios.defaults.baseURL = "https://gameshopback-pf-ek5y.onrender.com/"

  return ( <>
  <Provider store={store}>
      <NavigationContainer>
          
        <Drawer.Navigator
            drawerContent={(props)=> <MenuItems {...props}/>}
            >
          
            <Drawer.Screen  
                    name="Landing" 
                    component={Landing} 
                    options={{ title: 'Bienvenido',
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
                          source={require('./src/assets/gameshop-white-mario.png')}
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
      </>
  );
}
const MenuItems=({navigation})=>{
  return(
    <DrawerContentScrollView style={styles.container}>
        <View style={styles.cabeceramenu}>

          <View style={styles.cabeceraimg}>
                <Image 
                source={require('./src/assets/gameshop.png')}
                style={styles.imgmenu}
                />
                <Image 
                source={require('./src/assets/Unknown.jpg')}
                style={styles.icon}
                />
          </View>
          <View style={styles.cabeceraText}>
                <Text style={styles.textoUsr}>Usuario no Registrado ingresa a tu Cuenta</Text>
                <TouchableOpacity onPress={()=>alert("En construccion")}>
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

          <MenuButtonSubItem
            nombre= 'Videogames'
            onPress={()=> navigation.navigate('HomeScreen')}
          />
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

  buttonText: {
    textAlign: 'center',
    padding: 20,
    fontSize:40,
  
    color: color_negro,

  },

 
});