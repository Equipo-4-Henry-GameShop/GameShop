import { Searchbar } from 'react-native-paper';

import { View, StyleSheet } from 'react-native'
import React from 'react'
//linea para llamar a modo DARK
import { ThemeContext } from '../../Theme/ThemeProvider';
import {useDispatch, useSelector} from "react-redux"
import { useState} from 'react'
import {  getvGamebyName, set1rsPage,setPrvVideogame,updateVgames} from "../../../redux/videogamesActions"
import { color_negro,color_blanco, color_negro_grafito ,color_azul, color_rojo, color_verdeNeon, color_gris} from '../../../constants/Colors';

const SearchBar = (props) => {
    // console.log("props de search", props)
    const dispatch= useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
   
      const onChangeSearch = (query) => {
    //   console.log("caracter en home", query)
        if (props.flag_prev==='false') {
    
          dispatch(setPrvVideogame(vGames.videoGames))
          dispatch(setFlaPrev(true))
        }
        setSearchQuery(query);
        dispatch(getvGamebyName(query))
        dispatch(set1rsPage())
      
      }
      
      const onCloseSearch = () => {
        // console.log("limpiando valores de busqueda");
        dispatch(updateVgames(props.prev_videogames))
        // dispatch(getvideoGames()) ;
      }
    
      const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  return (
    <View style={[styles.Container, isDarkMode && styles.DarkContainer]}>
      <Searchbar
        autoFocus={true}
        placeholder="Search"
        onChangeText={onChangeSearch}
        onClearIconPress={onCloseSearch}
        value={searchQuery}
        inputStyle={[styles.SearchbarText, isDarkMode && styles.DarkSearchbarText]}
        style={[styles.Searchbarfondo, isDarkMode && styles.DarkSearchbarfondo]}
        iconColor={ isDarkMode ? color_gris: color_blanco}
        placeholderTextColor={isDarkMode ? color_gris: color_blanco}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
      justifyContent: 'center',
      backgroundColor: color_azul,
      alignItems: 'center',
      width: '92%',
      flexDirection: 'row',
    },
    DarkContainer: {
        justifyContent: 'center',
        backgroundColor: color_negro,
        alignItems: 'center',
        width: '92%',
        flexDirection: 'row',
      },
    Searchbarfondo:{
        marginLeft:'5%', 
        backgroundColor: color_azul,
        height: 40,
        width:'100%',
        borderWidth:3,
        borderColor: color_blanco,
        alignContent:'center'
        
    },
    DarkSearchbarfondo:{
        marginLeft:'5%', 
        backgroundColor: color_negro,
        height: 40,
        width:'100%',
        borderWidth:3,
        borderColor: color_gris,
        alignContent:'center'
        
    }
    ,SearchbarText:{
        fontSize:25,
        color:color_blanco,
        alignSelf: 'center',
        fontWeight:'bold'

    },DarkSearchbarText:{
        fontSize:25,
        color:color_gris,
        alignSelf: 'center',
        fontWeight:'bold'

    }
})
export default SearchBar