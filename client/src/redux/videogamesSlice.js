import { createSlice } from "@reduxjs/toolkit";

const initialState={
    videoGames:[],
    videoGames_Prev:[],
    videoGame:[],
    msgerror:"NULL",
    flag_prev:false,
    videoGame:[],
    pagina:1,
    porPagina:15,
    input:1,
    maximo:0,
    msgerror:"NULL",

}
export const videogamesSlice= createSlice({
    name: "videogames",
    initialState,
    reducers:{//noc xq pero aqui es plural
        getAllVideogames: (state,action)=>{
            
            state.videoGames= action.payload;
        },
        getVideogamebyId: (state,action)=>{
            state.videoGame=action.payload
        },
        
        

    }
})

export const {getAllVideogames,getVideogamebyId,addUser}=videogamesSlice.actions
export default videogamesSlice.reducer