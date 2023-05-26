
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet } from "react-native";
import { useEffect } from 'react'
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"

import {getAllSales} from "../../../../redux/salesActions"

const ventas = [0, 56, 20, 36, 80];
const videogames = [
  'Resident Evil 5',
  'The Witcher 3: Wild Hunt',
  'Tomb Raider (2013)',
  'The Elder Scrolls V: Skyrim',
  'God of War (2018)',
];

const midata = {
  labels: videogames,
  datasets: [
    {

      data: ventas,
      color: (opacity = 1) => `rgba(21, 101, 192, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const misoptions = {
  yAxisLabel: '$',
  xAxisLabel: 'Video Games',
  chartConfig: {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(1, 87, 155, ${opacity})`,
    style: {
      borderRadius: 16,
    },

  },
};

const MyBezierLineChart = () => {
const dispatch = useDispatch()
const Sales = useSelector((state)=>state.salesState)

useEffect(()=>{
  dispatch(getAllSales())
},[])


console.log("MIIIIIIIII SALE", Sales.allSales)
const amounts = Sales.allSales.map(transaction => transaction.amount);
  const labels = Sales.allSales.map(transaction => {
    const date = new Date(transaction.date);
    const month = date.toLocaleString('default', { month: 'short' });
    return month;
  });

  console.log("MIIIIII AMOUNT",amounts)
  console.log("MIIIIII LABEL",labels)

  // Datos para el gráfico
  const data = {
    labels,
    datasets: [
      {
        data: amounts,
      },
    ],
  };

  // ===============modal filter state=========
  




  return (
    <View style={styles.container}>
    <LineChart
        data={midata}
        width={400}
        height={700}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          
        }}
        bezier
        
        withInnerLines={true} // Mostrar las líneas internas del gráfico
        withOuterLines={true} // Mostrar las líneas externas del gráfico
        verticalLabelRotation={90}
        
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
});

export default MyBezierLineChart;




// const dataVentas = [0, 56, 20, 36, 80];
// const dataVideogames = [
//   "Resident Evil 5",
//   "The Witcher 3: Wild Hunt",
//   "Tomb Raider (2013)",
//   "The Elder Scrolls V: Skyrim",
//   "God of War (2018)",
// ];

// const myData = {
//   labels: dataVideogames,
//   datasets: [
//     {
//       data: dataVentas,
//       color: (opacity = 1) => `rgba(21,101,192, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

// const myOptions = {
//   xAxisLabel: "videogames",
//   chartConfig: {
//     backgroundColor: "blue",
//     backgroundGradientFrom: "skyblue",
//     backgroundGradientTo: "lightblue",
//     decimalPlaces: 1,
//     color: (opacity = 225) => `rgba (1,87,155, ${opacity})`,
//   },
//   style: {
//     borderRadius: 16,
//   },
// };

// const MyBezierLineChart = () => {
//   return (
//     <LineChart
//       data={myData}
//       width={Dimensions.get("window").width - 16}
//       height={250}
//       yAxisLabel={"Rs"}
//       chartConfig={myOptions.chartConfig}
//       verticalLabelRotation={15}
//       bezier
//     />
//   );
// };

// export default MyBezierLineChart;
