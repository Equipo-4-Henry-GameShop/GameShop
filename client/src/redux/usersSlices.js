import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    name:"",
    username:"",
    email:""
}
export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            
            const {name,username,email}= action.payload;

            state.name=name;
            state.username=username;
            state.email=username;
        }
    }
})
export const {addUser}= UsersSlice.actions
export default UsersSlice.reducer
