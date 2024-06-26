import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import useAuth from "./app/hooks/useAuth";
import CreateAccount from "./app/components/createAccount";

export default function App() {
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
    modalVisible,
    setModalVisible,
  } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>TatApp</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => login(email, password)}
        >
          <Text style={styles.textButtonLogin}>INGRESAR</Text>
        </TouchableOpacity>

        <Text>
          {loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"}
        </Text>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textButtonLogin}>REGISTRATE AQUÍ</Text>
        </TouchableOpacity>

        <Modal animationType="slide" visible={modalVisible}>
          <CreateAccount />
        </Modal>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={async () => {
            await account.deleteSession("current");
            setLoggedInUser(null);
          }}
        >
          <Text style={styles.textButtonLogin}>Logout</Text>
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
  textButtonLogin: {
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
