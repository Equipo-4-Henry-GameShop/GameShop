import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
  SafeAreaView,
  Modal
} from "react-native";
import CardDataPanel from "../../../helpers/CardDataPanel";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {
  color_azul,
  color_blanco,
  color_negro,
} from "../../../../constants/Colors";
import { persons } from "../../../../utils/arrayPersons";

import MyBezierLineChart from "./LineChart";
import MyBarChart from "./BarChart";
import MyPieChart from "./PieChart";
import { Dropdown } from 'react-native-element-dropdown'
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"

////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo
const plataformas = [
  { label: 'Android',         value: 'android' },
  { label: 'apple macintosh', value: 'Apple Macintosh' },
  { label: 'linux',           value: 'Linux' },
  { label: 'nintendo',        value: 'Nintendo' },
  { label: 'pc',              value: 'PC' },
  { label: 'playstation',     value: 'PlayStation' },
  { label: 'xbox ',           value: 'Xbox' },
  
];

const CantHomMuj = [
  { label: 'Cantidad de Hombres y Mujeres', value: 'CantHomMuj' },
  
  
];
const VideGameVsCantCompras = [
  { label: 'VideoGames vs Cant de Compras', value: 'VdgVSCantCompras' },
  
  
];
const userCantCompras = [
  { label: 'Usuarios vs Cantidad de Compras', value: 'UsersVsCantCompras' },
  
  
];

export const Metrics = (route) => {

  const [view, setView] = useState(false)
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [chart,setChar]=useState('VdgVSCantCompras')
  

const handleChangeModal = ()=>{
  setView(!view);
  console.log(view)
}
let contest;
const hanldeChangeShowChart = (data)=>{
    setChar(data)
}

const handlerCleaner = ()=>{
  setIsFocus(true)
 setChar('VdgVSCantCompras')

}
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView contentContainerStyle={{ alignItems: 'center' }} horizontal={true} >
       <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <View>

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
                    height:'50%',
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
                      <View
                        style={{
                          height: 20,
                          width: '15%',
                          justifyContent: 'flex-end',
                          position: 'absolute',
                          top: 18,
                          left: 10,
                        }}
                      >
                        <TouchableOpacity onPress={() => handlerCleaner()}>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: 5, color:'#FFFF' }}>CLEAR</Text>
                            <MaterialCommunityIcons
                              name='md-reload'
                              color={color_blanco}
                              size={20}
                              style={styles.botonplus}
                            />
                          </View>
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
                          data={userCantCompras}
                          // search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Users' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={item => {
                            // setValue(item.value);
                            setIsFocus(false);
                            hanldeChangeShowChart(item.value)
                            
                          }}
                          
                        />
                        <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={VideGameVsCantCompras}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'VideoGames' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          // setValue(item.value);
                          setIsFocus(false);
                          hanldeChangeShowChart(item.value);
                        }}
                        
                      />
                      <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={CantHomMuj}
                          // search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Genre' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={item => {
                            // setValue(item.value);
                            setIsFocus(false);
                            hanldeChangeShowChart(item.value)
                            
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
        {chart === 'VdgVSCantCompras' && (
              <View style={styles.container}>
                <Text style={styles.title}>VideoGames vs Cant de Compras</Text>
                <MyBezierLineChart />
              </View>
            )}
            {chart === 'UsersVsCantCompras' && (
              <View style={styles.container}>
                <Text style={styles.title}>Usuarios vs Cantidad de Compras</Text>
                <MyBarChart />
              </View>
            )}
            {chart === 'CantHomMuj' && (
              <View style={styles.container}>
                <Text style={styles.title}>Cantidad de Hombres y Mujeres</Text>
                <MyPieChart />
              </View>
            )}
      
      




      </View>
  </ScrollView>
  </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderColor:'#533484'
  },
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
    alignSelf:'center',
    
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