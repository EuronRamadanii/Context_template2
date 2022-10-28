import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3yKZml6J-i3aLOKwxhZ3GkXfbDNn95sM",
  authDomain: "brecafamily-dcb88.firebaseapp.com",
  databaseURL:
    "https://brecafamily-dcb88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brecafamily-dcb88",
  storageBucket: "brecafamily-dcb88.appspot.com",
  messagingSenderId: "361721884685",
  appId: "1:361721884685:web:8c32b96e956642a8202544",
};

const fireabaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const getAuth = firebase.auth();
export { timestamp, getAuth };
export default fireabaseApp.firestore();
