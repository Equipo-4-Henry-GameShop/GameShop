import 'react-native-gesture-handler';

import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from './src/constants/Colors'
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/components/Views/Home'

import Landing from './src/components/Views/Landing'
import Form_Create from './src/components/Views/Forms/Form_Create'
import Registro from './src/components/Views/Forms/Registro';
import Carrito from './src/components/Views/Forms/Cart'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MenuBottonItem from './src/components/Extras/MenuButton'
import MenuButtonSubItem from './src/components/Extras/MenuButtonSubItem';

const Drawer = createDrawerNavigator();


export default function App() {

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
              name='Form_VideoGame'
              component={Form_Create} 
              options={{ 
                title: 'Formulario de Creacion',
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
              name='Registro'
              component={Registro} 
              options={{ 
                title: 'Registro Usuario',
                headerStyle: { backgroundColor: color_azul,},
                headerTintColor: color_blanco,
                headerTitleStyle: { fontWeight: 'bold', fontSize:25  }
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
          // onPress={()=> navigation.navigate('Form_Create')}
          icon='person'
        />
         <MenuButtonSubItem
            nombre= 'My VideoGames'
            // onPress={()=> navigation.navigate('Form_Create')}
            icon='pricetags'
          />
           <MenuButtonSubItem
            nombre= 'Security'
            // onPress={()=> navigation.navigate('Form_Create')}
            icon='finger-print'
          />
           <MenuButtonSubItem
            nombre= 'Communications'
            // onPress={()=> navigation.navigate('Form_Create')}
            icon='mic-circle'
          />
           <MenuButtonSubItem
            nombre= 'My Post'
            // onPress={()=> navigation.navigate('Form_Create')}
            icon='clipboard'
          />
             <MenuButtonSubItem
            nombre= 'Shoping Car'
            onPress={()=> navigation.navigate('Carrito')}
            icon='cart'
          />
        <MenuBottonItem
          nombre= 'Formularios'
          onPress={()=> navigation.navigate('Form_VideoGame')}
          icon='documents'
        />
          <MenuButtonSubItem
            nombre= 'Video Juegos'
            // onPress={()=> navigation.navigate('Form_Create')}
          />
          <MenuButtonSubItem
            nombre= 'Registro'
            onPress={()=> navigation.navigate('Registro')}
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