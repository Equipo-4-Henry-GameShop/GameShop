import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataSale: [],
  allSales: [],
  allSlsUsr: "",
  salesMsgErr: "",
};
export const UsersSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    getDataSl: (state, action) => {
      state.dataSale = action.payload;
    },
    getAllSls: (state, action) => {
      console.log("SAALEEEEEEES DESDE SLICE", action.payload)
      state.allSales = action.payload;
    },
    getAllSlsUser: (state, action) => {
      state.allSlsUsr = action.payload;
    },
    slsMsgErr: (state, action) => {
      state.salesMsgErr = action.payload;
    },
  },
});
export const { getDataSl, getAllSls, slsMsgErr, getAllSlsUser } = UsersSlice.actions;
export default UsersSlice.reducer;
