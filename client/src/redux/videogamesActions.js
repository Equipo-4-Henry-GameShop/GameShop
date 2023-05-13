import {getAllVideogames, addUser,setNextPage,setPrevPage,setMaxPage,
    setFlaPrev,setFirstPage,getVideogamesbyName,setPrevVideoGame,updateVideogames} from "./videogamesSlice";
import axios from "axios";
import {videogames} from '../utils/dataVideojuegos'

let estado=0
export const  getvideoGames = () =>(dispatch)=>{
  
//    dispatch(getAllVideogames(videogames))
   
    axios("/games")
    .then(res => dispatch(getAllVideogames(res.data)))
    .catch(e=>console.log("error en la ruta" ,e))
}

export const getvGamebyName =(query)=> (dispatch=>{
    // console.log("esto me llega de query",query)
    fetch(`/games?name=${query}`)
            .then(response =>{
                estado= response.status
                return response.json()
            })
            .then(json =>{
                if(estado ===200)
                // {
                   if(json.includes('No se encontraron videojuegos con el nombre') ) 
                         alert('No se encontraron videojuegos con ese Nombre')
                    else 
                        dispatch(getVideogamesbyName(json))
              
            }).catch(error =>{
                dispatch({ type: SET_ERROR,
                        payload: error.message
                })
            })
   
})


export const getUser = () =>(dispatch)=>{
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res) =>res.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((error)=> console.log(error))
}

export const setNxtPage=()=>{
    return  function(dispatch){
           dispatch(setNextPage())
    }
}

export const setPrvPage=()=>{
    return  function(dispatch){
           dispatch(setPrevPage())
    }
}

export const setMxPage=(maximo)=>{
    
    return  function(dispatch){
           dispatch(setMaxPage(maximo))
    }
}
export const set1rsPage=()=>{
    return function(dispatch){
        dispatch(setFirstPage())
    }
}
export const setflgPrev=(value)=>{
    return function(dispatch){
        dispatch(setFlaPrev(value))
    }    
}

export const setPrvVideogame=()=>{
    return function(dispatch){
        dispatch(setPrevVideoGame())
}
}

export const updateVgames=(data)=>{
    return function(dispatch){
        dispatch(updateVideogames(data))
    }
}