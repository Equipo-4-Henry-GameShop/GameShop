import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {Image} from 'react-native-elements'
import { color_rojoNeon,color_azul, color_blanco, color_rojo, color_negro, color_crema } from '../../../constants/Colors'
import {size} from 'lodash'
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
import React from 'react';


export default function CardHome(data) {
  // console.log("esto llega a card",data.data.screenshoots)
  //esta linea debo de llamar en cada componente 
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
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



  return (
    
    <TouchableOpacity onPress={() => data.navigation.navigate('Detail', {videogame: data.data   })}> 
      <View style={[styles.container, isDarkMode && styles.Darkcontainer]}>
            <View style={styles.viewImageContainer}>
                { data.data.img ? <Image 
                                source={data.data.img} 
                                style={styles.image}
                                PlaceholderContent={<ActivityIndicator color={isDarkMode ? color_blanco :color_azul} size={"large"}/>}
                              /> 
                          : <Image source={require('../../../assets/Unknown.jpg')} /> 
                }
            </View>
            <View style={styles.viewInforContainer}>
                <Text style={[styles.h2, isDarkMode && styles.h2Dark]}>{data.data.nombre}</Text>
                  <View style={styles.viewEstrellas}>
                  {starArr}
                  </View>
                  
                <Text style={[styles.h3, isDarkMode && styles.h3Dark]}>
                   { size(data.data.informacion) >0 
                        ? `${data.data.informacion.substr(0,60)} ...`
                        : data.data.informacion
                      }
                  </Text>
                <Text style={[styles.Precio, isDarkMode && styles.DarkPrecio]}> $ {data.data.precio}</Text>

            </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: color_blanco,
    alignItems: 'center',
    width: '100%',   
    marginBottom: 4,
    marginTop:4 ,
    paddingBottom: 2,
    paddingTop: 2,
  },
  Darkcontainer: {
    flexDirection:'row',
    backgroundColor: color_negro,
    alignItems: 'center',
    width: '100%',   
    marginBottom: 4,
    marginTop:4 ,
  },
  viewImageContainer: {
    alignItems: 'center',
    // flex:1
    width: '50%',
    // marginRight: 10 , 
    marginLeft:8
  },
  viewInforContainer: {
    
    // flex:4,
    marginLeft: 5,
    width: '45%',
  },
  viewEstrellas: {
    flexDirection : 'row'
  },
  image: {
    width: 174,
    height: 200,
    borderRadius:8,   
  },

  h2: {
    fontSize:20 ,
    color:color_azul,
    fontWeight: 'bold'
  },
  h2Dark:{
    fontSize:20 ,
    color:color_blanco,
    fontWeight: 'bold'
  },
  h3:{
    fontSize: 15,
    color: color_negro,
  },
  h3Dark:{
    fontSize: 15,
    color: color_blanco,
  },
  Precio :{
    padding:10,
    fontSize: 30,
    color: color_rojoNeon,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center'
  },
  DarkPrecio :{
    padding:10,
    fontSize: 30,
    color: color_crema,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center'
  },
  
})
