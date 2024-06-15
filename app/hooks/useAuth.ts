import { Client, Account, ID } from "react-native-appwrite";
import { useState } from "react";
import { Login, Register } from "../types";
import { Alert } from "react-native";

export default function useAuth() {
  let client = new Client();
  let account = new Account(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("665e24790012d76d159a")
    .setPlatform("com.tatapp.llamosasng");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  async function login(email: Login["email"], password: Login["password"]) {
    if ([email, password].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  async function register(
    email: Register["email"],
    password: Register["password"],
    name: Register["name"],
    phone: Register["phone"]
  ) {
    await account.create(ID.unique(), email, password, name);
    await account.updatePhone(phone, password);
  }
  
  return {
    loggedInUser,
    setLoggedInUser,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    modalVisible,
    setModalVisible,
    login,
    register,
    account,
    phone,
    setPhone,
  };
}
