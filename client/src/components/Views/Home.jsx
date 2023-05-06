import { StyleSheet ,TouchableOpacity, Text, View,Button, SectionList, ActivityIndicator} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_neon, color_rojo, color_rojoNeon, color_verdeNeon} from '../../constants/Colors'

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {getvideoGames, setNxtPage,setPrvPage} from "../../redux/videogamesActions"
import CardHome from '../Extras/CardHome';


const HomeScreen =({ navigation, route})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  const pagina=vGames.pagina
  const porPagina= vGames.porPagina
  const maximo=Math.ceil(vGames.videoGames.length/porPagina)
  // console.log(porPagina)
  
  const dispatch= useDispatch();
  useEffect(()=>{
    
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
    <View  style={styles.container}>
      <View style={styles.Navback}>
          {/* <Button
          onPress={PrevPage}
          title="<"

          color= {color_azul}
          
        /> */}
        <TouchableOpacity onPress={PrevPage}>
          < MaterialCommunityIcons name="chevron-back-circle-sharp" size={30}/>
          {/* <ion-icon name="chevron-back-circle-sharp"></ion-icon> */}
        </TouchableOpacity>
        
      </View>
      <View style={styles.List}>
        <SectionList
        // <SectionList 
        sections={[
          {
            title: `Pagina  ${pagina} de  ${maximo}`, 
            data : vGames.videoGames.slice(
                      (pagina-1)*porPagina,
                      (pagina-1)*porPagina+porPagina)
                    .map(el=>{
                      // console.log("elemto sliceado",el)
                    return ({
                                    key: `${el.id}`, 
                                    img: {uri:el.image }, 
                                    nombre:el.nombre ,
                                    fecLan: el.fecLan,
                                    screnshoots: el.screnshoots,
                                    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit risus et felis malesuada, in interdum turpis lacinia. Donec gravida tincidunt mollis. Donec luctus est non iaculis ultricies. In bibendum turpis et odio mollis, ac tincidunt dui efficitur. Vivamus iaculis a eros nec congue. Donec neque metus, blandit condimentum velit nec, eleifend scelerisque tellus. Vestibulum sed pretium dui, quis bibendum dui.',
                                    rating: el.rating,
                                    generos: el.genres,
                                    tiendas: el.tiendas,
                                    etiquetas: el.etiquetas,
                                    plataformas: el.plataformas,
                                    precio: (Math.random() * (100 - 45)).toFixed(2)
                                  })
                    })   
          },
        
        ]}
        renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
          <>  
                <CardHome data={item} navigation={navigation}/>
          </>
        }
        renderSectionHeader={({section}) => <Text style={styles.cabecera}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
              // keyExtractor={(item, index) => index}
        />
        
      </View>
      <View style={styles.NavNext}>
      <TouchableOpacity onPress={NextPage}>
          < MaterialCommunityIcons name="chevron-forward-circle-sharp" size={30}/>
          
        </TouchableOpacity>
      </View>
    </View>
    );

}
const styles = StyleSheet.create({
  container: {

    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: color_blanco,
    alignItems: 'center',
    width: '99%',
    flexDirection: 'row',
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
    color: color_azul,
    fontWeight: 'bold',
    fontSize:25,
    // fontFamily: 'Black Ops One',
    textAlign: 'center',

  }
  ,
  title: {
    color: color_azul,
    fontSize:30,
    fontWeight:'700',
    alignItems: 'center',
    
  },

   h2: {
    color: color_azul,
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight:'600'
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
  buttonText: {
    textAlign: 'center',
    padding: 2,
    fontSize:20,
    fontWeight:'bold',
    color: color_blanco,

  },
  image: {
    width: 250,
    height: 300,
    justifyContent: 'center',
    // borderTopEndRadius:8,
    // borderTopStartRadius:8,
    
  },

 
});

export default HomeScreen;