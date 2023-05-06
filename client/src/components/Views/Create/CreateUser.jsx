import React, { useState , useEffect} from "react";

import {
  Text,
  Button,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { Checkbox } from "expo-checkbox";

const Create = (props) => {
  const [AcceptTaC, setAcceptTac] = useState(false);
  const [receibeNewsLetter, setReceibeNewsLetter] = useState(true);

  console.log(AcceptTaC)

  console.log(receibeNewsLetter)
useEffect(()=>{

},[AcceptTaC,receibeNewsLetter])

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
        fullname: "",
        email: "",
        date: "",
        number: "",
        // tac: AcceptTaC,
        // newsLetter: receibeNewsLetter,
      }}


      onSubmit={(val)=>{
         let objet = {
          user: "",
          password: "",
          fullname: "",
          email: "",
          date: "",
          number: "",
          tac: AcceptTaC,
          newsLetter: receibeNewsLetter,
         }

 
        console.log(objet, 'ESTE ES EL OBJETO CREADO DENTRO DEL ST')
        console.log("Formulado enviado")
      }}

    //   validate={(val) => {
    //     let errors = {};
    //     if (!val.name) {
    //       errors.name = "Missing enter name";
    //     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
    //       errors.name = "The user must only have 4-16 digits and can only contain letters, numbers and underscores."}

    //     if (!val.email) {
    //       errors.email = "Missing enter Email";
    //     } else if (
    //       /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    //         val.email)){ errors.email = "The email format is invalid"}

    //     if (!val.password) {errors.password = "Missing enter Password";
    //     } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(val.password)
    //     ) {errors.password = "-The string must contain at least 1 lowercase alphabetical character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict and The string must be eight characters or longer";
    //     }

    //     if (!val.fullname) {
    //       errors.name = "Missing enter Email";
    //     } else if (
    //       /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(val.email)
    //     ) { errors.fullname = "The email format is invalid"}

    //     if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(val.number)) {
    //       errors.number = "It is not a valid number";
    //     }

    //     if (!val.date) {
    //       errors.date = "Missing enter Date";
    //     } else if ( /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(val.date)
    //     ) { errors.date = "The date format is invalid";

    //     }else if(/^(1[89]|[2-9]\d)$/gm.test(val.date)){ errors.date = "You are under 18 years of age"}

    //     if (val.tac === false) {
    //       errors.tac = "Accept terms and conditions";
    //     }

    //     return errors
    // }

  // }
    >
      {({ handleChange, handleBlur, handleSubmit, onSubmit, values, errors, touched}) => {
        return (
          <ScrollView>
            
            {console.log(values)}
            <View>
              <TextInput
                style={styles.input}
                value={values.user}
                placeholder="User"
                onChangeText={handleChange("user")}
                onBlur={handleBlur("user")} />

              {errors.user && touched.user && <Text>{errors.user}</Text>}
            </View>
            <View>
              <TextInput
                id="Password"
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password} />
              {/* {errors.password && touched.password && <Text>{errors.password}</Text>} */}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Fullname"
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname} />
              {errors.fullname && touched.fullname && <Text>{errors.fullname}</Text>}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur('email')}
                value={values.email} />
              {/* {errors.email && touched.email && <Text>{errors.email}</Text>} */}
            </View>
            <View>

              <TextInput
                style={styles.input}
                placeholder="Date"
                onChangeText={handleChange("date")}
                onBlur={handleBlur("date")}
                value={values.date} />
              {/* {errors.date && touched.date && <Text>{errors.date}</Text>} */}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Number WhatsApp"
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                value={values.number} />
              {/* {errors.number && touched.number && <Text>{errors.number}</Text>} */}
            </View>

            <View>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxSection}>
                  <Checkbox
                    style={styles.checkbox}
                    value={AcceptTaC}
                    onValueChange={setAcceptTac} 
                    onChangeText={handleChange("tac")}
                    />
                    
                  <Text>Accept Terms and conditions</Text>
                  {/* {errors.tac && touched.tac && <Text>{errors.tac}</Text>} */}
                </View>
              </View>
            </View>
            {/* onValChange?: (value: boolean) => void; */}

            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxSection}>
                <Checkbox
                  style={styles.checkbox}
                  value={receibeNewsLetter}
                  onValueChange={setReceibeNewsLetter} />
                <Text>Receive Newsletter</Text>
                {/* {errors.newsLetter && touched.newsLetter && <Text>{errors.newsLetter}</Text>} */}
              </View>
            </View>
            <TouchableHighlight onPress={onSubmit}>
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
export default Create;

// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import Checkbox from "expo-checkbox";
// import SelectDropdown from "react-native-select-dropdown";
// import {
//   objGenres,
//   objPlatforms,
//   allGenres,
//   allPlatforms,
//   allPlatformsKeyValue
// } from "./components/dataFilteredgames";
// import { useState, useRef, useEffect } from "react";
// import { FlatList } from "react-native-gesture-handler";

// console.log(objGenres);

// console.log(allPlatforms);
// const Create = () => {
//   const inputRef = useRef();
//   const [newVideoGame, setNewVideoGame] = useState({
//     name: "",
//     platform: [allPlatformsKeyValue],
//     description: "",
//     image: "",
//     genres: [],
//     screnShots: "",
//     releaseDate: "",
//     tags: "",
//   });
//   const [stackData, setStackData] = useState({
//     platform: allPlatforms,
//     image: "",
//     genres: allGenres,
//     screnShots: "",
//     tags: "",
//   });

//       const changeBoolean=(value) =>{
//         value===true ? false : true
//       }}


//   console.log(newVideoGame);

//   const reff = () => {
//     console.log(inputRef);
//   };

//   const pushItem = (inputRef) => {
//     console.log(inputRef);
//     const name = inputRef.target.innerHTML;
//     setNewVideoGame({
//       ...newVideoGame,
//       platform: [...newVideoGame.platform, name],
//     });
//     setStackData({
//       ...stackData,
//       platform: [...stackData.platform.filter((p) => p !== name)],
//     });
//   };

//   const handleInputChange = (inputName, inputValue) => {
//     setNewVideoGame({
//       ...newVideoGame,
//       [inputName]: inputValue,
//     });
//   };







//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {allPlatforms.map((p)=>{
//           return(
//         <View>
//           <Text>{p}</Text>
//           <Checkbox
//             value={newVideoGame.platform.p}
//             onValueChange={setNewVideoGame}
//             style={styles.checkbox}

//           />
//         </View>
// )})}
//         <View>
//           <Text style={styles.title}>Name: </Text>
//           <TextInput
//             placeholder="Enter the name of the game"
//             value={newVideoGame.name}
//             keyboardAppearance="light"
//             onChangeText={(text) => handleInputChange("name", text)}
//           />
//         </View>

//         <View>
//           <Text style={styles.title}>Description: </Text>
//           <TextInput
//             placeholder="Insert descrption"
//             value={newVideoGame.description}
//             onChangeText={(text) => handleInputChange("name", text)}
//           />
//         </View>

//         <View>
//           <Text style={styles.title}>Image: </Text>
//           <TextInput
//             value={newVideoGame.image}
//             onChangeText={(text) => handleInputChange("name", text)}
//           />
//         </View>

//         <View>
//           <Text style={styles.title}>Screnshots: </Text>
//           <TextInput
//             value={newVideoGame.screnShots}
//             onChangeText={(text) => handleInputChange("name", text)}
//           />
//         </View>

//         <View>
//           <Text style={styles.title}>Release Date: </Text>
//           <TextInput
//             placeholder="dd/mm/yy"
//             value={newVideoGame.releaseDate}
//             keyboardType="numeric"
//             onChangeText={(text) => handleInputChange("name", text)}
//           />
//           <View>
//             <Text style={styles.title}>Tags: </Text>
//             <TextInput
//               placeholder="Insert Tags"
//               value={newVideoGame.tags}
//               onChangeText={(text) => handleInputChange("name", text)}
//             />
//           </View>
//           <View>
//             <Button title="Submit"></Button>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "gray",
//     alignItems: "center",
//     width: "100%",
//   },
//   View: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "gray",
//     alignItems: "center",
//     width: "100%",
//   },
//   section: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   paragraph: {
//     fontSize: 15,
//   },
//   checkbox: {
//     alignItems: "flex-start",
//     margin: 10,
//   },
//   title: {
//     textAlign: "left",
//     fontSize: 20,
//     fontStyle: "normal",
//     marginTop: 10,
//   },
//   TextInput: {
//     textAlign: "center",
//     backgroundColor: "white",
//   },
// });

// export default Create;
