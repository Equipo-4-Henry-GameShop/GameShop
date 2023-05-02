import {configureStore} from "@reduxjs/toolkit";
import videogamesReducer from "./videogamesSlice";
import userReducer from "./usersSlices"
export default configureStore({
    reducer:{
        videogamesState: videogamesReducer,
        usersState: userReducer
    }
})