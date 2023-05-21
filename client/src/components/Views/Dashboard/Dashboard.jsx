// components/Dashboard.js
import React from 'react';
import { View } from 'react-native';
import Chart from './LinesChart';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setUsers, setStatistics } from '../reducers/dashboardSlice';
import  LinesChart from "./LinesChart"; 

const Dashboard = ({ users, statistics, fetchUsers, fetchStatistics }) => {
  useEffect(() => {
    // Obtener los datos iniciales para el dashboard
    fetchUsers();
    fetchStatistics();
  }, [fetchUsers, fetchStatistics]);

  return (
    <View>
      <Text>Usuarios:</Text>
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
      <Text>Estadísticas:</Text>
      {/* Mostrar las estadísticas relevantes en tu dashboard */}
    </View>
  );
};

const mapStateToProps = (state) => ({
  users: state.dashboard.users,
  statistics: state.dashboard.statistics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    // Lógica para obtener los usuarios y actualizar el estado
    const users = [...]; // Datos obtenidos desde una API o una base de datos
    dispatch(setUsers(users));
  },
  fetchStatistics: () => {
    // Lógica para obtener las estadísticas y actualizar el estado
    const statistics = {...}; // Datos obtenidos desde una API o una base de datos
    dispatch(setStatistics(statistics));
  },

  {<LinesChart />}

});

export default connect(mapStateToProps, mapDispatchToProps,  )(Dashboard);
