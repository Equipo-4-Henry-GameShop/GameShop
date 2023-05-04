import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../constants/Colors'

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {getvideoGames} from "../../redux/videogamesActions"




const HomeScreen =({ navigation, route})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  // console.log("vgames de  selector", vGames);
  
  const dispatch= useDispatch();
  useEffect(()=>{
    console.log("entro aqui?")
    dispatch(getvideoGames()) ;
  },[])


  

  return (
    <View  style={styles.container}>
    <SectionList
    // <SectionList 
    sections={[
      {
        title: 'Videojuegos Parte 1', 
        data: vGames.videoGames.map( (el)=> {
                  return (
                    {
                      key: `${el.id}`, 
                      img: {uri:el.image }, 
                      nombre:el.nombre ,
                      fecLan: el.fecLan,
                      screnshoots: el.screnshoots,
                      informacion: 'ipsom lupsum',
                      rating: el.rating,
                      generos: el.genres,
                      tiendas: el.tiendas,
                      etiquetas: el.etiquetas,
                      plataformas: el.plataformas,
                      precio: Math.random() * (60 - 25)
                    }
                  )})
      },
     
    ]}
    renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
      <>
          <View>
            <Text style={styles.h2}>{item.nombre}</Text>
            { item.img ? <Image source={item.img} style={styles.image}/> 
                      : <Image source={require('../../assets/Unknown.jpg')} /> 
            }
            <Button 
              
              title={"Ver Detalle"}
              onPress={() =>
              // navigation.navigate('Detail', { name: item.nombre , id: item.key })
              
              navigation.navigate('Detail', { 
                                             videogame: item , 
                                            //   nombre:item.nombre, 
                                            // // rating: item.rating,
                                            // // screnshoots: item.screnshoots,
                                            // imagen: item.imagen
                                          })
              }
              /> 
          </View>
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
    backgroundColor: color_negro,
    alignItems: 'center',
    width: '100%',
  },
  
  title: {
    color: color_naranja,
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
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
    alignItems: 'center',
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
    width: 250,
    height: 300,
    justifyContent: 'center',
    borderRadius: 8,
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

export default HomeScreen;