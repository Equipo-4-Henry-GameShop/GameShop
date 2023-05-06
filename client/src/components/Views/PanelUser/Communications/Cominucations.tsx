import { Link } from "expo-router";
import {Text, View} from "react-native";
import {FC} from "react"

////Acá podemos pasar como props los datos del usuarios para que este 
////componente sea netamente visual y el codigo quede mas prolijo



const Communications : FC = () => {
    return (
      <View>
        <View>
          <Link href="/MyProfile">My profile</Link>
        </View>
        <View>
          <Link href="/Security">Security</Link>
        </View>
        <View>
          <Link href="/Communications">Communications</Link>
        </View>
        <View>
          <Link href="/Myposts">Communications</Link>
        </View>
        <View>
          <Link href="/Preferences">Communications</Link>
        </View>
      </View>
    );
  };