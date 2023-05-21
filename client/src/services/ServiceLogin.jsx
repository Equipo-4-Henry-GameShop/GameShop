import axios from "axios"

const baseURL = "https://gameshop-production-e844.up.railway.app/user"



export const logService = async credentials =>{
    const { data } = await axios.post(baseURL, credentials)
    return data
  }
  