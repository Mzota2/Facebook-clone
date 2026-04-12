// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDuc_-NkVHCWJUq2gUDQaTHTstJfL0fgk",
    authDomain: "facebook-clone-e81b4.firebaseapp.com",
    projectId: "facebook-clone-e81b4",
    storageBucket: "facebook-clone-e81b4.appspot.com",
    messagingSenderId: "1052131412621",
    appId: "1:1052131412621:web:af60ecd54b8c76c74230c4",
    measurementId: "G-40E3VYBRCL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;