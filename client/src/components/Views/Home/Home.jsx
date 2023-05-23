  import { StyleSheet ,TouchableOpacity, Text, View,Button, SectionList, ActivityIndicator, Modal, Alert} from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

  import {useDispatch, useSelector} from "react-redux"
  import { useEffect } from 'react'
  import React, { useState } from 'react';

  import {getvideoGames, setNxtPage,setPrvPage, getvGamebyName, set1rsPage,setPrvVideogame,filterByAtoZ,filterByZtoA,filterRatingAsc, filterRatingDesc, filterPriceAsc,filterPriceDesc, GetallGenres, filterByGenre } from "../../../redux/videogamesActions"

  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import CardHome from './CardHome';
  import Detail from '../Detail/Detail'

  import { Dropdown } from 'react-native-element-dropdown'
  //linea para llamar a modo DARK
  import { ThemeContext } from '../../Theme/ThemeProvider';
  //linea para modificar el contexto de localizacion para el lenaguje
  import { LocalizationContext } from '../../Languaje/LocalizationContext';

  import {useContext} from 'react';
  import SearchBar from './SearchBar';

  import { Badge } from "react-native-paper";
  import {getKeysCount} from '../../../../src/components/Views/Forms/Cart/CardCartController'
  import { color_blanco } from '../../Theme/stringsColors';
import { getAllVideogames } from '../../../redux/videogamesSlice';
  //este tiene toda la logica xq va dentro de un stack

  const plataformas = [
    { label: 'Android',         value: 'android' },
    { label: 'apple macintosh', value: 'Apple Macintosh' },
    { label: 'linux',           value: 'Linux' },
    { label: 'nintendo',        value: 'Nintendo' },
    { label: 'pc',              value: 'PC' },
    { label: 'playstation',     value: 'PlayStation' },
    { label: 'xbox ',           value: 'Xbox' },
    
  ];

  const ordenAlfabetico = [
    { label: 'A -- Z', value: 'AtoZ' },
    { label: 'Z -- A ', value: 'ZtoA' },
    
  ];
  const ordenRAting = [
    { label: 'Mayor a Menor Rating', value: 'ratingDESC' },
    { label: 'Menor a Mayor Precio', value: 'ratingASC' },
    
  ];
  const ordenPrice = [
    { label: 'Mayor a Menor Precio', value: 'priceDESC' },
    { label: 'Menor a Mayor Precio ', value: 'priceASC' },
    
  ];


  const Home=({ navigation, route})=>{
    const dispatch= useDispatch();
    const vGames=useSelector((state)=>state.videogamesState)
    const flag_prev= vGames.flag_prev
    const pagina=vGames.pagina
    const porPagina= vGames.porPagina
    const maximo=Math.ceil(vGames.videoGames.length/porPagina)


  // ===============modal filter state=========
  const [view, setView] = useState(false)
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  // ===============State Filter =========
  // // const {allGenres, FilterGenre, platformState,orderABC,orderRating,orderPrice} = useSelector((state=>state))
  // const [orderAbc, setOrderAbc]= useState(orderABC)
  // const [orderprice, setOrderPrice]= useState(orderPrice)
  // const [orderrating, setOrderRating]= useState(orderRating)
  // const [filtergenre, setFilterGenre]= useState(FilterGenre)
  // const [plataformby, setPlataformBy]= useState(platformState)

    //linea para setear el lenguaje /obtener palabras de lenguaje
    const {  StringsDark} = useContext(ThemeContext);
    const {StringsLanguaje }= useContext(LocalizationContext)

    useEffect(()=>{
      //  console.log("entro al 2do home??")
      dispatch(getvideoGames()) ;
      dispatch(GetallGenres())
    },[])
    
    
//==================== FILTER SET SELECT==================
// const setSelects = (ordABC = "",ordPrice="",ordRating, filterGenr = "",  platform = "") => {
//   setOrderAbc(ordABC);
//   setOrderPrice(ordPrice);
//   setOrderRating(ordRating);
//   setFilterGenre(filterGenr);
//   setPlataformBy(platform)

//   handlerFilterAbc(ordABC)
//   handlerFilterRating(ordRating)
//   handlerFilterPriceg(ordPrice)
// };

const Genres =vGames.allGenres.length && vGames.allGenres?.map(e=>({
  label: e.name, 
  value: e.name
}))



// console.log(Genres)

    const handleChangeModal = ()=>{
      setView(!view);
      console.log(view)
    }

    const handlerFilterAbc = (filterType) => {
      console.log(filterType)
      if (filterType === 'AtoZ') {
    
        dispatch(filterByAtoZ())
    
      }else{
      
        dispatch(filterByZtoA())
    
      }
    };



    const handlerFilterRating=(filterType)=>{
      console.log(filterType)
      if (filterType === 'ratingASC') {
    
        dispatch(filterRatingAsc())
    
      }else{
      
        dispatch(filterRatingDesc())
    
      }
    }

    const handlerFilterPriceg=(filterType)=>{
      console.log(filterType)
      if (filterType === 'priceASC') {
    
        dispatch(filterPriceAsc())
    
      }else{
      
        dispatch(filterPriceDesc())
    
      }
    }

    const handleFilterGenre= (data)=>{
      dispatch(filterByGenre(data));
    }
    // const hanlderCleanFilter = ()=>{
    //   dispatch(getAllVideogames())
    // }

    const NextPage=()=>{
      if(maximo===pagina){
        alert("Ya se encuentra ubicado en la ultima pagina")
        return
      }
        dispatch(setNxtPage())
    }
    const PrevPage=()=>{
        if(pagina===1) {
          alert("Ya se encuentra ubicado en la Primera pagina")
          return
        }
        dispatch(setPrvPage())
    }
  

    
  return (
    <View  style={[styles.Container, {backgroundColor:StringsDark.bktitle}]}>
        
        <View style={styles.Navback}>
              <TouchableOpacity onPress={PrevPage} flag_prev={flag_prev}>
                < MaterialCommunityIcons name="chevron-back-circle-sharp" 
                size={30} color={StringsDark.text}/>
              </TouchableOpacity> 
          
        </View>
        <TouchableOpacity
          style={styles.fabLocationTR}
          onPress={handleChangeModal}
        >
          <View style={styles.fab}>
              <MaterialCommunityIcons name='filter' color={color_blanco} size={30} style={styles.botonplus}/>
          </View>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          onDismiss={()=>{console.log('close')}}
          onShow={()=>{console.log('show')}}   
          transparent
          visible={view}   
        >
          <View 
              style={{
                flex: 1,
                backgroundColor:'rgba(1,1,1, 0.5)',
                justifyContent: 'center',
                alignItems:'center',
              

              }}
              >
                <View
                  style={{
                    height:'70%',
                    width:'90%',
                    borderRadius:25,
                    borderBottomEndRadius:200,
                    backgroundColor: '#533484'
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      paddingHorizontal:10,
                  

                    }}
                  >   
                  <TouchableOpacity
                    onPress={()=>setView(false)}
                  >
                      <MaterialCommunityIcons name='close-circle-outline' color={color_blanco} size={30} />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.containerDos}>
                    <View
                      style={{
                        padding:20,
                        borderRadius:15,
                        backgroundColor:'white'
                      }}
                    >
                          <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={plataformas}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Category' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={item => {
                            // setValue(item.value);
                            setIsFocus(false);
                            
                          }}
                          
                        />
                        <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={ordenAlfabetico}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Order ABC' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          // setValue(item.value);
                          setIsFocus(false);
                          handlerFilterAbc(item.value);
                        }}
                        
                      />
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={ordenRAting}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Rating' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          // setValue(item.value);
                          setIsFocus(false);
                          handlerFilterRating(item.value)
                        }}
                        
                      />
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={ordenPrice}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Price' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          // setValue(item.value);
                          setIsFocus(false);
                          handlerFilterPriceg(item.value);
                        }}
                        
                      />
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Genres}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Genres' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          // setValue(item.value);
                          setIsFocus(false);
                          // handleFilterGenre(item.value);
                        }}
                        
                      />
                      {/* <TouchableOpacity
                          onPress={hanlderCleanFilter}
                          style={{
                            backgroundColor: '5856D6',
                            borderRadius: 25,
                            width: 40,
                            height: 20
                          }}
                        >
                          <Text style={{ color: '#FFFFFF' }}>Clean Filter</Text>
                        </TouchableOpacity> */}
                      
                    </View>
                </View>
                </View>
                

          </View>
        </Modal>



        <View style={styles.List}>
            
          
          <SectionList
          // // //  , 
          sections={[
            {
              title: `${StringsLanguaje.Page}  ${pagina} ${StringsLanguaje.of} ${maximo}` ,
            
              data : vGames.filteredVideoGames.slice(
                        (pagina-1)*porPagina,
                        (pagina-1)*porPagina+porPagina)
                      .map(el=>{
                      //console.log("elemto sliceado",el)
                      return ({
                                      key: `${el.id}`, 
                                      img: {uri:el.image }, 
                                      nombre:el.name ,
                                      fecLan: el.releaseDate ? el.releaseDate : '2020-10-10',
                                      // screnshoots: el.screnshoots,
                                      screenshoots:el.screenShots,
                                      informacion: el.description ? el.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat metus eget maximus scelerisque. Vivamus tempor eleifend nulla in placerat. Sed sollicitudin a odio a viverra. Morbi sagittis consequat erat at malesuada. Ut a ultrices risus. Suspendisse consectetur lectus elementum libero auctor venenatis. Ut semper arcu eu efficitur efficitur. Maecenas gravida mauris a porttitor congue. Suspendisse et neque eget quam blandit vehicula. Praesent interdum elementum lorem eget scelerisque. Nam vitae condimentum ipsum. Sed interdum eros dui, sit amet faucibus elit maximus at. Aenean eu posuere elit. In vitae diam at neque feugiat pharetra in sit amet nunc.',
                                      // informacion: el.description,
                                      rating: el.rating,
                                      generos: el.genre,
                                      tiendas: el.tiendas,
                                      etiquetas: el.etiquetas,
                                      plataformas: el.platforms,
                                      precio: el.price ? el.price: '20.55',
                                      requerimientos: el.requeriments_en ? el.requeriments_en :' aqui falta data'
                                      // requerimientos:el.requeriments_en ? el.requeriments_en.map(el=>el.minimum): 'Sin informacion'
                                    })
                      })   
            },
          
          ]}
          renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
            <>  
                
                  <CardHome data={item} navigation={navigation}  
                  ActivityIndicator color={StringsDark.bkContesp} size={"large"}/>
            </>
          }
          renderSectionHeader={({section}) => <Text style={[styles.cabecera, {color: StringsDark.bkContesp}]}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
                // keyExtractor={(item, index) => index}
          />
          
        </View>
        <View style={styles.NavNext}>
        <TouchableOpacity onPress={NextPage}>
            < MaterialCommunityIcons name="chevron-forward-circle-sharp" 
            size={30} color={StringsDark.text}/>
          </TouchableOpacity>
        </View>
      </View>
      )
  }
  const CartButton = ({ navigation }) => {
    const [countBadge, setCountBadge]=useState(0);
    const cartG = useSelector((state) => state.cartState);
    const {  StringsDark } = useContext(ThemeContext);

    useEffect(() => {
      //  console.log("llamdo a CarButton una vez mas", cartG);
      const GetCountItemCart = async () => {
        try {
          const count = await getKeysCount();
          // console.log("Cantidad de claves en AsyncStorage:", count);
          setCountBadge(count)
        } catch (error) {
          console.log("Error al obtener las claves de AsyncStorage:", error);
        }
      }
        GetCountItemCart();
    }, [cartG]);

    // console.log("Cantidad den button:", countBadge);
    return (
      <View style={{ marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Carrito")}>
          <Text>{countBadge}</Text>
          <MaterialCommunityIcons name="cart" color={StringsDark.bordercolor} size={30} />
          {countBadge > 0 && (
            <Badge  size={25} style={{ position: "absolute",top: 0,right: 17, 
            color:StringsDark.bordercolor, backgroundColor:StringsDark.txtprice }}
            >
              {countBadge}
            </Badge>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const HomeScreen =({ navigation, route})=>{
    const vGames=useSelector((state)=>state.videogamesState)
    const prev_videogames= vGames.videoGames_Prev
    const flag_prev= vGames.flag_prev
    const { isDarkMode, StringsDark } = useContext(ThemeContext);
    const {locale,StringsLanguaje }= useContext(LocalizationContext)
    const Stack = createNativeStackNavigator();
    //  const cartG = useSelector((state) => state.cartState);

    useEffect(()=>{
      // console.log("rellamando a cabecera en home x redux");
      navigation.setOptions({
        headerTitle: `${StringsLanguaje.Home}`,
        headerStyle: {
          backgroundColor: StringsDark.backgroundContainer,
        },
        headerRight: () => <CartButton navigation={navigation} />, 
      })
    },[isDarkMode,locale])

    
    return (
      <Stack.Navigator>
          <Stack.Screen 
          name='Home'
                component={Home} 
                options={{ 
                  title: ' ',
                  headerStyle: {
                    backgroundColor: StringsDark.backgroundContainer
                  },
                  headerLeft: () => (<SearchBar flag_prev={flag_prev} prev_videogames={prev_videogames}/> )
                  
                }}
          >
              {/* {props => <TabInfo {...props} videogame= {route.params.videogame} />} */}
            
          </Stack.Screen>
          <Stack.Screen
          name='Detail'
                component={Detail} 
                options={{ 
                  title: 'Detail',
                  headerStyle: {
                    backgroundColor: StringsDark.backgroundTittle,
                  },
                  headerTintColor: StringsDark.titblanco,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25
                  }
                }}
                >
          </Stack.Screen>
      </Stack.Navigator>
      
      );

  }
  const styles = StyleSheet.create({
    Container: {
      justifyContent: 'space-between',
      // backgroundColor: color_blanco,
      alignItems: 'center',
      width: '99%',
      flexDirection: 'row',
      height: '100%'
    },
    Navback:{
      width: '6%',
        // backgroundColor: color_crema,
    },
    List:{
      width: '89%',
      height: '100%',
      // backgroundColor: color_azul,
      alignContent: 'center',
      alignItems: 'center',

    },
    NavNext:{
      width: '6%',
      // backgroundColor: color_neon,
    },
    cabecera:{
      alignContent: 'center',
      justifyContent: 'center',
      // color: color_azul,
      fontWeight: 'bold',
      fontSize:25,
      textAlign: 'center',

    },
    // title: {
    //   color: color_azul,
    //   fontSize:30,
    //   fontWeight:'700',
    //   alignItems: 'center',
      
    // },
  
    image: {
      width: 250,
      height: 300,
      justifyContent: 'center',
      // borderTopEndRadius:8,
      // borderTopStartRadius:8,
      
    },
    fabLocationTR:{
      zIndex: 1,
      position: 'absolute',
      top: 10,
      right:2,
    },
    fab:{
      backgroundColor: '#5856D6',
      width:45,
      height:45,
      borderRadius:100,
      justifyContent:'center'
    },

    botonplus:{
      alignSelf:'center'
    },


    containerDos: {
      flex: 1,
      backgroundColor: '#533484',
      padding: 14,
      justifyContent: 'flex-start',
      alignContent: 'center',
      borderRadius:25
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 10
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  
  });

  export default HomeScreen;