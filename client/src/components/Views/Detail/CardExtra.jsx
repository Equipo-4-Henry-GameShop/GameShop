import { StyleSheet ,Image, Text, View, Button,SectionList} from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {color_azul, color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../../constants/Colors'


const CardExtra = (videogame) => {
    
    console.log("extra requerimientos", videogame.videogame.requerimientos)
    // let data=Object.entries(videogame.videogame.requerimientos)
    console.log("data-->",videogame.videogame.requerimientos[0].minimum);
    return (
        <View  style={styles.container}>
          <Text style={styles.reqtitle}> Requerimientos Minimos</Text>
        {/* <WebView style={styles.req} >{videogame.videogame.requerimientos[0].minimum}</WebView> */}

         <SectionList
        // <SectionList 
        sections={[

          // {
          //   title: 'Requisitos', 
          //   data: data
          // },
          {
            title: 'Generos', 
            data: videogame.videogame.generos.map( (el)=> {
                      return (  {
                         key: `${el}`,      nombre:el,
                        }
                      )})
          },
          {
            title: 'Plataformas', 
            data: videogame.videogame.plataformas.map( (el)=> {
                     return (  {
                        key: `${el}`,      nombre:el,
                     }
                    )})
          },
           
          
         
        ]}
        renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
          <>
              <View>
                <Text style={styles.text}>
                    <MaterialCommunityIcons name="pricetag-outline"  /> 
                    {item.nombre}</Text>
                 {/* { item.img ? <Image source={item.img} style={styles.image}/> 
                        : <Image source={require('../../assets/Unknown.jpg')} /> 
                }   */}
              </View>
              </>
              }
        renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
              // keyExtractor={(item, index) => index}
        />
        </View> 
        );
  };
  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: color_gris,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    
    title: {
      color: color_rojoNeon,
      fontSize: 25,
      fontWeight:'700',
      alignItems: 'center',
      alignContent: 'center',
      
      fontWeight: '800'
    },
    text: {
        color: color_azul,
      fontSize: 18,
      marginTop: 8,
      fontWeight: '800'
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
        flex:1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color_blanco,
      borderRadius: 8,
    },
    imageContenedor: {
        // flex:1,
        width: '75%',
        height: '55%',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: color_negro,
        padding:0,
        marginTop:20,
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
    estrella:{
   
        flexDirection:'row',
        height:25,
     
        gap:0,
        margin:5,
        alignItems:'center',
        alignContent: 'center',
    //    backgroundColor:color_gris,
       padding:1
    },
    reqtitle:{
      fontSize: 25,
    },
    req:{
        fontSize:20,
    },
   
  });
  
  export default CardExtra;