import { StyleSheet ,TouchableOpacity, Text, View,Button, SectionList, ActivityIndicator, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from 'react'
import {getvideoGames, setNxtPage,setPrvPage, getvGamebyName, set1rsPage,setPrvVideogame} from "../../../redux/videogamesActions"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardHome from './CardHome';
import Detail from '../Detail/Detail'


//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';

import {useContext} from 'react';
import SearchBar from './SearchBar';

import { Badge } from "react-native-paper";
import {getKeysCount} from '../../../../src/components/Views/Forms/Cart/CardCartController'
//este tiene toda la logica xq va dentro de un stack
const Home=({ navigation, route})=>{
  const dispatch= useDispatch();
  const vGames=useSelector((state)=>state.videogamesState)
  const flag_prev= vGames.flag_prev
  const pagina=vGames.pagina
  const porPagina= vGames.porPagina
  const maximo=Math.ceil(vGames.videoGames.length/porPagina)


  //linea para setear el lenguaje /obtener palabras de lenguaje
  const {  StringsDark} = useContext(ThemeContext);
  const {StringsLanguaje }= useContext(LocalizationContext)

  useEffect(()=>{
    //  console.log("entro al 2do home??")
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
            title: `${StringsLanguaje.Page}  ${pagina} ${StringsLanguaje.of} ${maximo}` ,
           
            data : vGames.videoGames.slice(
                      (pagina-1)*porPagina,
                      (pagina-1)*porPagina+porPagina)
                    .map(el=>{
                     //console.log("elemto sliceado",el)
                    return ({
                                    key: `${el.id}`, 
                                    img: {uri:el.image }, 
                                    nombre:el.name ,
                                    fecLan: el.releaseDate ? el.releaseDate : '2020-10-10',
                                    // screnshoots: el.screnshoots,
                                    screenshoots:el.screenshots,
                                    informacion: el.description ? el.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat metus eget maximus scelerisque. Vivamus tempor eleifend nulla in placerat. Sed sollicitudin a odio a viverra. Morbi sagittis consequat erat at malesuada. Ut a ultrices risus. Suspendisse consectetur lectus elementum libero auctor venenatis. Ut semper arcu eu efficitur efficitur. Maecenas gravida mauris a porttitor congue. Suspendisse et neque eget quam blandit vehicula. Praesent interdum elementum lorem eget scelerisque. Nam vitae condimentum ipsum. Sed interdum eros dui, sit amet faucibus elit maximus at. Aenean eu posuere elit. In vitae diam at neque feugiat pharetra in sit amet nunc.',
                                    // informacion: el.description,
                                    rating: el.rating,
                                    generos: el.genre,
                                    tiendas: el.tiendas,
                                    etiquetas: el.etiquetas,
                                    plataformas: el.platforms,
                                    precio: el.price ? el.price: '20.55',
                                    requerimientos: el.requeriments_en ? el.requeriments_en :' aqui falta data'
                                    // requerimientos:el.requeriments_en ? el.requeriments_en.map(el=>el.minimum): 'Sin informacion'
                                  })
                    })   
          },
        
        ]}
        renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
          <>   
                <CardHome data={item} navigation={navigation}  
                 ActivityIndicator color={StringsDark.bkContesp} size={"large"}/>
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
const CartButton = ({ navigation }) => {
  const [countBadge, setCountBadge]=useState(0);
  const cartG = useSelector((state) => state.cartState);
  const {  StringsDark } = useContext(ThemeContext);

  useEffect(() => {
    //  console.log("llamdo a CarButton una vez mas", cartG);
    const GetCountItemCart = async () => {
      try {
        const count = await getKeysCount();
        // console.log("Cantidad de claves en AsyncStorage:", count);
        setCountBadge(count)
      } catch (error) {
        console.log("Error al obtener las claves de AsyncStorage:", error);
      }
    }
      GetCountItemCart();
  }, [cartG]);

  // console.log("Cantidad den button:", countBadge);
  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Carrito")}>
        <Text>{countBadge}</Text>
        <MaterialCommunityIcons name="cart" color={StringsDark.bordercolor} size={30} />
        {countBadge > 0 && (
          <Badge  size={25} style={{ position: "absolute",top: 0,right: 17, 
          color:StringsDark.bordercolor, backgroundColor:StringsDark.txtprice }}
          >
            {countBadge}
          </Badge>
        )}
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen =({ navigation, route})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  const prev_videogames= vGames.videoGames_Prev
  const flag_prev= vGames.flag_prev
  const { isDarkMode, StringsDark } = useContext(ThemeContext);
  const {locale,StringsLanguaje }= useContext(LocalizationContext)
  const Stack = createNativeStackNavigator();
  //  const cartG = useSelector((state) => state.cartState);

  useEffect(()=>{
    // console.log("rellamando a cabecera en home x redux");
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Home}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
      headerRight: () => <CartButton navigation={navigation} />, 
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
                  backgroundColor: StringsDark.backgroundTittle,
                },
                headerTintColor: StringsDark.titblanco,
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
  // title: {
  //   color: color_azul,
  //   fontSize:30,
  //   fontWeight:'700',
  //   alignItems: 'center',
    
  // },
 
  image: {
    width: 250,
    height: 300,
    justifyContent: 'center',
    // borderTopEndRadius:8,
    // borderTopStartRadius:8,
    
  }
 
});

export default HomeScreen;