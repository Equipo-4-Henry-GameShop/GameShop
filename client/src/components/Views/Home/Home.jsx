import { StyleSheet ,TouchableOpacity, Text, View,Button, SectionList, ActivityIndicator, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_naranja_claro, color_negro, color_negro_grafito, color_neon, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'

import {useDispatch, useSelector} from "react-redux"
import { useEffect ,useState} from 'react'
import {getvideoGames, setNxtPage,setPrvPage, getvGamebyName, set1rsPage,setPrvVideogame} from "../../../redux/videogamesActions"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardHome from './CardHome';
import Detail from '../Detail/Detail'
import { setFlaPrev, updateVideogames } from '../../../redux/videogamesSlice';

//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';

import {useContext} from 'react';
import SearchBar from './SearchBar';


//este tiene toda la logica xq va dentro de un stack
const Home=({ navigation, route})=>{
  const dispatch= useDispatch();
  const vGames=useSelector((state)=>state.videogamesState)
  const flag_prev= vGames.flag_prev
  const pagina=vGames.pagina
  const porPagina= vGames.porPagina
  const maximo=Math.ceil(vGames.videoGames.length/porPagina)


  //linea para setear el lenguaje /obtener palabras de lenguaje
  const { isDarkMode , StringsDark} = useContext(ThemeContext);
  const {localizedStrings }= useContext(LocalizationContext)

  useEffect(()=>{
    // console.log("entro aqui?")
    dispatch(getvideoGames()) ;
  },[])
  
  
  const NextPage=()=>{
    if(maximo===pagina){
      alert("Ya se encuentra ubicado en la ultima pagina")
      return
    }
      dispatch(setNxtPage())
  }
  const PrevPage=()=>{
      if(pagina===1) {
        alert("Ya se encuentra ubicado en la Primera pagina")
        return
      }
      dispatch(setPrvPage())
  }
 

  
return (
  <View  style={[styles.Container, {backgroundColor:StringsDark.bktitle}]}>
      
      <View style={styles.Navback}>
            <TouchableOpacity onPress={PrevPage} flag_prev={flag_prev}>
               < MaterialCommunityIcons name="chevron-back-circle-sharp" 
               size={30} color={StringsDark.text}/>
            </TouchableOpacity> 
        
      </View>
      <View style={styles.List}>
          
        
        <SectionList
         // // //  , 
        sections={[
          {
            title: `${localizedStrings.Page}  ${pagina} ${localizedStrings.of} ${maximo}` ,
           
            data : vGames.videoGames.slice(
                      (pagina-1)*porPagina,
                      (pagina-1)*porPagina+porPagina)
                    .map(el=>{
                     //console.log("elemto sliceado",el)
                    return ({
                                    key: `${el.id}`, 
                                    img: {uri:el.image }, 
                                    nombre:el.name ,
                                    fecLan: el.released,
                                    // screnshoots: el.screnshoots,
                                    screenshoots:el.screenshots,
                                    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit risus et felis malesuada, in interdum turpis lacinia. Donec gravida tincidunt mollis. Donec luctus est non iaculis ultricies. In bibendum turpis et odio mollis, ac tincidunt dui efficitur. Vivamus iaculis a eros nec congue. Donec neque metus, blandit condimentum velit nec, eleifend scelerisque tellus. Vestibulum sed pretium dui, quis bibendum dui.',
                                    rating: el.rating,
                                    generos: el.genre,
                                    tiendas: el.tiendas,
                                    etiquetas: el.etiquetas,
                                    plataformas: el.platforms,
                                    precio: el.price ? el.price: '20.55',
                                    requerimientos:el.requeriments_en
                                    // requerimientos:el.requeriments_en ? el.requeriments_en.map(el=>el.minimum): 'Sin informacion'
                                  })
                    })   
          },
        
        ]}
        renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
          <>  
               
                <CardHome data={item} navigation={navigation}  
                 ActivityIndicator color={color_azul} size={"large"}/>
          </>
        }
        renderSectionHeader={({section}) => <Text style={[styles.cabecera, {color: StringsDark.bkContesp}]}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
              // keyExtractor={(item, index) => index}
        />
        
      </View>
      <View style={styles.NavNext}>
      <TouchableOpacity onPress={NextPage}>
          < MaterialCommunityIcons name="chevron-forward-circle-sharp" 
          size={30} color={StringsDark.text}/>
          
        </TouchableOpacity>
      </View>
    </View>
    )
}

const HomeScreen =({ navigation, route})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  const prev_videogames= vGames.videoGames_Prev
  const flag_prev= vGames.flag_prev
  const { isDarkMode, StringsDark } = useContext(ThemeContext);
  const {locale,localizedStrings }= useContext(LocalizationContext)
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: `${localizedStrings.Home}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    })
  },[isDarkMode,locale])

  
  return (
     <Stack.Navigator>
        <Stack.Screen 
        name='Home'
              component={Home} 
              options={{ 
                title: ' ',
                headerStyle: {
                  backgroundColor: StringsDark.backgroundContainer
                },
                headerLeft: () => (<SearchBar flag_prev={flag_prev} prev_videogames={prev_videogames}/> )
                
              }}
        >
             {/* {props => <TabInfo {...props} videogame= {route.params.videogame} />} */}
          
        </Stack.Screen>
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
              >
        </Stack.Screen>
     </Stack.Navigator>
    
    );

}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-between',
    // backgroundColor: color_blanco,
    alignItems: 'center',
    width: '99%',
    flexDirection: 'row',
    height: '100%'
  },
  Navback:{
    width: '6%',
      // backgroundColor: color_crema,
  },
  List:{
    width: '89%',
    height: '100%',
    // backgroundColor: color_azul,
    alignContent: 'center',
     alignItems: 'center',

  },
  NavNext:{
    width: '6%',
    // backgroundColor: color_neon,
  },
  cabecera:{
    alignContent: 'center',
    justifyContent: 'center',
    // color: color_azul,
    fontWeight: 'bold',
    fontSize:25,
    textAlign: 'center',

  },
  title: {
    color: color_azul,
    fontSize:30,
    fontWeight:'700',
    alignItems: 'center',
    
  },

   
  button: {
    marginBottom: 30,
    width: 250,
    height: 40,
    alignItems: 'center',
    backgroundColor: color_azul,
    
    borderBottomEndRadius:8,
    borderBottomStartRadius:8,
    
  },
 
  image: {
    width: 250,
    height: 300,
    justifyContent: 'center',
    // borderTopEndRadius:8,
    // borderTopStartRadius:8,
    
  }
 
});

export default HomeScreen;