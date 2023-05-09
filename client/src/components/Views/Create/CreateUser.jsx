// import React, { useState, useEffect } from "react";

// import {
//   Text,
//   Button,
//   TextInput,
//   View,
//   TouchableHighlight,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { Checkbox } from "expo-checkbox";

// const CreateUser = (props) => {
//   const [AcceptTaC, setAcceptTac] = useState(false);
//   const [receibeNewsLetter, setReceibeNewsLetter] = useState(false);
//   const [dataUser, setDataUser] = useState({
//     user: "",
//     password: "",
//     fullname: "",
//     email: "",
//     date: "",
//     number: "",
//     tac: AcceptTaC,
//     newsLetter: receibeNewsLetter,
//   });
//   const [errors, setErrors] = useState({
//     user: "",
//     password: "",
//     fullname: "",
//     email: "",
//     date: "",
//     number: "",
//     tac: "",
//     newsLetter: "",
//   });
//   const validate = (dataUser) => {
//     const errors = {};
//     if (dataUser.user === "") {
//       setErrors({ ...errors, user: "Missing enter name" });
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(dataUser.user)) {
//       setErrors({
//         ...errors,
//         user: "The user must only have 4-16 digits and can only contain letters, numbers and underscores.",
//       });
//     } else {
//       setErrors({ ...errors, user: "" });
//     }

//     if (dataUser.email === "") {
//       setErrors({ ...errors, email: "Missing enter Email" });
//     } else if (
//       /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
//         dataUser.email
//       )
//     ) {
//       setErrors({ ...errors, email: "The email format is invalid" });
//     }

//     if (dataUser.password === "") {
//       setErrors({ ...errors, password: "Missing enter Password" });
//     } else if (
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
//         dataUser.password
//       )
//     ) {
//       setErrors({
//         ...errors,
//         password:
//           "-The string must contain at least 1 lowercase alphabetical character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict and The string must be eight characters or longer",
//       });
//     } else {
//       setErrors({ ...errors, password: "" });
//     }

//     if (dataUser.fullname === "") {
//       setErrors({ ...errors, fullname: "Missing enter Email" });
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(dataUser.fullname)) {
//       setErrors({ ...errors, fullname: "The email format is invalid" });
//     }

//     if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(dataUser.number)) {
//       setErrors({ ...errors, number: "It is not a valid number" });
//     }

//     if (!dataUser.date) {
//       errors.date = "Missing enter Date";
//     } else if (
//       /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(dataUser.date)
//     ) {
//       errors.date = "The date format is invalid";
//     } else if (/^(1[89]|[2-9]\d)$/gm.test(dataUser.date)) {
//       errors.date = "You are under 18 years of age";
//     }

//     if (dataUser.tac === false) {
//       errors.tac = "Accept terms and conditions";
//     }

//   };
//   // console.log(errors);
//   // console.log(dataUser);

//   const changeHandler = (event) => {
//     const property = event.target.placeholder;
//     const value = event.target.value;
//     // console.log(event.target);

//     setDataUser({ ...dataUser, [property]: value });
//   };

//   const onSubmit = () => {

//     console.log(dataUser, "ESTE ES EL OBJETO CREADO DENTRO DEL ST");
//     console.log("Formulado enviado");
//   };
//   return (
//     <View>
//       {/* {console.log(dataUser)}
//       {console.log(errors)}
//       {console.log(AcceptTaC)}
//       {console.log(receibeNewsLetter)} */}

//       <View>

//           <TextInput
//             style={styles.input}
//             value={dataUser.user}
//             placeholder="user"
//             onChange={changeHandler}
//           />
//         <View><Text>{errors.user}</Text></View>
//       </View>
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="password"
//           onChange={changeHandler}
//           value={dataUser.password}
//         />
//         {/* <View>{errors.password && <Text>{errors.password}</Text>}</View> */}
//       </View>

//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="fullname"
//           onChange={changeHandler}
//           value={dataUser.fullname}
//         />
//         {/* <View>{errors.fullname && <Text>{errors.fullname}</Text>}</View> */}
//       </View>

//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="email"
//           onChange={changeHandler}
//           value={dataUser.email}
//         />
//         {/* <View>{errors.email && <Text>{errors.email}</Text>}</View> */}
//       </View>
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="date"
//           onChange={changeHandler}
//           value={dataUser.date}
//         />
//         {/* <View>{errors.date && <Text>{errors.date}</Text>}</View> */}
//       </View>

//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="number"
//           onChange={changeHandler}
//           value={dataUser.number}
//         />
//         {/* <View>{errors.number && <Text>{errors.number}</Text>}</View> */}
//       </View>

//       <View>
//         <View style={styles.checkboxContainer}>
//           <View style={styles.checkboxSection}>
//             <Checkbox
//               style={styles.checkbox}
//               value={AcceptTaC}
//               onValueChange={setAcceptTac}
//             />

//             <Text>Accept Terms and conditions</Text>
//             {/* {errors.tac && <Text>{errors.tac}</Text>} */}
//           </View>
//         </View>
//       </View>

//       <View style={styles.checkboxContainer}>
//         <View style={styles.checkboxSection}>
//           <Checkbox
//             style={styles.checkbox}
//             value={receibeNewsLetter}
//             onValueChange={setReceibeNewsLetter}
//           />
//           <Text>Receive Newsletter</Text>
//           {/* {errors.newsLetter && <Text>{errors.newsLetter}</Text>} */}
//         </View>
//       </View>
//       <TouchableHighlight onPress={onSubmit}>
//         <Text>Submit</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: Constants.statusBarHeight + 200,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   title: {
//     margin: 24,
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   error: {
//     margin: 8,
//     fontSize: 14,
//     color: "red",
//     fontWeight: "bold",
//   },
//   input: {
//     height: 50,
//     paddingHorizontal: 8,
//     width: "100%",
//     borderColor: "#ddd",
//     borderWidth: 1,
//     backgroundColor: "#fff",
//   },
//   checkboxContainer: {
//     flex: 1,
//     marginHorizontal: 16,
//     marginVertical: 32,
//   },
//   checkboxSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkboxParagraph: {
//     fontSize: 15,
//   },
//   checkbox: {
//     margin: 8,
//   },
// });

// export default CreateUser;

import React, { useState, useEffect } from "react";

import {
  Text,
  Button,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Checkbox from 'expo-checkbox';
import { values } from "lodash";

const CreateUser = (props) => {
  const [AcceptTaC, setAcceptTac] = useState(true);
  const [receibeNewsLetter, setReceibeNewsLetter] = useState(true);

  console.log(AcceptTaC);

  console.log(receibeNewsLetter);
  useEffect(() => {
    Formik;
  }, [AcceptTaC, receibeNewsLetter]);


  console.log(isChecked)
  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
        fullname: "",
        email: "",
        date: "",
        number: "",
        tac: AcceptTaC,
        newsLetter: receibeNewsLetter,
      }}
      

      onSubmito={{...values, tac }}

      // onSubmit={(val) => {
      //   console.log(val);
      //   console.log(objet, "ESTE ES EL OBJETO CREADO DENTRO DEL ST");
      //   console.log("Formulado enviado");
      // }}
      validate={(val) => {
        let errors = {};
        if (!val.name) {
          errors.name = "Missing enter name";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
          errors.name =
            "The user must only have 4-16 digits and can only contain letters, numbers and underscores.";
        }

        if (!val.email) {
          errors.email = "Missing enter Email";
        } else if (
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
            val.email
          )
        ) {
          errors.email = "The email format is invalid";
        }

        if (!val.password) {
          errors.password = "Missing enter Password";
        } else if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
            val.password
          )
        ) {
          errors.password =
            "-The string must contain at least 1 lowercase alphabetical character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict and The string must be eight characters or longer";
        }

        if (!val.fullname) {
          errors.name = "Missing enter Email";
        } else if (
          /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
            val.email
          )
        ) {
          errors.fullname = "The email format is invalid";
        }

        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(val.number)) {
          errors.number = "It is not a valid number";
        }

        if (!val.date) {
          errors.date = "Missing enter Date";
        } else if (
          /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(val.date)
        ) {
          errors.date = "The date format is invalid";
        } else if (/^(1[89]|[2-9]\d)$/gm.test(val.date)) {
          errors.date = "You are under 18 years of age";
        }

        if (val.tac === false) {
          errors.tac = "Accept terms and conditions";
        }

        return errors;
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        onSubmit,
        values,
        errors,
        touched,
        onSubmito
      }) => {
        return (
          <ScrollView>
            {console.log(values)}
            <View>
              <TextInput
                style={styles.input}
                value={values.user}
                placeholder="User"
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")}
              />

              {errors.user && touched.user && <Text>{errors.user}</Text>}
            </View>
            <View>
              <TextInput
                id="Password"
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Fullname"
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname && (
                <Text>{errors.fullname}</Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Date"
                onChangeText={handleChange("date")}
                onBlur={handleBlur("date")}
                value={values.date}
              />
              {errors.date && touched.date && <Text>{errors.date}</Text>}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Number WhatsApp"
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                value={values.number}
              />
              {errors.number && touched.number && <Text>{errors.number}</Text>}
            </View>

            <View>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxSection}>
                  <Checkbox
                    title="Acepto los términos y condiciones"
                    checked={values.tac}
                    onPress={on}
                  />

                  <Text>Accept Terms and conditions</Text>
                  {errors.tac && touched.tac && <Text>{errors.tac}</Text>}
                </View>
              
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxSection}>
                {/* <Checkbox
                  style={styles.checkbox}
                  value={values.newsLetter}
                  onValueChange={()=>onchange(this.value)}
                /> */}
                <Button>

                </Button>
                <Text>Receive Newsletter</Text>
                {errors.newsLetter && touched.newsLetter && (
                  <Text>{errors.newsLetter}</Text>
                )}
              </View>
            </View>
            <TouchableHighlight onPress={(onSubmit = { handleSubmit })}>
              <Text>Submit</Text>
            </TouchableHighlight>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight + 200,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  checkboxContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  checkboxSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxParagraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default CreateUser;
