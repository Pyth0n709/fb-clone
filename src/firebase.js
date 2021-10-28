import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCI_bM-IBIuQKbJ1p8NfZ4gyu1gPiK9P_k",
    authDomain: "facebook-clone-81f4c.firebaseapp.com",
    projectId: "facebook-clone-81f4c",
    storageBucket: "facebook-clone-81f4c.appspot.com",
    messagingSenderId: "680804369642",
    appId: "1:680804369642:web:8284fa9ed79f4714754393",
    measurementId: "G-XZ8GGN73HC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);  

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;