import React, { useState, useEffect } from "react";

import SweetAlert from 'react-native-sweet-alert';

import {
  color_azul,
  color_blanco,
  color_gris,
  color_negro,
} from "../../../../constants/Colors";

import {
  Text,
  Button,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  
} from "react-native";
import { Formik } from "formik";

import Checkbox from "expo-checkbox";
import { values } from "lodash";

const CreateUser = (props) => {
  const [AcceptTaC, setAcceptTac] = useState(true);
  const [receibeNewsLetter, setReceibeNewsLetter] = useState(true);





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
      onSubmit={(values)=>{
        console.log(values)
        SweetAlert.showAlert({
          title: '¡Hola!',
          subtitle: 'Esto es una alerta',
          confirmText: 'Aceptar',
        });

      }}

      validate={(val) => {
        let errors = {};
        if (!val.user) {
          errors.user = "Missing enter name";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
          errors.user =
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
      }) => {
        return (
          <View style={styles.container} onSubmit={handleSubmit}>
            {console.log(values)}
            <View style={styles.containerLogin}>
              <View>
                <TextInput
                  style={styles.input}
                  value={values.user}
                  placeholder="User"
                  onChangeText={handleChange("user")}
                  onBlur={handleBlur("user")}
                />

                {errors.user && touched.user && (
                  <Text style={styles.error}>{errors.user}</Text>
                )}
              </View>
              <View>
                <TextInput
                  id="Password"
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Fullname"
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  value={values.fullname}
                  keyboardType="default"
                />
                {errors.fullname && touched.fullname && (
                  <Text style={styles.error}>{errors.fullname}</Text>
                )}
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="dd-mm-yy"
                  onChangeText={handleChange("date")}
                  onBlur={handleBlur("date")}
                  value={values.date}
                  keyboardType="number-pad"
                />
                {errors.date && touched.date && (
                  <Text style={styles.error}>{errors.date}</Text>
                )}
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Number WhatsApp"
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  value={values.number}
                  keyboardType="phone-pad"
                />
                {errors.number && touched.number && (
                  <Text style={styles.error}>{errors.number}</Text>
                )}
              </View>
              <View style={styles.boxcontainercheckbox}>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={AcceptTaC}
                      onValueChange={setAcceptTac}
                    />
                    <Text style={styles.checkboxParagraph}>
                      Terms & conditions
                    </Text>
                    {errors.tac && (
                      <Text style={styles.error}>{errors.tac}</Text>
                    )}
                  </View>
                </View>

                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxSection}>
                    <Checkbox
                      style={styles.checkbox}
                      value={receibeNewsLetter}
                      onValueChange={setReceibeNewsLetter}
                    />
                    <Text style={styles.checkboxParagraph}>
                      Receive Newsletter
                    </Text>
                    {errors.newsLetter && (
                      <Text style={styles.error}>{errors.newsLetter}</Text>
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.submitContainer}>
              
            <TouchableHighlight
              onPress={handleSubmit=>onSubmit}
              style={styles.miniButton}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
            </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_azul,
    width: "100%",
  },

  mario: {
    margin: 10,
    height: 70,
    width: 310,
  },

  container: {
    backgroundColor: color_azul,
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },

  containerLogin: {
    margin: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 320,
    height: "100%",
    borderColor: color_negro,
    backgroundColor: color_blanco,
    padding: 10,

  },

  input: {
    textAlign: "center",
    height: 35,
    borderWidth: 2,
    borderColor: color_azul,
    paddingHorizontal: 70,
    marginLeft: "2%",
    marginRight: "2%",
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
  },
  submitContainer:{

    alignItems: "center",
  },
  miniButton: {
    marginTop:"30%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "8%",
    height: 60,
    width: "50%",
    padding: 0,
    backgroundColor: color_azul,
    borderRadius: 8,
  },
  error: {
    textAlign: "center",
    marginTop: -15,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_blanco,
  },
  buttonGoogle: {
    marginTop: "10%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 20,
  },
  imageGoogle: {
    height: 40,
    width: 250,
  },

  boxcontainercheckbox: {
    flex: 1,
    alignItems: "center",
  },

  checkboxSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxParagraph: {
    color: color_negro,
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default CreateUser;
