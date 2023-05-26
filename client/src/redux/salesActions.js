import axios from "axios";
import { getAllSls, slsMsgErr, getAllSlsUser } from "./salesSlice";
import { apiSales } from "../utils/apiArraySales";


export const getAllSales = () => (dispatch)=>{
  
  dispatch(getAllSls(apiSales))
}; 


// export const getAllSales = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         "https://gameshop-production-e844.up.railway.app/sales"
//       );
//       const dataSales = response.data;
//       dataSales
//         ? dispatch(getAllSls(dataSales))
//         : dispatch(slsMsgErr("No sales registration"));
//     } catch (err) {
//       console.log(`Error: ${err}`);
//       dispatch(slsMsgErr(err));
//     }
//   };
// };

export const getAllSalesUser = (id) => {
  return async (dispatch) => {
    console.log(`params${id}`)
    try {
      const response = await axios.get(
        `https://gameshop-production-e844.up.railway.app/sales/${id}`
      );
      // console.log(`Response${JSON.stringify(response)}`)
      const dataSales = response.data;
      // console.log(`Response${dataSales}`)
      const dataString = response.toString()
      // console.log(`DataSale${dataString}`)
      if(dataSales.length){
        dispatch(getAllSlsUser(dataSales))}else{
        dispatch(slsMsgErr("No sales registration"));}
    } catch (err) {
      dispatch(slsMsgErr(err));
      console.log(`Error: ${err}`);
    }
  };
};
