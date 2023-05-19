import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { color_azul, color_gris } from '../../../../constants/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {size} from 'lodash'

const Cart = () => {
    const [Carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        getAllItems()
      },[])

    // Limpiar todos los elementos de AsyncStorage
const cleanCart = async () => {
        console.log('se limpio el carritoP')
    try {
      await AsyncStorage.clear();
      console.log('Elementos eliminados exitosamente');
    } catch (error) {
      console.log('Error al eliminar los elementos:', error);
    }
  };

    // Obtener un objeto desde AsyncStorage
const getAllItems = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const items = await AsyncStorage.multiGet(keys);
          
          const result = items.map(([key, value]) => { 
            //   console.log('Elementos almacenados:', value  );
            return { key, value: JSON.parse(value) };
          });
        setCarrito(result)
        //  console.log('Elementosasigandos :', result[0].value  );
        } catch (error) {
          console.log('Error al obtener los elementos:', error);
        }
  };
    
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Items</Text>
      <View style={styles.cabecera}>
            <Text style={styles.cabeceraItems}>Id</Text>
            <Text style={styles.cabeceraNom}>Item</Text>
            <Text style={styles.cabeceraItems}>Price</Text>
            <Text style={styles.cabeceraItems}>Quantity</Text>
     </View>

           { data=Carrito.map((el) => {
                // console.log("elemento carrito->",el.value.title)
                return (
                    <View style={styles.detalle}>
                        <Text style={styles.detalleITems}>{el.key}</Text>
                        <Text style={styles.detalleNom}>
                            { size(el.value.title) >15 
                            ? `${el.value.title.substr(0,18)}...`
                            : el.value.title
                            }
                        </Text>
                        <Text style={styles.detalleITems}>{el.value.price}</Text>
                        <Text style={styles.detalleITems}>{el.value.quantity}</Text>
                        
                    </View>
                        )
                })
            }
   
        <View style={styles.total}>
            <Text style={styles.totalTit}>Tot</Text>
            <Text style={styles.totalPri}>50.0</Text>
        </View>
        <TouchableOpacity style={styles.botonchkout} onPress={()=>alert("funcionalidad en progreso")}>
            <View style={styles.boton}>
                <Text style={styles.botonText}>Checkout</Text>
            </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.botonchkout} onPress={cleanCart}>
            <View style={styles.boton}>
                <Text style={styles.botonText}>Limpiar Carrito</Text>
            </View>
        </TouchableOpacity> */}
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
        width:'97%',
        marginLeft: '1%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderColor: color_azul,
        borderWidth: 2,
        borderRadius:6,
    },
    cabeceraItems:{
        width: '19%',
        fontSize:18,
        fontWeight:'bold',
        color: color_azul
    },
    cabeceraNom:{
        width: '35%',
        fontSize:20,
        fontWeight:'bold',
        color: color_azul
    },
    detalle:{
        width:'97%',
        marginLeft: '1%',
        // marginTop:'1%',
        marginBottom: '0.5%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        // borderColor: color_azul,
        borderWidth: 1,
        borderRadius:6,
    },detalleITems:{
        width: '25%',
        fontSize:16,
        // backgroundColor:color_azul,
        // justifyContent: 'space-evenly',
        textAlign:'center'
    },
    detalleNom:{
        width: '40%',
        fontSize:16,
        // backgroundColor:color_gris,
        justifyContent:'space-around'
        
    },
    total:{
        flexDirection:'row',
        marginBottom:'50%',
        marginLeft:'50%',
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
        width: '70%',
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
        marginBottom:'50%',
        marginLeft:'50%',
    } 


})
export default Cart