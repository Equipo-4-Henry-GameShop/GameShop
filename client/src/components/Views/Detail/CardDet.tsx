import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'

let videogametype: {
    key: string;
    img: {
        uri: string;
    };
    nombre: string;
    fecLan: string;
    screenshots: string[];
    informacion: string;
    rating: number;
    generos: string[];
    tiendas: string[];
    etiquetas: string[];
    
}
const Card = (videogame:typeof videogametype) => {
    // console.log("videogameCARD=>",videogame.videogame.img)
    return (
        <View style={styles.container}>
             <Text style={styles.title}>{videogame.videogame.nombre}</Text>
             <Text style={styles.text}>{videogame.videogame.informacion}</Text>              
               
              <View style={styles.imageContenedor}>
                { videogame.videogame.img ? <Image source={videogame.videogame.img} style={styles.image}/> 
                            : <Image source={require('../../../assets/Unknown.jpg')} /> 
                        } 
             </View>
            
        
        <Text style={styles.text}>Rating {videogame.videogame.rating}</Text>
  
        </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: color_crema,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    
    title: {
      color: color_blanco,
      fontSize: 25,
      fontWeight:'700',
      alignItems: 'center',
      alignContent: 'center',
    },
    text: {
        color: color_blanco,
        fontSize: 30,
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
        flex:1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color_blanco,
      borderRadius: 8,
    },
    imageContenedor: {
        // flex:1,
        width: '75%',
        height: '55%',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: color_negro,
        padding:0,
        marginTop:20,
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
  
  export default Card;