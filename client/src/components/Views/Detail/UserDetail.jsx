import { useEffect } from "react"
import { CardUserDetail } from "../../helpers/CarduserDetail"
import { getAllUsers, getUserByID } from "../../../redux/userActions"
import { useDispatch, useSelector } from "react-redux"



export const UserDetail=(props)=>{
    const dataUser = useSelector((state)=>(state.usersState.dataUser))
    
    const dispatch= useDispatch()
    
useEffect(() => {
    dispatch(getUserByID(props.id));
  }, []);



    console.log(dataUser)

    return(

    
    <CardUserDetail
    image={dataUser.image}
    user={dataUser.user}
    phone={dataUser.phone}
    date={dataUser.date}


    />
)}