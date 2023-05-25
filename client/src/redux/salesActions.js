import axios from "axios";
import { getAllSls, slsMsgErr } from "./salesSlice";

export const getAllSales = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://gameshop-production-e844.up.railway.app/sales"
      );
      const dataSales = response.data;
      dataSales
        ? dispatch(getAllSls(dataSales))
        : dispatch(slsMsgErr("No sales registration"));
    } catch (err) {
      console.log(`Error: ${err}`);
      dispatch(slsMsgErr(err));
    }
  };
};

export const getAllSalesUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://gameshop-production-e844.up.railway.app/sales/${id}`
      );
      const dataSales = response.data;
      dataSales
        ? dispatch(getAllSlsUser(dataSales))
        : dispatch(slsMsgErr("No sales registration"));
    } catch (err) {
      console.log(`Error: ${err}`);
      dispatch(slsMsgErr(err));
    }
  };
};
