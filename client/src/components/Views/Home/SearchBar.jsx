import { Searchbar } from 'react-native-paper';
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import { View, StyleSheet } from 'react-native'
import React from 'react'
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
import {useDispatch, useSelector} from "react-redux"
import { useState} from 'react'
import {  getvGamebyName, set1rsPage,setPrvVideogame,updateVgames,setflgPrev} from "../../../redux/videogamesActions"
import { color_negro,color_blanco, color_negro_grafito ,color_azul, color_rojo, color_verdeNeon, color_gris} from '../../../constants/Colors';

const SearchBar = (props) => {
    // console.log("props de search", props)
    const dispatch= useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
   
      const onChangeSearch = (query) => {
    //   console.log("caracter en home", query)
    
        // if (props.flag_prev ===false) {
          
        //   dispatch(setPrvVideogame(props.prev_videogames)) //????
        //   dispatch(setflgPrev(true))
        // }
        setSearchQuery(query);
        dispatch(getvGamebyName(query))
        dispatch(set1rsPage())
        
      }
      
      const onCloseSearch = () => {
        // console.log("limpiando valores de busqueda");
        dispatch(updateVgames(props.prev_videogames))
        // dispatch(getvideoGames()) ;
      }
      const {StringsLanguaje }= React.useContext(LocalizationContext)
      const { StringsDark } = React.useContext(ThemeContext);
      // console.log("StringsDark.backgroundContainer",StringsDark.backgroundContainer)
  return (
    // <View style={[styles.Container, isDarkMode && styles.DarkContainer]}>
      <View style={[styles.Container,{backgroundColor :StringsDark.backgroundTittle}]}>
      <Searchbar
        autoFocus={true}
        placeholder={StringsLanguaje.Search}
        onChangeText={onChangeSearch}
        onClearIconPress={onCloseSearch}
        value={searchQuery}
        // inputStyle={[styles.SearchbarText, isDarkMode && styles.DarkSearchbarText]}
        inputStyle={[styles.SearchbarText, {color:StringsDark.srchBartxt}]}
        style={[styles.Searchbarfondo, {backgroundColor :StringsDark.backgroundContainer,borderColor:StringsDark.bordercolor }]}
        iconColor={ StringsDark.tint}
        placeholderTextColor={StringsDark.tint}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
      justifyContent: 'center',
      //  backgroundColor: color_azul,
      alignItems: 'center',
      width: '92%',
      flexDirection: 'row',
    },
    Searchbarfondo:{
        marginLeft:'5%', 
        height: 40,
        width:'100%',
        borderWidth:3,
        // backgroundColor: color_azul,
        // borderColor: color_blanco,
        alignContent:'center'
        
    }
    
    ,SearchbarText:{
        fontSize:25,
        // color:color_blanco,
        alignSelf: 'center',
        fontWeight:'bold'

    },
})
export default SearchBar