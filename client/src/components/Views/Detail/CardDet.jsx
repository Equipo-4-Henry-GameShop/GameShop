import { StyleSheet ,Image, Text, View, Button,SectionList} from 'react-native';

import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'


const Card = (videogame) => {
    // console.log("videogameCARD=>",videogame.videogame.img)
    function estrellitas(index) {
        // console.log("entro una estreilla");
        return <Image source={require('../../../assets/star.png')} key={index} style={{width: '7%', height: '100%'}}/>
    }  
   
    //con esta fraccion de codigo redondeo el valor de rating y creo n estrellas de dibujo
    let starArr = [];
    let starcount=videogame.videogame.length ===0  
             ?  "undefined" 
             : videogame.videogame.rating
    starcount=Math.round(starcount)
    // console.log("conteo de estrellas ", starcount)
    for (let index = 0; index < starcount; index++) {
        starArr.push(estrellitas(index))
      }      



    return (
        <View style={styles.container}>
             <Text style={styles.title}>{videogame.videogame.nombre}</Text>
             <Text style={styles.text}>{videogame.videogame.informacion}</Text>              
               
              <View style={styles.imageContenedor}>
                { videogame.videogame.img ? <Image source={videogame.videogame.img} style={styles.image}/> 
                            : <Image source={require('../../../assets/Unknown.jpg')} /> 
                        } 
             </View>
            
        <Text style={styles.text}>Fecha de Lanzamiento: {videogame.videogame.fecLan}</Text>
        <Text style={styles.text}>Rating: {videogame.videogame.rating}</Text>
        <View style={styles.estrella}>
            {starArr}
        </View>
  
        </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: color_naranja,
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
        fontSize: 20,
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
    estrella:{
   
        flexDirection:'row',
        height:25,
     
        gap:0,
        margin:5,
        alignItems:'center',
        alignContent: 'center',
    //    backgroundColor:color_gris,
       padding:1
    }
   
  });
  
  export default Card;