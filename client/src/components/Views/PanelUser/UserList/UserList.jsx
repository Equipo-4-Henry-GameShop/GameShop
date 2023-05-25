import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
} from "react-native";
import CardDataPanel from "../../../helpers/CardDataPanel";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/userActions";
import { color_azul, color_blanco, color_negro } from "../../../../constants/Colors";
import { persons } from "../../../../utils/arrayPersons";

export const UserList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.usersState.allUsers);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    dispatch(getAllUsers());
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, []);

  console.log(allUsers);

  const imageDefault = "https://img.freepik.com/iconos-gratis/usuario_318-644324.jpg?w=360";

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
        <Image source={{url : "https://media.tenor.com/sHqEVx12ZVkAAAAM/mario-super.gif"}} style={{width:500, height:300, alignItems:"center", alignContent:"center", justifyContent:"center"}}/>
      </View>
    );
  }
  if (!allUsers.length) {
    return (
      <View>
        <Text>There are no users</Text>
      </View>
    );
  }

  return (
    <View>
      {allUsers.map((user) => (
        <TouchableOpacity
          key={user.id}
          onPress={() => navigation.navigate("UserDetail", { id: user.id })}
        >
          <CardDataPanel fullname={user.fullname} image={user.image || imageDefault} name={user.user} id={user.id} email={user.email} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
