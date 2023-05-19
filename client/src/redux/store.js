import {configureStore} from "@reduxjs/toolkit";
import videogamesReducer from "./videogamesSlice";
import userReducer from "./usersSlices"
import platformReducer from "./platformSlice"
import screenReducer from "./screenSlice"
import carReducer from "./cart"

export default configureStore({
    reducer:{
        videogamesState: videogamesReducer,
        usersState: userReducer,
        // imgPlatformState: platformReducer,
        // imgScreenState: screenReducer,
        cartState: carReducer
    }
})