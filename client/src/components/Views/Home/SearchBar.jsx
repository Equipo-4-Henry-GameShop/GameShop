import { Searchbar } from 'react-native-paper';

import { View, StyleSheet } from 'react-native'
import React from 'react'
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
import {useDispatch, useSelector} from "react-redux"
import { useState} from 'react'
import {  getvGamebyName, set1rsPage,setPrvVideogame} from "../../../redux/videogamesActions"
import { color_negro,color_blanco, color_crema } from '../../../constants/Colors';

const SearchBar = (props) => {
    const dispatch= useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
   
      const onChangeSearch = (query) => {
        // console.log("caracter en home", query)
        if (flag_prev==='false') {
    
          dispatch(setPrvVideogame(vGames.videoGames))
          dispatch(setFlaPrev(true))
        }
        setSearchQuery(query);
        dispatch(getvGamebyName(query))
        dispatch(set1rsPage())
      
      }
      
      const onCloseSearch = () => {
        // console.log("limpiando valores de busqueda");
        dispatch(updateVideogames(props.prev_videogames))
        // dispatch(getvideoGames()) ;
      }
    
      const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  return (
    <View style={[styles.Container, isDarkMode &&styles.DarkContainer]}>
      <Searchbar
        autoFocus={true}
        placeholder="Search"
        onChangeText={onChangeSearch}
        onClearIconPress={onCloseSearch}
        value={searchQuery}
        inputStyle={styles.SearchbarText}
        style={styles.Searchbarfondo}
        iconColor={color_blanco}
        placeholderTextColor={color_blanco}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
      justifyContent: 'space-between',
      backgroundColor: color_crema,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
    //   height: '100%'
    },
    DarkContainer: {
        justifyContent: 'space-between',
        backgroundColor: color_negro,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        height: '100%'
      },
Searchbarfondo:{
    margin:5, 
    backgroundColor: color_negro,
    height:35,
  },
})
export default SearchBar