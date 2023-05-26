import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions, View ,StyleSheet} from "react-native";

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
  return (
    <View style={styles.container}>
      <BarChart
      data={data}
      width={screenWidth}
      height={300}
      yAxisLabel=""
      chartConfig={options.chartConfig}
      verticalLabelRotation={20}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 2,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    left: 10,
  },
});
export default MyBarChart;
