import { createSlice } from "@reduxjs/toolkit";

const initialState={
    videoGames:[],//280   -> action = ->80  -> rpg = 60 -> prev  =280
    videoGames_Prev:[],//280 -> 280 = ->80
    videoGame:[],
    msgerror:"NULL",
    flag_prev:false,
    videoGame:[],

    filteredVideoGames: [],
    allGenres: [],


    orderABC: "",
    orderPrice:"",
    orderRating:"",
    FilterGenre:"",
    platformState: "",


    pagina:1,
    porPagina:12,
    input:1,
    maximo:0,
}
export const videogamesSlice= createSlice({
    name: "videogames",
    initialState,
    reducers:{//noc xq pero aqui es plural
        getAllVideogames: (state,action)=>{
            // console.log("lo q llega a reducer",action.payload)

            state.videoGames= action.payload;
            state.filteredVideoGames = action.payload;
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
        setFirstPage : (state,action)=>{
            state.pagina=1
        },
        setFlaPrev: (state,action)=>{
            state.flag_prev=action.payload
        },
        setPrevVideoGame:(state,action)=>{
            state.videoGames_Prev=action.payload
        },
        updateVideogames:(state,action)=>{
            state.videoGames=action.payload
        },
        setErrorMsg:(state,action)=>{
            state.msgerror= action.payload
        },
        //========================FILTRO PRICE SOLO CON RUTA ============================

        FilterByPriceDesc:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.orderPrice=action.payload
        },
        FilterByPriceAsc:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.orderPrice=action.payload

            
        },

        //=========================================================================
        //================================FILTRO COMBINADO PRICE=========================================


        FilterByPriceDescDOS:(state,action)=>{
            
            state.filteredVideoGames =state.filteredVideoGames.sort((a, b) => b.price - a.price)
            state.orderPrice=action.payload
        },
        FilterByPriceAscDOS:(state,action)=>{
            
           
            state.filteredVideoGames =state.filteredVideoGames.sort((a, b) => a.price - b.price)

            state.orderPrice=action.payload

            
        },
        //========================FILTRO RATING SOLO CON RUTA ============================
        FilterByRatingDesc:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.orderRating=action.payload
        },
        FilterByRatingAsc:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.orderRating=action.payload

        },

        //===============================================================
        //======================FILTRO RATING COMBINADO SIN ruta==================
        FilterByRatingDescDOS:(state,action)=>{
          const Filtered =  state.videoGames.sort(
            (a, b) => a.rating - b.rating
    )
            console.log(Filtered)
            
            state.filteredVideoGames =Filtered
            
            // state.orderRating=action.payload
        },
        FilterByRatingAscDOS:(state,action)=>{
            const Filtered = state.videoGames.sort(
                (a, b) => b.rating - a.rating
            )
           
            console.log(Filtered)
            
            
            
            state.filteredVideoGames = Filtered
            // state.orderRating=action.payload
        

        },

        //===============================================================
        

        //========================FILTRO ABC SOLO CON RUTA ============================

        FilterZtoA:(state,action)=>{

            
            state.filteredVideoGames = action.payload;
            state.orderABC=action.payload
        },
        FilterAtoZ:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.orderABC=action.payload

        },
        //===================================================

        //========================FILTRO ABC HACIENDO USO DEL PISADO============================

        FilterByAtoZDos:(state,action)=>{
          
            const Filtered=state.videoGames.sort((a, b) =>
            a.name.localeCompare(b.name)
        )
            
            state.filteredVideoGames = Filtered
        
            state.orderABC=action.payload
        },

        FilterByZtoADOS:(state,action)=>{
            const Filtered=state.videoGames.sort((a, b) => b.name.localeCompare(a.name))
        
            state.filteredVideoGames = Filtered
            state.orderABC=action.payload
        },

        //===================================================

        FilterBYPlataform:(state,action)=>{
            
            state.filteredVideoGames = action.payload;
            state.platformState=action.payload

        },


        FilterByPlatformDOS:(state,action)=>{
        //   console.log('My action', state.filteredVideoGames)
            const filtered=[]
            for(const i of state.videoGames){

            i['platforms'].forEach(element => {
                if(element.toLowerCase().includes(action.payload.toLowerCase())){
                filtered.push(i)
            }
        });
        
    }
    console.log(filtered)

            state.filteredVideoGames = filtered

            // console.log(state.filteredVideoGames)
            

            
        },

        AllGenresVideoGame:(state,action)=>{
            state.allGenres=action.payload
        },
        FilterByGenre:(state,action)=>{
            const filtered=[]
            for(const i of state.filteredVideoGames){
              if(i['genre']?.includes(action.payload)){
                filtered.push(i)
              }
            }
            // console.log(filtered)
            // console.log(state.filteredVideoGames)
      state.filteredVideoGames = filtered
    //   state.filterGenre = action.payload;  
     },
     EmptyFilteredvideogames:(state,action)=>{
        state.filteredVideoGames=[];
    },
    }
})

export const {getAllVideogames,getVideogamebyId,addUser,setNextPage,setFirstPage,setFlaPrev,setErrorMsg,
              setPrevPage,setMaxPage,getVideogamesbyName,setPrevVideoGame,updateVideogames,
              FilterByPriceDesc,FilterByPriceAsc,FilterByRatingDesc,FilterByRatingAsc,FilterZtoA,FilterAtoZ, FilterBYPlataform,AllGenresVideoGame, FilterByGenre,
            
              FilterByAtoZDos, FilterByZtoADOS, FilterByRatingDescDOS, FilterByRatingAscDOS, FilterByPriceDescDOS, FilterByPriceAscDOS, FilterByPlatformDOS, EmptyFilteredvideogames
            }=videogamesSlice.actions
export default videogamesSlice.reducer
