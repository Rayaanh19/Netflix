import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt0Wx1bDaDpYDcyCVEbT0uATfo1SuMrS8",
    authDomain: "netflix-clone-ef9e9.firebaseapp.com",
    projectId: "netflix-clone-ef9e9",
    storageBucket: "netflix-clone-ef9e9.appspot.com",
    messagingSenderId: "593782995530",
    appId: "1:593782995530:web:1be5b45d037d9d811184b3"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;