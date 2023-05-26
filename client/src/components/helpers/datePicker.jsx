import React, { useEffect, useState } from 'react';
import { Button, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { color_azul } from '../Theme/stringsColors';

import { LocalizationContext } from "../Languaje/LocalizationContext";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";


const PickerInput = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  //Const Dark Mode:
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LocalizationContext);
  //UseEffect Dark Mode:
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Register}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    });
  }, [isDarkMode, locale]);
  //Dark Mode:


  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity  onPress={showDatePicker} style={[
                    styles.miniButton,
                    { backgroundColor: StringsDark.letraverde },
                  ]} /><Text>Date</Text><TouchableOpacity/>
      {showPicker && (
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          mode="date"
          display="spinner"
          textColor="red"
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default PickerInput;

const styles = StyleSheet.create({
    /////
    buttonDate: {
      backgroundColor:color_azul,
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: color_azul,
      width: "100%",
    },
  
    bgCont: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: color_azul,
    },
  
    mario: {
      margin: 10,
      height: 70,
      width: 310,
    },
  
    container: {
      marginTop: 0,
      // backgroundColor: color_azul,
      height: "120%",
      alignItems: "center",
      alignContent: "center",
      padding: 8,
    },
  
    containerLogin: {
      margin: "auto",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      width: 320,
  
      // borderColor: color_negro,
      // backgroundColor: color_blanco,
      padding: 10,
    },
  
    input: {
      textAlign: "center",
      height: 35,
      borderWidth: 2,
      // borderColor: color_azul,
      paddingHorizontal: 70,
      marginLeft: "2%",
      marginRight: "2%",
      // borderColor: "#ddd",
      // backgroundColor: "#fff",
      marginBottom: 15,
      borderRadius: 8,
    },
    submitContainer: {
      alignItems: "center",
    },
    ImageButton: {
      marginTop: "10%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      marginBottom: "8%",
      width: 250,
      height: 250,
      padding: 0,
      // backgroundColor: color_blanco,
      borderRadius: 125,
    },
    miniButton: {
      marginTop: 15,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      marginBottom: "8%",
      height: 60,
      width: "50%",
      padding: 0,
      // backgroundColor: color_azul,
      borderRadius: 8,
    },
    error: {
      textAlign: "center",
      marginTop: -15,
      fontSize: 14,
      color: "red",
      fontWeight: "bold",
    },
    buttonText: {
      textAlign: "center",
      padding: 10,
      fontSize: 15,
      fontWeight: "bold",
      // color: color_blanco,
    },
    buttonGoogle: {
      marginTop: "10%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 20,
    },
    imageGoogle: {
      height: 40,
      width: 250,
    },
  
    boxcontainercheckbox: {
      flex: 1,
      alignItems: "center",
    },
  
    checkboxSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkboxParagraph: {
      // color: color_negro,
      fontSize: 12,
    },
    checkbox: {
      margin: 8,
    },
  });