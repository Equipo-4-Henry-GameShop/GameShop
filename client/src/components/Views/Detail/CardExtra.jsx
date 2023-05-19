import { StyleSheet ,Image, Text, View, Button,SectionList} from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import React from 'react';


const CardExtra = (videogame) => {

  const { StringsDark} = React.useContext(ThemeContext);
  const {StringsLanguaje }= React.useContext(LocalizationContext)
    // console.log("extra requerimientos", videogame.videogame.requerimientos)
    // let data=Object.entries(videogame.videogame.requerimientos)
    // console.log("data-->",videogame.videogame.requerimientos[0].minimum);
    return (
 
        <View  style={[styles.container,{backgroundColor:StringsDark.bkCard}]}>
          <Text style={[styles.reqtitle, {color:StringsDark.txtprice}]}> {StringsLanguaje.Minimum_requirements}</Text>
        {/* <WebView style={styles.req} >{videogame.videogame.requerimientos[0].minimum}</WebView> */}

         <SectionList
        // <SectionList 
        sections={[

          // {
          //   title: 'Requisitos', 
          //   data: data
          // },
          {
            title: StringsLanguaje.Genres, 
            data: videogame.videogame.generos.map( (el)=> {
                      return (  {
                         key: `${el}`,      nombre:el,
                        }
                      )})
          },
          {
            title: StringsLanguaje.Plataformas, 
            data: videogame.videogame.plataformas.map( (el)=> {
                     return (  {
                        key: `${el}`,      nombre:el,
                     }
                    )})
          },
           
          
         
        ]}
        renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
          <>
              <View>
                <Text style={[styles.text,{color:StringsDark.text}]}>
                    <MaterialCommunityIcons name="pricetag-outline"  /> 
                    {item.nombre}</Text>
                 {/* { item.img ? <Image source={item.img} style={styles.image}/> 
                        : <Image source={require('../../assets/Unknown.jpg')} /> 
                }   */}
              </View>
              </>
              }
        renderSectionHeader={({section}) => <Text style={[styles.title,{color: StringsDark.txtClaro}]}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
              // keyExtractor={(item, index) => index}
        />
        </View> 
        );
  };
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'space-between',
      // backgroundColor: color_gris,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    
    title: {
      // color: color_rojoNeon,
      fontSize: 25,
      fontWeight:'700',
      alignItems: 'center',
      alignContent: 'center',
      
      fontWeight: '800'
    },
    text: {
      // color: color_azul,
      fontSize: 18,
      marginTop: 8,
      fontWeight: '800'
      },

    reqtitle:{
      fontSize: 25,
      fontWeight:'bold',
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    req:{
        fontSize:20,
    },
   
  });
  
  export default CardExtra;