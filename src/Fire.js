
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "****************************",
    authDomain: "netflix-clone-b9c14.firebaseapp.com",
    projectId: "netflix-clone-b9c14",
    storageBucket: "netflix-clone-b9c14.appspot.com",
    messagingSenderId: "27614060313",
    appId: "****************************"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
