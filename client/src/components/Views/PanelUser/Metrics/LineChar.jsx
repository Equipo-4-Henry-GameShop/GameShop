import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const ventas = [0, 56, 20, 36, 80, 40, 10, 1];
const videogames = [
  'Firewatch',
  'The Witcher 3: Wild Hunt',
  'Tomb Raider (2013)',
  'The Elder Scrolls V: Skyrim',
  'God of War (2018)',
  'Terraria',
  'Warframe',
  'Grand Theft Auto IV',
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

const LinesChart = () => {
  return (
    <LineChart
      data={midata}
      width={screenWidth}
      height={200}
      yAxisLabel="$"
      yAxisInterval={1}
      chartConfig={misoptions.chartConfig}
      bezier
    />
  );
};

export default LinesChart;