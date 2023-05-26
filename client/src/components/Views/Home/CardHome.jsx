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
    return <Image source={require('../../../assets/star.png')} key={index} style={{width: 13, height: 13, }}/>
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
  
  const key='cart'+ data.data.key
  // console.log("generado clave cart",key)

  return (
    // <View style={styles.container}> 
 <View style={[styles.container, {backgroundColor:StringsDark.bkCard, shadowColor:StringsDark.text}]}>  
            
            <View style={styles.viewImageContainer}>
              <TouchableOpacity onPress={() => data.navigation.navigate('Detail', {videogame: data.data   })}>
                  <View>

                  { data.data.img ? <Image 
                                  source={data.data.img} 
                                  style={styles.image}
                                  PlaceholderContent={<ActivityIndicator color={StringsDark.bkContesp} size={"large"}/>}
                                  /> 
                                  : <Image source={require('../../../assets/Unknown.jpg')} /> 
                  }
                  
                                </View>
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
    padding: 3,
    flexDirection:'row',
    justifyContent:'space-around',
    width: '93%',   
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    // shadowColor: 'black',
    shadowOpacity: 0.23,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },

  viewImageContainer: {
    alignItems: 'center',
    // flex:1
     width: '45%',
      // height: '100%',
    // marginRight: 10 , 
    marginLeft:5,
    // backgroundColor:'blue'

  },
  viewInforContainer: {

    //  marginLeft: 1,
    width: '50%',
    // height:'100%',
    // alignContent:'center',
    alignItems:'center',
    // margin:2,
    // backgroundColor:'orange'
  },

  image: {
    marginTop:10,
    marginBottom:10,
    // marginLeft: -10,
    width: 120,
    height: 140,
    borderRadius:8,   
    // alignSelf:'center',
    alignContent:'center',
    resizeMode: 'cover',
    // backgroundColor:'green'
  },
  AddCartContainer:{
    alignContent:'center',
    borderRadius:8,
    alignItems:'center',
    width:'84%',
    // textAlign:'center'
  },
  addItemCar:{
    margin:7,
    // marginLeft:10,
    textAlign:'center',
    fontWeight: '700',
    fontSize:12,
    width:105,
    // backgroundColor:'white'
  },
  viewEstrellas: {
    flexDirection : 'row',
    alignSelf:'center',
    height: 12,
    // backgroundColor:'green'
  },
 

  h2: {
    fontSize:15 ,
    alignContent:'center',
    alignItems:'center',
    textAlign:'center',
    verticalAlign:'middle',
    fontWeight: 'bold',
    height: 37,
    // backgroundColor:'red',
    // width:'50%',
  },

  h3:{
    fontSize: 12,
    height:45,
    // textAlign:'center',
    // backgroundColor:'green'
  },
  Precio :{
    // paddingTop:1,
    // paddingBottom:1,
    fontSize: 20,
    textAlign:'center',
    // verticalAlign:'middle',
    fontWeight: 'bold',
    // alignItems: 'center',
    // alignContent: 'center'
    //  backgroundColor:'cyan',
    height:25
  },

  
})