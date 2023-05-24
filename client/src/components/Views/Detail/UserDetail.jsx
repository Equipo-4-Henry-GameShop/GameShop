
import React from "react";

import { useEffect } from "react";
import { CardUserDetail } from "../../helpers/CarduserDetail";
import { getUserByID } from "../../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

export const UserDetail = (props) => {
  const dataUser = useSelector((state) => state.usersState.dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByID(props.route.params.id));
  }, [dispatch, props.route.params.id]);

  if (!dataUser.user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View key={dataUser.id}>
      <CardUserDetail
        image={dataUser.image}
        User={dataUser.user}
        fullname={dataUser.fullname}
        email={dataUser.email}
        date={dataUser.date}
        phone={dataUser.phone}
        shoppings={dataUser.date}
      />
    </View>
  );
};
