import axios from "axios"
import {persons} from '../../src/utils/arrayPersons'
const baseURL = "https://gameshop-production-e844.up.railway.app/login"


export const logService = async credentials => {
  const { user, password } = credentials;

  const objCred = {
    user: credentials.user,
    password: credentials.password
  };

  try {
    const response = await axios.post("https://gameshop-production-e844.up.railway.app/login", objCred);
    const data = response.data;
    // console.log("respuesta", data);
    return data;
  } catch (error) {
    console.log("Error en consulta Axios", error);
    return null;
  }
};

// export const logService = async credentials =>{
//     const { data } = await axios.post(baseURL, credentials)
//     return data
  // }
  