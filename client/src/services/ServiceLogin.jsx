import axios from "axios"
import {persons} from '../../src/utils/arrayPersons'
const baseURL = "https://gameshop-production-e844.up.railway.app/login"


export const logService = async credentials =>{
  const {user, password}=credentials
  // console.log("que ahay en persons",persons)
  console.log("usuario recibido x parametros",credentials.password)
  
  const objCred = {
    user: credentials.user,
    password: credentials.password
  };
  
  // const queryParams = JSON.stringify(objCred);
  // axios.get("https://gameshop-production-e844.up.railway.app/login", objCred)
  //   .then((response) => {
  //     console.log("respuesta", response.data);
  //     // Manejar la respuesta
  //   })
  //   .catch((error) => {
  //     // Manejar el error
  //     console.log("error", error);
  //   });
  


  // modo  HardCode
    const resultUser=persons.find(el=> el.user===user && el.password=== password)
  
  return resultUser
  
}
// export const logService = async credentials =>{
//     const { data } = await axios.post(baseURL, credentials)
//     return data
  // }
  