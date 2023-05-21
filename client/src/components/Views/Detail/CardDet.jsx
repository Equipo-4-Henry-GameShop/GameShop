import { StyleSheet ,Text, Image,View,SectionList, ActivityIndicator, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import React from 'react';
import { InsertarItem } from '../Forms/Cart/CardCartController';
import { useDispatch } from "react-redux";
import { updateCart } from '../../../redux/cartSlice';

const Card = (videogame) => {
    // console.log("videogameCARD=>",videogame.videogame.img)
    const {  StringsDark} = React.useContext(ThemeContext);
    const {StringsLanguaje }= React.useContext(LocalizationContext)
    const dispatch = useDispatch();
    function estrellitas(index) {
        // console.log("entro una estreilla");
        return <Image source={require('../../../assets/star.png')} 
                      key={index} style={{width: 25, height: 25}}
                      PlaceholderContent={<ActivityIndicator color={StringsDark.text}/>}
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
      
      let objeto={
        id:videogame.videogame.key,
        title:videogame.videogame.nombre ,//.replace(/\s/g, ''),
        price:videogame.videogame.precio,
        img: videogame.videogame.img,
        amount:1
      }
      const objString = JSON.stringify(objeto);
      const key= 'cart'+videogame.videogame.key
      // console.log("generado clave cart",key)
      // console.log("objeto      ñ",objeto)
      //  console.log("objeto String",objString)  
      
    return (
      <View  style={[styles.container, {backgroundColor:StringsDark.bkCard}]}>

         <TouchableOpacity style={styles.botonFlotPos} onPress={()=>{
                      InsertarItem(key,objString)
                      dispatch(updateCart())
                                                            }}> 
            <View style={[styles.botonFlotFondo,{backgroundColor: StringsDark.botFlot}]}>
              <MaterialCommunityIcons  name="add-circle" size={20} style={styles.botonplus} 
              color={StringsDark.titblanco}/>
              {/* <Text style={styles.botonFlotText}>Agregar al carro</Text> */}
              <MaterialCommunityIcons  name="cart" size={50} style={styles.botonCar}
               color={StringsDark.titblanco}/>
            </View>        
          </TouchableOpacity>
              <SectionList
              sections={[
              {
                title: `${videogame.videogame.nombre}`, 
                data: [ videogame.videogame]
              },
              
              
            ]}
            renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
            
                  <View>        
                      <Text style={[styles.text, {color:StringsDark.bkContesp}]}>
                              {item.informacion}
                      </Text>
                      <View style={styles.imageContenedor}>
                              <Image source={item.img} 
                                      style={[styles.image,{borderColor : StringsDark.bordercolor}]}
                        //  PlaceholderContent={<ActivityIndicator color={color_azul}/>}
                              /> 
                      </View>
                          <Text style={[styles.Ranktitle,{color:StringsDark.txtprice}]}> {StringsLanguaje.Ranking}: 
                          <Text style={[styles.Ranktext, {color:StringsDark.bkContesp}]}>     {item.rating} </Text>
                          </Text>    
                      <View style={styles.estrella}>
                                {starArr}
                      </View>   
                      <Text style={[styles.precio, {color: StringsDark.txtprice}]}>
                        $ {item.precio}
                      </Text>

                      <View style={[styles.containerfecha, {backgroundColor:StringsDark.fondonegro}]}>
                        <Text style={[styles.titleFec, {color:StringsDark.tint}]}>
                              {StringsLanguaje.Release}
                        </Text>   
                        <Text style={[styles.txtFec, {color: StringsDark.letraverde}]}>
                                  {item.fecLan}
                        </Text>
                      </View>  
                  </View>
                  
                  
                  }
            renderSectionHeader={({section}) => <Text style={[styles.title,{color:StringsDark.txtprice}]}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
                  // keyExtractor={(item, index) => index}
            />
            </View> 
     );
};
const styles = StyleSheet.create({
 container: {
   justifyContent: 'space-between',
  //  backgroundColor: color_blanco,
   alignItems: 'center',
   width: '100%',
   height: '100%',
 },
 
 title: {
  //  color: color_rojoNeon,
   fontSize: 25,
   fontWeight:'bold',
   alignItems: 'center',
   alignContent: 'center',
   textAlign: 'center',
   fontWeight: 'bold'
 },
 text: {
    //  color: color_azul,
   fontSize: 18,
   marginTop: 8,
   fontWeight: '800',
   textAlign: 'justify',
   margin:8,
  //  backgroundColor:'green',
   paddingLeft: '5%',
   paddingRight: '5%',
   },

 image: {
   width: 350,
   height: 350,
   justifyContent: 'center',
   alignItems: 'center',
  //  backgroundColor: color_rojo,
   borderRadius: 8,
  //  borderColor :color_naranja_claro,
   borderWidth:0.2,
 },
 imageContenedor: {
    alignItems: 'center',
     marginTop:2,
   },
 
 estrella:{

     flexDirection:'row',
     gap:0,
     margin:5,
    paddingLeft: 120,
    paddingRight: 120,
 },
 precio :{
  padding:10,
  fontSize: 35,
  // color: color_rojoNeon,
  fontWeight: 'bold',
  // alignItems: 'center',
  // alignContent: 'center',
  textAlign: 'center',
  

},
Ranktitle:{
 fontSize: 30,
  // color: color_crema,
  fontWeight: 'bold',
  textAlign: 'center',
},
Ranktext:{
 fontSize: 30,
 fontWeight: 'bold',
//  color: color_azul,
 textAlign: 'center',
},
containerfecha:{
  marginLeft: '25%',
  // marginRight: 20,
  width: '50%',
  // height:200,
  borderRadius: 10,
  // backgroundColor: color_negro,
  // flexDirection: 'column',
   justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
   opacity: 0.81,
   marginBottom: 10,
},
titleFec:{
//  color: color_blanco,
  fontSize: 17,
  textAlign: 'center',
  fontWeight: 'bold',
},
txtFec:{
  // color: color_verdeNeon,
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center'
},
botonFlotPos:{
  bottom: 40,
  position:'absolute',
  left: 10,
  zIndex: 3

},
botonFlotFondo:{
  // backgroundColor: color_rojoNeon,
  flexDirection:'row',
  width: 60,
  height:60, 
  borderRadius: 100,
  justifyContent: 'center',
  alignContent: 'center',
  alignSelf:'center',
  alignItems:'center'

},
botonCar:{
  fontSize:40,
  // color:color_blanco,
  fontWeight: 'bold',
  alignSelf:'center'
},
botonplus:{
  fontSize:25,
  // color:color_blanco,
  fontWeight: 'bold',
  alignSelf:'flex-start'
}

});
  
  export default Card;