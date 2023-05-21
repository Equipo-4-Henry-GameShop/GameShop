import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {Image} from 'react-native-elements'
import {size} from 'lodash'
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import React, { useContext} from 'react';
import { InsertarItem } from '../Forms/Cart/CardCartController';
import { useDispatch } from "react-redux";
import { updateCart } from '../../../redux/cartSlice';
export default function CardHome(data) {

  const dispatch = useDispatch();
  // console.log("esto llega a card",data.data.screenshoots)
      //linea para setear el lenguaje /obtener palabras de lenguaje
  const {  StringsDark,isDarkMode} = useContext(ThemeContext);
  const {StringsLanguaje ,locale}= useContext(LocalizationContext)

  function estrellitas(index) {
    return <Image source={require('../../../assets/star.png')} key={index} style={{width: 15, height: 15, }}/>
  }  
  
  //con esta fraccion de codigo redondeo el valor de rating y creo n estrellas de dibujo
  let starArr = [];
  let starcount=data.data.length ===0  
         ?  "undefined" 
         : data.data.rating
  starcount=Math.round(starcount)
  // console.log("conteo de estrellas ", starcount)
  for (let index = 0; index < starcount; index++) {
    starArr.push(estrellitas(index))
  }      

  let objeto={
    id:data.data.key,
    title:data.data.nombre ,//.replace(/\s/g, ''),
    price:data.data.precio,
    img: data.data.img,
    amount:1
  }
  const objString = JSON.stringify(objeto);
  const key= data.data.key

  return (
    
    <View style={[styles.container, {backgroundColor:StringsDark.bkCard}]}> 
            <View style={styles.viewImageContainer}>
              <TouchableOpacity onPress={() => data.navigation.navigate('Detail', {videogame: data.data   })}>
                  { data.data.img ? <Image 
                                  source={data.data.img} 
                                  style={styles.image}
                                  PlaceholderContent={<ActivityIndicator color={StringsDark.bkContesp} size={"large"}/>}
                                  /> 
                                  : <Image source={require('../../../assets/Unknown.jpg')} /> 
                  }
                
              </TouchableOpacity>
            </View>
            <View style={styles.viewInforContainer}>
        <TouchableOpacity onPress={() => data.navigation.navigate('Detail', {videogame: data.data   })}> 
                <Text style={[styles.h2, {color:StringsDark.bkContesp}]}>{data.data.nombre}</Text>
                  <View style={styles.viewEstrellas}>
                  {starArr}
                  </View>
                  
                <Text style={[styles.h3,  {color:StringsDark.text}]}>
                   { size(data.data.informacion) >0 
                        ? `${data.data.informacion.substr(0,60)} ...`
                        : data.data.informacion
                      }
                  </Text>
                <Text style={[styles.Precio, {color:StringsDark.txtprice}]}> $ {data.data.precio}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            InsertarItem(key, objString);
            dispatch(updateCart());
            // getKeysCount();
          }}>
            <View style={[styles.AddCartContainer,{backgroundColor:StringsDark.txtprice}]}>
              <Text style={[styles.addItemCar,{color:StringsDark.srchBartxt}]}>{StringsLanguaje.addItemCar}
              </Text>

            </View>
        </TouchableOpacity>

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    width: '100%',   
    marginBottom: 4,
    marginTop:4 ,
    paddingBottom: 2,
    paddingTop: 2,
    borderRadius:5,
    backgroundColor:'yellow',
  },

  viewImageContainer: {
    alignItems: 'center',
    // flex:1
     width: '46%',
      height: '100%',
    // marginRight: 10 , 
    marginLeft:1,
    // backgroundColor:'blue'

  },
  viewInforContainer: {

    //  marginLeft: 1,
    width: '54%',
    height:'100%',
    // alignContent:'center',
    alignItems:'center'
    // margin:2,
  },

  image: {
    marginTop:5,
    width: 150,
    height: 160,
    borderRadius:8,   
    // alignSelf:'center',
    alignContent:'center',
    resizeMode: 'cover',
  },
  AddCartContainer:{
    alignContent:'center',
    borderRadius:8,
    alignItems:'center',
    width:'84%',
    // textAlign:'center'
  },
  addItemCar:{
    margin:2,
    marginLeft:10,
    textAlign:'center',
    fontWeight: '700',
    fontSize:15,

  },
  viewEstrellas: {
    flexDirection : 'row'
  },
 

  h2: {
    fontSize:20 ,
    textAlign:'center',
    fontWeight: 'bold',
  },

  h3:{
    fontSize: 15,
    // textAlign:'center',
    
  },
  Precio :{
    paddingTop:1,
    paddingBottom:3,
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center'
  },

  
})
