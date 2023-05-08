import { createSlice } from "@reduxjs/toolkit";

const initialState={
    videoGames:[],//280   -> action = ->80  -> rpg = 60 -> prev  =280
    videoGames_Prev:[],//280 -> 280 = ->80
    videoGame:[],
    msgerror:"NULL",
    flag_prev:false,
    videoGame:[],
    pagina:1,
    porPagina:12,
    input:1,
    maximo:0,
    msgerror:"NULL",

}
export const videogamesSlice= createSlice({
    name: "videogames",
    initialState,
    reducers:{//noc xq pero aqui es plural
        getAllVideogames: (state,action)=>{
            // console.log("lo q llega a reducer",action.payload)

            state.videoGames= action.payload;
        },
        getVideogamesbyName: (state,action)=>{
            state.videoGames= action.payload;
        },
        setPrevVideoGame: (state,action)=>{
            state.videoGames_Prev= action.payload;
        },
        getVideogamebyId: (state,action)=>{
            state.videoGame=action.payload
        },
        setNextPage: (state,action)=>{
            state.pagina=state.pagina +1 
        },
        setPrevPage: (state,action)=>{
            state.pagina=state.pagina -1
        },
        setMaxPage : (state,action)=>{
            state.pagina=action.payload
        },

    }
})

export const {getAllVideogames,getVideogamebyId,addUser,setNextPage,
              setPrevPage,setMaxPage,getVideogamesbyName,setPrevVideoGame}=videogamesSlice.actions
export default videogamesSlice.reducer