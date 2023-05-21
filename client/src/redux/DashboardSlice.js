// reducers/dashboardSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  statistics: {},
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setStatistics: (state, action) => {
      state.statistics = action.payload;
    },
  },
});

export const { setUsers, setStatistics } = dashboardSlice.actions;
export default dashboardSlice.reducer;
