import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import React from "react";
import useAuth from "../hooks/useAuth";

export default function CreateAccount() {
  const {
    loggedInUser,
    setLoggedInUser,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    login,
    register,
    account,
    phone,
    setPhone,
  } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>TatApp</Text>
        <TextInput
          style={styles.input}
          placeholder="NOMBRE"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CORREO ELECTRONICO"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CONTRASEÑA"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="TELEFONO"
          value={phone}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={(text) => setPhone(text)}
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => register(email, password, name, phone)}
        >
          <Text style={styles.textButtonRegister}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  createAccount: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
  },
  buttonLogin: {
    marginTop: 15,
    backgroundColor: "#047B9B",
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textButtonRegister: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FFFF",
    padding: 8,
    borderRadius: 10,
    borderColor: "828282",
    borderWidth: 0.5,
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 20,
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 50,
  },
});
