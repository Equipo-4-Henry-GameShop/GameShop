

import {View,Text,StyleSheet, Image,Dimensions,SafeAreaView,Animated} from 'react-native'

import {LinearGradient} from "expo-linear-gradient";
import { ThemeContext } from '../../Theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import React from 'react';

const width= Dimensions.get("window").width;
const height= Dimensions.get("window").height;
const contenedor= width* .7;
const espacio=10;
const espacio_lateral=(width-contenedor)/2;
const altura_backDrop= height* 0.5;

function BackDrop(scrollX){
// console.log("data en BrackDrop -->", scrollX.scrollX)
//nota le envio dos variables pero solo me la reconoce en la primera props
const {  StringsDark} = React.useContext(ThemeContext);
const {StringsLanguaje }= React.useContext(LocalizationContext)
  return (
    <View style={([{height:altura_backDrop,
                width,
                position: "absolute", top:0}],
                StyleSheet.absoluteFillObject)  
              }
    >
      {scrollX.info.map((imagen ,index )=>{
        // console.log("esto esta dentro de scroll X info",imagen)
        const inputRange=[
          (index - 1) * contenedor,
          index * contenedor,
          (index + 1) * contenedor,
        ];
       
        const outputRange=[0,1,0];
        const  opacity= scrollX.scrollX.interpolate({
          inputRange,
          outputRange,
        });
        return(
            <Animated.Image source={{uri: imagen}} 
                      key={index}
                      // blurRadius={1}//esto le quita nitidez a la imagen de fondo
                      style={[{
                        height:altura_backDrop,
                        width,
                        position: "absolute",
                        top:0,//estaba en cero
                        opacity,
                        borderColor: StringsDark.borderColor,
                        
                      }]}
            />
        )})
      }
      <LinearGradient 
        colors={["transparent", "white"]}
        style={{height: altura_backDrop,width,
                position:"absolute", top:0}}
      />
    </View>    
)}

export default function Carrousel(data) {
// console.log("Data-->",data.data)
const {  StringsDark} = React.useContext(ThemeContext);
const {StringsLanguaje }= React.useContext(LocalizationContext)

  const scrollX= React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: StringsDark.bkCard}]}>
     <BackDrop info={data.data} scrollX={scrollX} />

      <Animated.FlatList 
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset:{x:scrollX }}}],
          {useNativeDriver :true}
        )}
        data={data.data.map( (el,index)=> {
        // console.log("estes es el map de imagenes",el)
            return (
              {
                key: `${index}`, 
                img: el, 
              }
            )})
            }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop:200,
            paddingHorizontal:espacio_lateral,
                              }} 
        decelerationRate={0}
        snapToInterval={contenedor} 
        scrollEventThrottle={16}
        // keyExtractor={(item)=>item}
        renderItem={({item,index})=>{
         
          const inputRange=[
            (index - 1) * contenedor,
            index * contenedor,
            (index + 1) * contenedor,
          ];
         
          const outputRange=[0,-50,0];
          const  translateY= scrollX.interpolate({
            inputRange,
            outputRange,
          });
          
          return( 
            <View style={{width: contenedor}}>
              <Animated.View style={{
                marginHorizontal: espacio,
                borderRadius:34,
                backgroundColor: StringsDark.tabActive,
                alignItems: "center",
                transform: [{translateY}]
                }}>
                <Image source={{uri:item.img}} 
                        style={styles.posterImage}
                        />
                <Text style={[styles.name,{color:StringsDark.txtprice}]}>{StringsLanguaje.Capture}({Number(item.key)+1})</Text>
               </Animated.View> 
            </View> 
            )
        }}
      
      />

    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: color_blanco,
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage:{
    width: '100%',
    height: contenedor*1.2,
    position: 'relative',
    resizeMode: "cover",
    margin:0,
    borderRadius: 24,
    marginBottom:10
    
  },
  name:{
    // color:'red',
    fontWeight: 'bold'
  }
});