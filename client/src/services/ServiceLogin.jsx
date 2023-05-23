import axios from "axios"
import {persons} from '../../src/utils/arrayPersons'
const baseURL = "https://gameshop-production-e844.up.railway.app/user"


// modo  HardCode
export const logService = async credentials =>{
  const {user, password}=credentials
  // console.log("que ahay en persons",persons)
  console.log("usuario recibido x parametros",credentials.password)
  const resultUser=persons.find(el=> el.user===user && el.password=== password)
  return resultUser
  
}
// export const logService = async credentials =>{
//     const { data } = await axios.post(baseURL, credentials)
//     return data
  // }
  