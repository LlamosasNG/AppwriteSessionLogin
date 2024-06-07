import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("665e24790012d76d159a") // Replace with your project ID
  .setPlatform('com.airbnb.llamosasng');


export const account = new Account(client);
export const databases = new Databases(client);
