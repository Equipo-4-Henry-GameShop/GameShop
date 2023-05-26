import {configureStore} from "@reduxjs/toolkit";
import videogamesReducer from "./videogamesSlice";
import userReducer from "./usersSlices"
import carReducer from "./cartSlice"
import salesReducer from "./salesSlice"

export default configureStore({
    reducer:{
        videogamesState: videogamesReducer,
        usersState: userReducer,
        cartState: carReducer,
        salesState: salesReducer,
    }
})