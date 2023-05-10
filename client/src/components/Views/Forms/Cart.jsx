import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { color_azul, color_gris } from '../../../constants/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
const Cart = (dataCarrito) => {
    const dispatch= useDispatch();
    const vGames=useSelector((state)=>state.videogamesState)
    let data
    useEffect(() => {
        // Guardar un valor en AsyncStorage
        // AsyncStorage.setItem('miClave', 'miValor');
    
        // Obtener el valor de AsyncStorage
        AsyncStorage.getItem('vgame').then((valor) => {
          console.log(valor); // Imprime 'miValor'
          data=valor
        });
    
        // // Eliminar un valor de AsyncStorage
        // AsyncStorage.removeItem('miClave');
      }, []);

      let rsult= vGames.videoGames.find(el=> el.id===data)
      console.log("este es el dato encontrado",rsult)

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Items</Text>
      <View style={styles.cabecera}>
            <Text style={styles.cabeceraId}>Id</Text>
            <Text style={styles.cabeceraNom}>Number</Text>
            <Text style={styles.cabeceraPre}>Price</Text>
     </View>
      <FlatList style={styles.Listadetalle}

        data={[
          {key: '1245',nombre: 'Uno',precio: 50},
          {key: '12',nombre: 'Uno',precio: 250},
          {key: '11',nombre: 'Uno',precio: 150},
          
        ]}
        renderItem={({item}) => 
          <>
          <View style={styles.detalle}>
            <Text style={styles.detalleId}>{item.key}</Text>
            <Text style={styles.detalleNom}>{item.nombre}</Text>
            <Text style={styles.detallePre}>{item.precio}</Text>
          </View>
          </>
        }
        />
        <View style={styles.total}>
            <Text style={styles.totalTit}>Tot</Text>
            <Text style={styles.totalPri}>50.0</Text>
        </View>
        <TouchableOpacity style={styles.botonchkout} onPress={()=>alert("funcionalidad en progreso")}>
            <View style={styles.boton}>
                <Text style={styles.botonText}>Checkout</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
    flex: 1,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    items:{

    },
    cabecera:{
        margin:1,
        width:'90%',
        marginLeft: 10,
        flexDirection:'row',
        alignContent: 'center',
        borderColor: color_azul,
        borderWidth: 2,
        borderRadius:8,
    },
    cabeceraId:{
        marginLeft: 5,
        fontSize:20,
        fontWeight:'bold',
        color: color_azul
    },
    cabeceraNom:{
        marginLeft: 70,
        fontSize:20,
        fontWeight:'bold',
        color: color_azul
    },
    cabeceraPre:{
        marginLeft: 110,
        fontSize:20,
        fontWeight:'bold',
        color: color_azul
    },
    Listadetalle:{
    },
    detalle:{

        margin:0.5,
        width:'90%',
        marginLeft: 10,
        flexDirection:'row',
        borderColor: color_azul,
        borderWidth: 1,
        borderRadius:8,
    },detalleId:{
        // position:'absolute',
        marginLeft: 10,
        fontSize:16
    },
    detalleNom:{
        position:'absolute',
        marginLeft: 5,
        left:100,
        fontSize:16
    },
    detallePre:{
        position:'absolute',
        marginLeft: 5,
        left:280,
        fontSize:16
    },
    total:{
        flexDirection:'row',
        marginBottom:250,
        marginLeft:200,
        backgroundColor: color_gris,
        borderRadius:8,
        width:150,
    },
    totalTit:{
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold' 
    },
    totalPri:{
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    boton:{
        width: 150,
        backgroundColor:color_azul,
        borderRadius:8
    },
    botonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold',
        alignContent: 'center'
    },
    botonchkout: {
        marginBottom:250,
        marginLeft:120,
    } 


})
export default Cart