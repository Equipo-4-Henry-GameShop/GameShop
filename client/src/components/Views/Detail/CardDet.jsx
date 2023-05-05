import { StyleSheet ,Image, Text, View, Button,SectionList, ActivityIndicator} from 'react-native';
// import {Image} from 'react-native-elements'
import {color_blanco, color_azul, color_gris, color_naranja, color_naranja_claro, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'


const Card = (videogame) => {
    // console.log("videogameCARD=>",videogame.videogame.img)
    function estrellitas(index) {
        // console.log("entro una estreilla");
        return <Image source={require('../../../assets/star.png')} 
                      key={index} style={{width: '7%', height: '100%'}}
                      // PlaceholderContent={<ActivityIndicator color={color_azul}/>}
                      />
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
                { videogame.videogame.img ? <Image source={videogame.videogame.img} 
                                                  style={styles.image}
                                                  // PlaceholderContent={<ActivityIndicator color={color_azul}/>}
                                                  /> 
                                          : <Image source={require('../../../assets/Unknown.jpg')} /> 
                        } 
             </View>
            
        <Text style={styles.txtprecio}>$ {videogame.videogame.precio}</Text>
        <Text style={styles.txtfeclan}>Lanzamiento: {videogame.videogame.fecLan}</Text>
        <Text style={styles.txxtRat}>Rating: {videogame.videogame.rating}</Text>
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
      backgroundColor: color_gris,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    
    title: {
      color: color_rojoNeon,
      fontSize: 25,
      fontWeight:'700',
      alignItems: 'center',
      alignContent: 'center',
    },
    text: {
        color: color_negro,
        fontSize: 15,
        fontWeight:'700',
        textAlign: 'justify'
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
        height: '45%',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: color_negro,
        padding:0,
        marginTop:10,
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
    },
    txtfeclan:{
      color: color_naranja_claro,
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'justify'
    },
    txtprecio:{
      color: color_naranja_claro,
      fontSize: 35,
      fontWeight:'bold',
      textAlign: 'justify'
    },
    txxtRat:{
      color: color_naranja_claro,
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'justify'
    }
   
  });
  
  export default Card;