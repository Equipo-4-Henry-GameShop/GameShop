import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

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
  return (
    <LineChart
      data={midata}
      margin-left={- 15}
      width={Dimensions.get("window").width - 16}
      height={300}
      yAxisLabel={''}
      yAxisInterval={1}
      chartConfig={misoptions.chartConfig}
      verticalLabelRotation={20}
      bezier
    />
  );
};

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
