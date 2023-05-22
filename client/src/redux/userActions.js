import { Alert } from "react-native";
import {
  getAllUsr,
  getUsrByID,
  getUsrByName,
  gamesUsr,
  updateUsr,
  usrMsgErr,
} from "./usersSlices";
import axios from "axios";

export const getUserByID = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `https://gameshop-production-e844.up.railway.app/user/${id}`,
          token
        );
  
        const dataUser = response.data;
  
        if (dataUser) {
          dispatch(getUsrByID(dataUser));
        } else {
          dispatch(usrMsgErr("No user registration"));
        }
      } catch (err) {
        console.log(`Error: ${err}`);
        dispatch(usrMsgErr(err));
      }
    };
  };

  export const getUserByName = (name) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `https://gameshop-production-e844.up.railway.app/user?name=${name}`
        );
  
        const dataUser = response.data;
  
        if (dataUser) {
          dispatch(getUsrByName(dataUser));
        } else {
          dispatch(usrMsgErr("No user registration"));
        }
      } catch (err) {
        console.log(`Error: ${err}`);
        dispatch(usrMsgErr(err));
      }
    };
  };

  export const getAllUsers = async () => {
    return async (dispatch) => {
      try {
        const data = await axios.get(
          `https://gameshop-production-e844.up.railway.app/user`
        );
  
        const dataUsers = data.data;
  
        dataUsers
          ? dispatch(getAllUsr(dataUsers))
          : dispatch(usrMsgErr("No user registration"));
      } catch (err) {
        console.log(`Error: ${err}`);
  
        dispatch(usrMsgErr(err));
      }
    };
  };

  export const updateUsr = async (id, newData) => {
    const oldData = { ...newData };
    try {
      const response = await axios.put(
        `https://gameshop-production-e844.up.railway.app/user/update/${id}`,
        newData
      );
  
      const changedFields = [];
      for (const key in newData) {
        if (oldData[key] !== response.data[key]) {
          changedFields.push(key);
        }
      }
  
      // Aquí se comparan los cambios
      let message = "Was modified: ";
      for (const field of changedFields) {
        message += `${field}: ${oldData[field]} -> ${response.data[field]}, `;
      }
      message = message.slice(0, -2); // Eliminar la coma y el espacio al final
  
      Alert.alert("Changes made:", message);
    } catch (err) {
      Alert.alert("Something went wrong", "error updating data");
      console.log("error updating data", err);
    }
  };

// Esta ruta ta rara... para mi es la misma q la de
//traer users por nombre xD mejor consulto. No voy a trabajar al pedo...
// const getGamesUser=(name)=>{{}
// return async (dispatch) => {

// const userhttps://gameshopback-pf-ek5y.onrender.com/user?name=${name}


// }}

//   // https://gameshopback-pf-ek5y.onrender.com/uiser/update/19710
// //   updateuser: (state, action) =>{
// //       state.dataUser = action.payload
// //   },
// //   gamesUser: (state,action) =>{
// //       state.dataUser = action.payload
// //   }
