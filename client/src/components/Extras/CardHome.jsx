import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {Image} from 'react-native-elements'
import { color_rojoNeon,color_azul, color_blanco } from '../../constants/Colors'
import {size} from 'lodash'



export default function CardHome(data) {
  //  console.log("esto llega a card",data.navigation)
  function estrellitas(index) {
    // console.log("entro una estreilla");
    return <Image source={require('../../assets/star.png')} key={index} style={{width: 15, height: 15, }}/>
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
      <View style={styles.container}>
            <View style={styles.viewImageContainer}>
                { data.data.img ? <Image 
                                source={data.data.img} 
                                style={styles.image}
                                PlaceholderContent={<ActivityIndicator color={color_azul}/>}
                              /> 
                          : <Image source={require('../../assets/Unknown.jpg')} /> 
                }
            </View>
            <View style={styles.viewInforContainer}>
                <Text style={styles.h2}>{data.data.nombre}</Text>
                  <View style={styles.viewEstrellas}>
                  {starArr}
                  </View>
                  
                <Text style={styles.h3}>
                    { size(data.data.informacion) >0 
                        ? `${data.data.informacion.substr(0,60)} ...`
                        : data.data.informacion
                      }
                  </Text>
                <Text style={styles.Precio}> $ {data.data.precio}</Text>

            </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
    // justifyContent: 'space-between',
     backgroundColor: color_blanco,
    // alignItems: 'center',
     width: '98%',
     margin: 10,
  },
  viewImageContainer: {
    // alignItems: 'center',
    // flex:1
    width: '50%',
    marginRight: 15 
    , 
  },
  viewInforContainer: {
    // alignItems: ',
    // flex:4,
    width: '40%',
  },
  viewEstrellas: {
    flexDirection : 'row'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:8,   
  },

  h2: {
    fontSize:20 ,
    color:color_azul,
    fontWeight: 'bold'
  },
  h3:{
    fontSize: 15
  },
  Precio :{
    padding:15,
    fontSize: 30,
    color: color_rojoNeon,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center'
    

  },
  
})
