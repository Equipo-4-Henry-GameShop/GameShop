import axios from "axios";
import { getAllSls, slsMsgErr } from "./salesSlice";
import { apiSales } from "../utils/apiArraySales";


export const getAllSales = () => (dispatch)=>{
  
  dispatch(getAllSls(apiSales))
  
  // fetch("ttps://gameshop-production-e844.up.railway.app/sales")
  //   .then((res) =>res.json())
  //   .then((data)=> dispatch(getAllSls(data)))
  //   .catch((error)=> console.log("ERRROOOOR AL TRAER VENTAS", error))


  // axios("https://gameshop-production-e844.up.railway.app/sales")
  //   .then(res=>dispatch(getAllSls(res.data)))
  //   .catch(e=>console.log("ERRROOOOR AL TRAER VENTAS", e))
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
