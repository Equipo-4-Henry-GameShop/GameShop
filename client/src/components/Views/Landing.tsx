
import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View, } from '../components/Themed';
import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../constants/Colors'

const Landing =({ navigation}:{navigation: any}, {route}:{route:any})=>{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GameShop</Text>
    
      <View style={styles.buttonContainer}>
        <Image 
          source={require('../../assets/redy3.jpg')}
          style={styles.image}
          
          />
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
      justifyContent: 'space-between',
      backgroundColor: color_gris,
      alignItems: 'center',
      width: '100%',
    },
    
    title: {
      color: color_naranja,
      fontSize: 60,
      fontWeight:'700',
    },
    separator: {
      marginVertical: 30,
      height: 5,
      width: '80%',
      color: color_blanco
    },
     h2: {
      color: '#FAE042',
      fontSize: 18,
      marginTop: 8,
    },
    button: {
      marginBottom: 30,
      width: 250,
      alignItems: 'center',
      backgroundColor: color_verdeNeon,
      borderRadius:8,
  
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      fontSize:40,
    
      color: color_negro,
  
    },
    image: {
      width: 394,
      height: 460,
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: color_negro,
      height:'100%',
      width: '100%',
      borderRadius: 5,
      padding: 2,
      margin: 2,
      alignItems: 'center',
      // justifyContent: ,
    },
   
  });
  export default Landing