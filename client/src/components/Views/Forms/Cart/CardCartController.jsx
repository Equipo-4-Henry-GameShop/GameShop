import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native'
//linea para modificar el contexto de localizacion para el lenaguje


//inserta o agrega cantidad de item
export const  InsertarItem= async (key,objString) => {
    try {           
        const currentValue = await AsyncStorage.getItem(key);
        if (currentValue !== null) {
            const parsedValue = JSON.parse(currentValue);
            if (parsedValue.amount===3){
                alert("Lo Sentimos el numero maximo de compras por titulo es 3.")
            }else{
            parsedValue.amount = parsedValue.amount+1; // Aquí puedes realizar las modificaciones necesarias en el valor
            // Convertir el objeto modificado a una cadena de texto
            const updatedValue = JSON.stringify(parsedValue);
            await AsyncStorage.setItem(key, updatedValue);
            
            alert('Se adiciono una unidad al item actual')
            // console.log('Item modificado exitosamente');
            }
        }   
        else{
            await AsyncStorage.setItem(key, objString);
            // Kawait AsyncStorage.setItem('item2', objString);
            // console.log("llave agregada",objString)
            alert('el item ha sido agregado')
        }
       
    } catch (error) {
      console.log("error al guardar objeto", error);
    }

  }


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
  // console.log("valor de key",key)
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
    // console.log("ID a eliminar ",key)
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
  
  export const getKeysCount = async () => {
    try {
      let allKeys = await AsyncStorage.getAllKeys();
      // console.log(allKeys)
      allKeys = await AsyncStorage.getAllKeys();
      //  console.log(allKeys)
      let keysCount = allKeys.length;
      // console.log("Cantidad DESDE FX GET KEYS COUNT:", keysCount);
      return keysCount;
    } catch (error) {
      console.log("Error al obtener las claves de AsyncStorage:", error);
      throw error; // Opcional: relanza el error para manejarlo en otro lugar si es necesario
    }
  };
  
  