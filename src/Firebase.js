// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd2viUuwxWbcSnnOho2tpP0AbeC1JzlYw",
  authDomain: "todoapp-1de52.firebaseapp.com",
  databaseURL: "https://todoapp-1de52-default-rtdb.firebaseio.com",
  projectId: "todoapp-1de52",
  storageBucket: "todoapp-1de52.appspot.com",
  messagingSenderId: "27765554160",
  appId: "1:27765554160:web:dac0f14347019a8dccbb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)

export default app

