import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"

import { Alert } from 'react-native'




// Agregar cantidad de item en AsyncStorage
export const amountAdd = async (key, newValue) => {
    try {
        // Obtener el valor actual del item
        // console.log("cantida enviada", newValue)
        const currentValue = await AsyncStorage.getItem(key);
        if (currentValue !== null) {
          if (newValue===3){
              alert("Lo Sentimos el numero maximo de compras por titulo es 3.")
          }else{
            const parsedValue = JSON.parse(currentValue);
            parsedValue.amount = newValue+1; // Aquí puedes realizar las modificaciones necesarias en el valor
            // Convertir el objeto modificado a una cadena de texto
            const updatedValue = JSON.stringify(parsedValue);
            await AsyncStorage.setItem(key, updatedValue);
            // dispatch(updateCart());
            
            console.log('Item modificado exitosamente');
          } 
        } else {
          console.log('No se encontró un item para la clave especificada');
        }
      } catch (error) {
        console.log('Error al modificar el item:', error);
      }
    };
// Agregar cantidad de item en AsyncStorage
export const amountSub = async (key, newValue) => {
    try {
        // Obtener el valor actual del item
        const currentValue = await AsyncStorage.getItem(key);
        if (currentValue !== null) {
          // Analizar el valor obtenido para convertirlo en un objeto
          const parsedValue = JSON.parse(currentValue);
          console.log("newValie",newValue)
              parsedValue.amount = newValue-1; // Aquí puedes realizar las modificaciones necesarias en el valor
              // Convertir el objeto modificado a una cadena de texto
              const updatedValue = JSON.stringify(parsedValue);
        
              // Guardar la cadena de texto actualizada en AsyncStorage
              await AsyncStorage.setItem(key, updatedValue);
              console.log('Item modificado exitosamente');
          
        } else {
          console.log('No se encontró un item para la clave especificada');
        }
      } catch (error) {
        console.log('Error al modificar el item:', error);
      }
    };


    // Eliminar una clave de AsyncStorage
export const removeItem = async (key) => {
    console.log("ID a eliminar ",key)
    try {
      await AsyncStorage.removeItem(key);
      console.log('Clave eliminada exitosamente');
    } catch (error) {
      console.log('Error al eliminar la clave:', error);
    }
  };

  //limpiar carrito
  export const cleanCart = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Elementos eliminados exitosamente');
    } catch (error) {
      console.log('Error al eliminar los elementos:', error);
    }
  };
  
  export const AlertItem = (fx) => {
    Alert.alert(
      'Are you sure you want to clear the cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>fx,
        },
      ],
      { cancelable: false }
    );
  };
  
  
  