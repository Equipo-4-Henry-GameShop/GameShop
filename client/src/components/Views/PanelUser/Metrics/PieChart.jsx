import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  { gender: 'Male', count: 25 },
  { gender: 'Female', count: 35 },
];

const chartData = data.map(item => ({
  name: item.gender,
  population: item.count,
  color: item.gender === 'Male' ? '#2196F3' : '#F44336',
  legendFontColor: '#7F7F7F',
  legendFontSize: 12,
}));

const MyPieChart = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={chartData}
        width={400}
        height={300}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    left:20
  },
});

export default MyPieChart;
