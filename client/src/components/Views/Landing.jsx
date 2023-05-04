
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View, } from '../components/Themed';
import {color_azul, color_blanco, color_negro, } from '../../constants/Colors'

const Landing =({ navigation, route})=>{
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image 
            source={require('../../assets/gameshop.png')}
            // style={styles.image}
            
            />
        </View>
      <View style={styles.buttonContainer} >
      
      <TouchableOpacity onPress={() =>
            navigation.navigate('Home', { name: 'Usuario Invitado ?' })
          }
      >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Acceder</Text>
          </View>
        </TouchableOpacity>
      </View>
  </View> 
    )
  }


  const styles = StyleSheet.create({
    container: {
      // flex:1,
      
      // backgroundColor: color_negro,
      // alignItems: 'center',
      // justifyContent: 'center',
      // width: '100%',
      // height: '100%'
      flex: 1,
      justifyContent: 'center',
      backgroundColor: color_blanco,
      alignItems: 'center',
      width: '100%',
    },
    imgContainer:{
     
      alignItems: 'center',
      margin:50,
      width: '100%',
      // backgroundColor: 'red',
    },
    buttonContainer:{
      margin:50,
    },
    
    button: {
      marginBottom: 30,
      width: 250,
      alignItems: 'center',
      backgroundColor: color_azul,
      borderRadius:8,
  
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      fontSize:45,
    fontWeight: 'bold',
      color: color_blanco,
  
    },
 
    
   
  });
  export default Landing