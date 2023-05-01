import { Link } from "expo-router";
import React , { FC, useRef } from "react";
import {TouchableOpacity, Text, View, Image , Linking } from "react-native";



////Acá podemos pasar como props los datos del usuarios para que este
////componente sea netamente visual y el codigo quede mas prolijo

interface MyProfileProps {
  linkImage: string;
  name: string,
  email: string,
  dni: string,
}

interface ChangeProfileProps {
    linkChangeImage: string;
    linkChangeName: string,
    linkChangeEmail: string,
    linkChangeDni: string,
  }


  interface Props {
    MyProfileProps : MyProfileProps,
    ChangeProfileProps: ChangeProfileProps,
  }
  

      


const MyProfile: FC <Props> = ({ MyProfileProps , ChangeProfileProps }) => {
  return (
    <View>
      <View>
        <Image source={{ uri: MyProfileProps.linkImage }}/>
      </View>
      <View>
        <Link href="/changename">Name {MyProfileProps.name}</Link>
      </View>
      <View>
        <Link href="/changename">E-mail {MyProfileProps.email}</Link>
      </View>
      <View>
      <Link href="/changename">DNI {MyProfileProps.dni}</Link>
      </View>
    </View>
  );
};
