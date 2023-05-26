import React from 'react';  
import { View, Text, ScrollView, StyleSheet,FlatList, SectionList } from 'react-native';

import HTML from 'react-native-render-html';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../Theme/ThemeProvider';
import { LocalizationContext } from '../../Languaje/LocalizationContext';
import { useWindowDimensions } from 'react-native';

const CardExtra = (videogame) => {
  const windowWidth = useWindowDimensions().width;
  const { StringsDark } = React.useContext(ThemeContext);
  const { StringsLanguaje } = React.useContext(LocalizationContext);
  // console.log("extra requerimientos", videogame.videogame);
  let Req = videogame.videogame.requerimientos;
  const tagsStyles = {
    p: { color: 'red', fontSize: 16 ,},
    strong: { fontWeight: 'bold' ,color:`${StringsDark.text}`},
    a: { color: 'blue', textDecorationLine: 'underline', },
    li:{color: `${StringsDark.reqmintxt}`},
    ul:{color: `${StringsDark.reqmintxt}`},

    
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: StringsDark.bkCard }]}>
          { Req.length>0 && (
              <Text style={[styles.reqtitle, { color: StringsDark.nuevacombinacion }]}>
              {StringsLanguaje.Minimum_requirements}
              </Text>
          )}
         { Req.length>0 && (
          <View>
            {Req.map((item, index) => (
              <View key={index} style={styles.htmlContainer}>
                <HTML source={{ html: item.minimum }} contentWidth={windowWidth} tagsStyles={tagsStyles}/>
                <HTML source={{ html: item.recommended }} contentWidth={windowWidth} tagsStyles={tagsStyles}/>
                
              </View>
            ))}
          </View>
            )
          }
        <View>
          {videogame.videogame.plataformas.length>0 && ( 
            <Text style={[styles.title, { color: StringsDark.txtClaro }]}>
            {StringsLanguaje.Plataformas}
            </Text> 
          )}
          {videogame.videogame.plataformas.length>0 && ( videogame.videogame.plataformas.map((item, index) => (
              <View>
              <Text style={[styles.text, { color: StringsDark.text }]}>
                <MaterialCommunityIcons name="pricetag-outline" />
                {item}
              </Text>
            </View>
            )))
          }
          {videogame.videogame.generos.length>0 && (
            <Text style={[styles.title, { color: StringsDark.txtClaro }]}>
              {StringsLanguaje.Genres}
            </Text> 
          )}
          {videogame.videogame.generos.length>0 && (videogame.videogame.generos.map((item, index) => (
            <View>
            <Text style={[styles.text, { color: StringsDark.text }]}>
              <MaterialCommunityIcons name="pricetag-outline" />
              {item}
            </Text>
          </View>
          ))
          )
        }
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    margin:40,
    // marginLeft:50,
    // marginRight: 50,
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    width: '90%',
    borderRadius:8,

  },
  title: {
    marginLeft:15,
    fontSize: 25,
    fontWeight: '700',
    textAlign:'left',
    fontWeight: '800',
  },
  text: {
    marginLeft:15,
    fontSize: 18,
    marginTop: 8,
    fontWeight: '800',
  },
  reqtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  req: {
    fontSize: 20,
  },
  htmlContainer:{
    color:'white',
    marginLeft:10,
  },

 

   
  });
  
  export default CardExtra;