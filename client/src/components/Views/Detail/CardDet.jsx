import { StyleSheet ,Text, Image,View,SectionList, ActivityIndicator} from 'react-native';

import {color_blanco, color_azul, color_gris, color_naranja, color_naranja_claro, color_negro, color_rojo, color_rojoNeon, color_verdeNeon, color_crema} from '../../../constants/Colors'


const Card = (videogame) => {
    // console.log("videogameCARD=>",videogame.videogame.img)
    function estrellitas(index) {
        // console.log("entro una estreilla");
        return <Image source={require('../../../assets/star.png')} 
                      key={index} style={{width: 25, height: 25}}
                      PlaceholderContent={<ActivityIndicator color={color_azul}/>}
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
      <View  style={styles.container}>
      <SectionList
     // <SectionList 
     sections={[
       {
         title: `${videogame.videogame.nombre}`, 
         data: [ videogame.videogame]
       },
       
      
     ]}
     renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
     
           <View>        
              <Text style={styles.text}>
                      {item.informacion}
              </Text>
              <View style={styles.imageContenedor}>
                      <Image source={item.img} 
                              style={styles.image}
                //  PlaceholderContent={<ActivityIndicator color={color_azul}/>}
                      /> 
              </View>
                  <Text style={styles.Ranktitle}> Ranking: <Text style={styles.Ranktext}>     {item.rating} </Text></Text>    
              <View style={styles.estrella}>
                        {starArr}
              </View>   
              <Text style={styles.precio}>
                $ {item.precio}
              </Text>
              <View style={styles.containerfecha}>
                <Text style={styles.titleFec}>
                       Fecha de Lanzamiento &nbsp; 
                       <Text style={styles.txtFec}>
                          {item.fecLan}
                        </Text> 

                </Text>
              </View>  
           </View>
           
          
           }
     renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
           // keyExtractor={(item, index) => index}
     />
     </View> 
     );
};
const styles = StyleSheet.create({
 container: {

  //  flex: 1,
   justifyContent: 'space-between',
   backgroundColor: color_blanco,
   alignItems: 'center',
   width: '100%',
   height: '100%',
 },
 
 title: {
   color: color_rojoNeon,
   fontSize: 25,
   fontWeight:'bold',
   alignItems: 'center',
   alignContent: 'center',
   textAlign: 'center',
   fontWeight: '800'
 },
 text: {
     color: color_azul,
   fontSize: 18,
   marginTop: 8,
   fontWeight: '800',
   textAlign: 'justify',
   margin:8,

   },

 image: {
    //  flex:1,
   width: 350,
   height: 350,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: color_blanco,
   borderRadius: 8,
   borderColor :color_naranja_claro,
   borderWidth:0.2,
 },
 imageContenedor: {

    alignItems: 'center',

     marginTop:2,
   },
 
 estrella:{

     flexDirection:'row',
    //  height:35,
    // alignItems: 'center',
     gap:0,
     margin:5,
    //  alignItems: 'center',
    // alignContent: 'center',
//  backgroundColor:color_rojoNeon,
    paddingLeft: 120,
    paddingRight: 120,
 },
 precio :{
  padding:10,
  fontSize: 35,
  color: color_rojoNeon,
  fontWeight: 'bold',
  // alignItems: 'center',
  // alignContent: 'center',
  textAlign: 'center',
  

},
Ranktitle:{
 fontSize: 30,
  color: color_crema,
  fontWeight: 'bold',
  textAlign: 'center',
},
Ranktext:{
 fontSize: 25,
 fontWeight: 'bold',
 color: color_azul,
 textAlign: 'center',
},
containerfecha:{
  marginLeft: 35,
  marginRight: 20,
  width: 300,
  // height:200,
  borderRadius: 10,
  backgroundColor: color_negro,
  flexDirection: 'row',
   justifyContent: 'center',
    alignItems: 'center',
   opacity: 0.81,
   marginBottom: 10,
},
titleFec:{
 color: color_blanco,
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
},
txtFec:{
  color: color_verdeNeon,
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center'
}
});
  
  export default Card;