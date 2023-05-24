import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'
import MenuButtonSubItem from './MenuButtonSubItem';
import MenuBottonItem from './MenuButton'
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { LocalizationContext } from '../../Languaje/LocalizationContext';
import { ThemeContext } from '../../Theme/ThemeProvider';

<<<<<<< HEAD
import React from 'react';
import { ChangeButtonContext } from '../../Theme/ChangeContextButton';
=======
import  React,{useEffect,useState, useContext} from 'react';
import { ChangeButtonContext } from '../../Theme/ChangeContextButton';
import {getItemAsyncStorage,InsertUserAsynStorage,removeItem} from '../Forms/Cart/CardCartController'

import { useFocusEffect } from '@react-navigation/native';
import { useDispatch ,useSelector} from "react-redux";
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18

const MenuItems=({navigation})=>{

  //esta linea debo de llamar en cada componente 
<<<<<<< HEAD
  const { StringsDark,isDarkMode} = React.useContext(ThemeContext);
  const {StringsLanguaje,locale }= React.useContext(LocalizationContext)
  
    return(
      <DrawerContentScrollView style={{backgroundColor:StringsDark.bktitle}}>
          <View style={{backgroundColor:StringsDark.cabmenu}}>
  
            <View style={styles.cabeceraimg}>
=======
  const { StringsDark,isDarkMode} = useContext(ThemeContext);
  const {StringsLanguaje,locale }= useContext(LocalizationContext)
  const [isLogged, setIsLogged]=useState(false)
  const [logginUser, setLoggingUser] = useState("");
  const isLoggedGlobal =useSelector((state)=>state.usersState.isLogged)
  // console.log("valor de isLoggedGlobal ",isLoggedGlobal)
  useEffect(() => {
   
    getUserStorage();
  }, []);

  useFocusEffect(
     React.useCallback(() => {
      getUserStorage()
     },[isLoggedGlobal] )
    //  [cartG]
  );

  const getUserStorage = async () => {
    try {
      const LoggedUserJSON = await getItemAsyncStorage("loggedGameShop");
      // console.log("variable LoggedUserJSON menu ITEMS->",LoggedUserJSON)
      if(LoggedUserJSON !=='vacio'){
      setLoggingUser(LoggedUserJSON);
        setIsLogged(true) 
        // console.log("Usuario Cargado correctamente menu ITEMS name->", logginUser.fullname);
      }else {
      setLoggingUser('vacio')
        setIsLogged(false) 
      }
    } catch (error) {
      console.log("Error al obtener la clave de  loggedGameShop:", error);
    }
  };
// console.log("esta logeado menu ITEMS", logginUser.image)
    return(
      <DrawerContentScrollView style={{backgroundColor:StringsDark.bktitle}}>
          <View style={{backgroundColor:StringsDark.cabmenu}}>
   
             <View style={styles.cabeceraimg}>
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
                  <Image 
                  source={require('../../../assets/gameshop.png')}
                  
                  style={styles.imgmenu}
                  /> 
                  {
                   logginUser.image && isLogged ? 
                       <Image 
                      source={{uri:logginUser.image}}
                      
                      style={styles.icon}
                      /> :
                      <Image 
                      source={require('../../../assets/Unknown.jpg')}
                      style={styles.icon}
                      />
                  }
                
            </View> 
            <View style={styles.cabeceraText}>
                  <Text style={[styles.textoUsr,{color:StringsDark.bktitle}]}>
<<<<<<< HEAD
                    {StringsLanguaje.MsgUserNoRegister}
                  </Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('CreateUser')}>
                      <Text style={[styles.btnIngresa,
                        {backgroundColor:StringsDark.bktitle,
                        color:StringsDark.bkContesp}]}>
                        {StringsLanguaje.Login}
                      </Text>
                  </TouchableOpacity>
=======
                    {isLogged ? `Bienvenido ${logginUser.fullname}` : StringsLanguaje.MsgUserNoRegister}    
                  </Text>
                  {!isLogged && (
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text style={[styles.btnIngresa,
                          {backgroundColor:StringsDark.bktitle,
                          color:StringsDark.bkContesp}]}>
                          {StringsLanguaje.Login}
                        </Text>
                    </TouchableOpacity>
                  )}
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
            </View>
            <View style={[styles.separator,{borderColor:StringsDark.text}]}>
  
          </View>
        </View>
          <MenuBottonItem
            nombre= {StringsLanguaje.Landing}
            onPress={()=> navigation.navigate('Landing')}
            icon='airplane'
          />
          <MenuBottonItem
            nombre= {StringsLanguaje.Home}
            onPress={()=> navigation.navigate('HomeScreen')}
            icon='home'
          />
         <MenuBottonItem
            nombre= {StringsLanguaje.Dashboard}
            onPress={()=> navigation.navigate('Dashboard')}
            icon='person'
          />
           <MenuButtonSubItem
              nombre= {StringsLanguaje.MyVideogames}
              onPress={()=> navigation.navigate('VideoGameList')}
              icon='pricetags'
            />



             <MenuButtonSubItem
<<<<<<< HEAD
              nombre= {StringsLanguaje.Security}
              onPress={()=> navigation.navigate('Security')}
              icon='finger-print'
            />
             <MenuButtonSubItem
              nombre= {StringsLanguaje.Communications}
              onPress={()=> navigation.navigate('Communications')}
              icon='mic-circle'
            />
             <MenuButtonSubItem
=======
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
              nombre= {StringsLanguaje.MyPosts}
              onPress={()=> navigation.navigate('MyPosts')}
              icon='clipboard'
            />
               <MenuButtonSubItem
              nombre= {StringsLanguaje.Shopping_Car}
              onPress={()=> navigation.navigate('Carrito')}
              icon='cart'
            />
          
  
            {/* <MenuButtonSubItem
              nombre= 'Videogames'
               onPress={()=> navigation.navigate('HomeScreen')}
            /> */}
            <MenuButtonSubItem
<<<<<<< HEAD
              nombre= {StringsLanguaje.Sign_in}
=======
              nombre= {StringsLanguaje.Register}
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
              onPress={()=> navigation.navigate('CreateUser')}
              icon="clipboard-outline"
            />
<<<<<<< HEAD
                      <MenuButtonSubItem
=======
            <MenuButtonSubItem
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18
              nombre= {StringsLanguaje.Login}
              onPress={()=> navigation.navigate('Login')}
              icon="log-in-outline"
            />


            <ChangeButtonContext name={StringsLanguaje.DarkMode} tipo={"theme"}/>
            <ChangeButtonContext name={StringsLanguaje.Languaje} tipo={"Languaje"}/>
      </DrawerContentScrollView>
    )
  }
  
  const styles = StyleSheet.create({
 
    cabeceraimg:{
      flexDirection: 'row',
      // alignContent: 'space-between',
      alignItems: 'center',
      alignContent: 'space-around'
      
    },
    imgmenu: {
      marginLeft:20,
      padding:20,
      width: 120,
      height: 80,
      // justifyContent: '',
      
      resizeMode:'contain'
    },
    icon: {
      marginLeft:70,
      width: 50,
      height: 50,
      // alignContent: 'flex-end',
      // alignItems: '',
      resizeMode:'contain',
      borderRadius:100
  
    },
    cabeceraText:{
      alignContent: 'center',
      alignItems:'center',
      
    },
    btnIngresa:{
      margin:3,
      width: 150,
      height: 40,
      // backgroundColor: color_blanco,
      borderRadius: 10,
      // color: color_crema,
      fontWeight:'bold',
      fontSize: 22,
      textAlign: 'center',
    },
    textoUsr:{
      fontSize:13,
      // color:color_blanco,
    },
   
    separator: {
      // marginVertical: 30,
      // height: 0,
    width: '100%',
      marginTop:5,
      // borderColor:color_negro,
      borderWidth:2,
      // color: color_negro,
    },
  
    
  
   
  });
export default MenuItems