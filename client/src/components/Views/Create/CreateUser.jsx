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
import { Checkbox } from "expo-checkbox";
import { validate } from "./components/Validate/CreateUserValidate";

const CreateUser = (props) => {
  const [AcceptTaC, setAcceptTac] = useState(false);
  const [receibeNewsLetter, setReceibeNewsLetter] = useState(true);
  const [dataUser, setDataUser] = useState({
    user: "",
    password: "",
    fullname: "",
    email: "",
    date: "",
    number: "",
    tac: false,
    newsLetter: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });


  const onSubmit=(val) => {
    console.log(val);
    console.log(objet, "ESTE ES EL OBJETO CREADO DENTRO DEL ST");
    console.log("Formulado enviado");
  }
  console.log(AcceptTaC);

  console.log(receibeNewsLetter);

  return (
    <Formik

    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        onSubmit,
        values,
        errors,
        touched,
      }) => {
        return (
          <ScrollView>
            {console.log(values)}
            <View>
              <TextInput
                style={styles.input}
                id="User"
                value={dataUser.user}
                placeholder="User"
                onChangeText={setDataUser("user")}
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
                    style={styles.checkbox}
                    value={AcceptTaC}
                    onValueChange={setAcceptTac}
                    onChangeText={handleChange("tac")}
                  />

                  <Text>Accept Terms and conditions</Text>
                  {errors.tac && touched.tac && <Text>{errors.tac}</Text>}
                </View>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxSection}>
                <Checkbox
                  style={styles.checkbox}
                  value={receibeNewsLetter}
                  onValueChange={setReceibeNewsLetter}
                />
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
