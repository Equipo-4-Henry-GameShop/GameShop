import {getAllVideogames, addUser,setNextPage,setPrevPage,setMaxPage} from "./videogamesSlice";
import axios from "axios";
import {videogames} from '../utils/dataVideojuegos'

export const  getvideoGames = () =>(dispatch)=>{
       // axios("http://localhost:3001/videogames")
    //notax ahora no usamos data de api o servidor para no tener problemas de nombre de campos
    //lo haremos directamente desde el arreglo q se cargara al STORE
    // console.log("data--->",videogames)
    dispatch(getAllVideogames(videogames))
    // axios("https://api.rawg.io/api/games?key=17524152b930472da51fd07c66dc681c")
    // .then(res => dispatch(getAllVideogames(res.data.results)))
    // .catch(e=>console.log(e))
}
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