import React, { useState } from 'react';
import { useEffect } from 'react'

import { BarChart } from "react-native-chart-kit";
import { Dimensions, View ,StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux"

import {getAllSales} from "../../../../redux/salesActions"

const screenWidth = Dimensions.get("window").width;

const rating = [3.81, 4.66, 4.05, 4.42, 4.59];
const videogames = [
  "Resident Evil 5",
  "The Witcher 3: Wild Hunt",
  "Tomb Raider (2013)",
  "The Elder Scrolls V: Skyrim",
  "God of War (2018)",
];

const data = {
  labels: videogames,
  datasets: [
    {
      data: rating,
      color: (opacity = 1) => `rgba(21, 101, 192, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const options = {
  yAxisLabel: "$",
  xAxisLabel: "Video Games",
  chartConfig: {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(1, 87, 155, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
};

const MyBarChart = () => {
  const dispatch = useDispatch()
  const Sales = useSelector((state)=>state.salesState)
  
  useEffect(()=>{
    dispatch(getAllSales())
  },[])
  const barChartData = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };
 
  // Contar la cantidad de items por usuario
  // const itemCounts = {};
  // Sales.allSales.forEach((item) => {
  //   const user = item.user.fullname;
  //   if (itemCounts[user]) {
  //     itemCounts[user]++;
  //   } else {
  //     itemCounts[user] = 1;
  //   }
  // });

  // // Extraer los datos del objeto itemCounts y agregarlos al objeto "data"
  // Object.entries(itemCounts).forEach(([user, count]) => {
  //   data.labels.push(user);
  //   data.datasets[0].data.push(count);
  // });

  const jsonData = {
    usuarios: [
      { nombre: 'Juan Diego', items: 5 },
      { nombre: 'Leandro', items: 8 },
      { nombre: 'Fabio', items: 3 },
      { nombre: 'Ivan', items: 6 },
      { nombre: 'Jose', items: 10 },
    ],
  };

  // Extraer los datos del JSON y agregarlos al objeto "data"
  jsonData.usuarios.forEach((usuario) => {
    barChartData.labels.push(usuario.nombre);
    barChartData.datasets[0].data.push(usuario.items.length);
  });
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        verticalLabelRotation={90} // Ajustar el ángulo de rotación de las etiquetas
        showValuesOnTopOfBars // Mostrar los valores encima de las barras
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
export default MyBarChart;
