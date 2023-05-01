import { Link } from "expo-router";
import {Text, View} from "react-native";
import {MyProfile} from "./MyProfile"

////Acá podemos pasar como props los datos del usuarios para que este 
////componente sea netamente visual y el codigo quede mas prolijo

type UserProps ={
    
}


const PanelUser=(props)=>{
    return(
        
        <View>
            <View><Link to=/MyProfile>My profile:string</Link></View>
            <Link> <Text></Text></Link>
            <Link> <Text></Text></Link>

           

        </View>
    )
}