import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'
import MenuButtonSubItem from './MenuButtonSubItem';
import MenuBottonItem from './MenuButton'
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { LocalizationContext } from '../../Languaje/LocalizationContext';
import { ThemeContext } from '../../Theme/ThemeProvider';

import React from 'react';
import { ChangeButtonContext } from '../../Theme/ChangeContextButton';

const MenuItems=({navigation})=>{

  //esta linea debo de llamar en cada componente 
  const { StringsDark,isDarkMode} = React.useContext(ThemeContext);
  const {StringsLanguaje,locale }= React.useContext(LocalizationContext)
  
    return(
      <DrawerContentScrollView style={{backgroundColor:StringsDark.bktitle}}>
          <View style={{backgroundColor:StringsDark.cabmenu}}>
  
            <View style={styles.cabeceraimg}>
                  <Image 
                  source={require('../../../assets/gameshop.png')}
                  style={styles.imgmenu}
                  />
                  <Image 
                  source={require('../../../assets/Unknown.jpg')}
                  style={styles.icon}
                  />
            </View>
            <View style={styles.cabeceraText}>
                  <Text style={[styles.textoUsr,{color:StringsDark.bktitle}]}>
                    {StringsLanguaje.MsgUserNoRegister}
                  </Text>
                  <TouchableOpacity onPress={()=> navigation.navigate('CreateUser')}>
                      <Text style={[styles.btnIngresa,
                        {backgroundColor:StringsDark.bktitle,
                        color:StringsDark.bkContesp}]}>
                        {StringsLanguaje.Login}
                      </Text>
                  </TouchableOpacity>
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
              onPress={()=> navigation.navigate('MyVideogames')}
              icon='pricetags'
            />
             <MenuButtonSubItem
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
              nombre= {StringsLanguaje.Sign_in}
              onPress={()=> navigation.navigate('CreateUser')}
            />
                      <MenuButtonSubItem
              nombre= {StringsLanguaje.Login}
              onPress={()=> navigation.navigate('Login')}
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
      width: 40,
      height: 40,
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