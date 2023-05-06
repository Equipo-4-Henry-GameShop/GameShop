import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from './src/constants/Colors'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Views/Home'
import Detail from './src/components/Views/Detail/Detail'
import Landing from './src/components/Views/Landing'

import { Provider } from 'react-redux'
import store from './src/redux/store'



const Stack = createNativeStackNavigator();

export default function App() {

  return ( <>
  <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  
                name="Landing" 
                component={Landing} 
                initialParams={{ fromChild: 'Initial' }} 
                options={{ 
                  title: 'Bienvenido Jugadoraso',
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
       <Stack.Screen  
                name="Home" 
                component={Home} 
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
                  }
                }}
       />
        <Stack.Screen 
          name='Detail'
          component={Detail} 
          options={{ 
            title: 'Detail',
            headerStyle: {
              backgroundColor: color_azul,
            },
            headerTintColor: color_blanco,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25
            }
          }}
          // options={({ route }) => ({ title: route.params.name }: any)}
        />
        
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    
    // backgroundColor: color_negro,
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // height: '100%'
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