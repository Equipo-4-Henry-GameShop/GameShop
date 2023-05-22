import {getAllUsr , getUsrByID, getUsrByName, gamesUsr, updateUsr, usrMsgErr} from "./usersSlices";
import axios from "axios";







const getUserByID = async(id)=>{
    try{
    const data = await axios.get(`https://gameshopback-pf-ek5y.onrender.com/user/${id}`, token)

    const dataUser = data.data 

    dataUser ? dispatch(getUsrByID(dataUser))  :

    dispatch(usrMsgErr("No user registration"))

}catch{ (err)=>{ 
    console.log(`Error: ${err}`)

    dispatch(usrMsgErr(err))
    
}
}
  getUserByName: (state, action) => {
      state.dataUser = action.payload;
    },
  getAllUsers: (state, action) => {
    state.allUsers = action.payload;
  },
  updateuser: (state, action) =>{
      state.dataUser = action.payload
  },
  gamesUser: (state,action) =>{
      state.dataUser = action.payload 
  }