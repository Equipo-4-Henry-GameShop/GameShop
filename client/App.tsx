import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from './src/constants/Colors'
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/components/Views/Home'

import Landing from './src/components/Views/Landing'
import Form_Create from './src/components/Views/Form_Create'
import { Provider } from 'react-redux'
import store from './src/redux/store'



const Drawer = createDrawerNavigator();


export default function App() {

  return ( <>
  <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen  
                    name="Landing" 
                    component={Landing} 
                    // initialParams={{ fromChild: 'Initial' }} 
                    options={{ 
                    title: 'Bienvenido',
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
                    
                     
                      
                    }}
          />
            {/* <Drawer.Screen 
              
            /> */}
            <Drawer.Screen 
              name='Creacion Video Juego'
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
            
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: color_gris,
    alignItems: 'center',
    width: '100%',
  },
  
  title: {
    color: color_naranja,
    fontSize: 60,
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
    width: 394,
    height: 460,
    justifyContent: 'center',
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