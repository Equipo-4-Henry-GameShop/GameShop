import { useEffect } from "react";
import { CardUserDetail } from "../../helpers/CarduserDetail";
import { getAllUsers, getUserByID } from "../../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";

export const UserDetail = (props) => {
  const dataUser = useSelector((state) => state.usersState.dataUser);
  const dispatch = useDispatch();
  

  console.log(props)

  useEffect(() => {
    dispatch(getUserByID(props.id));
  }, []);
  
  console.log(dataUser);

  return (
    <CardUserDetail
      image={dataUser.image}
      User={dataUser.user}
      fullname={dataUser.fullname}
      email={dataUser.email}
      date={dataUser.date}
      phone={dataUser.phone}
      shoppings={dataUser.date}
    />
  );
};
