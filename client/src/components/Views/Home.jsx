import { StyleSheet ,TouchableOpacity, Text, View, SectionList, ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements'
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../constants/Colors'

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {getvideoGames} from "../../redux/videogamesActions"
import CardHome from '../Extras/CardHome';

const HomeScreen =({ navigation, route})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  // console.log("vgames de  selector", vGames);
  
  const dispatch= useDispatch();
  useEffect(()=>{
    
    dispatch(getvideoGames()) ;
  },[])



  return (
    <View  style={styles.container}>
    <SectionList
    // <SectionList 
    sections={[
      {
        // title: 'Videojuegos Parte 1', 
        data: vGames.videoGames.map( (el)=> {
                  return (
                    {
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
                    }
                  )})
      },
     
    ]}
    renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
      <>  
          <CardHome data={item} navigation={navigation}/>
          
      </>
    }
    renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
          // keyExtractor={(item, index) => index}
    />
    </View>
    );

}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: color_blanco,
    alignItems: 'center',
    width: '100%',
  },
  
  title: {
    color: color_azul,
    fontSize:30,
    fontWeight:'700',
    alignItems: 'center',
    
  },
  separator: {
    marginVertical: 30,
    height: 5,
    width: '80%',
    color: color_blanco
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