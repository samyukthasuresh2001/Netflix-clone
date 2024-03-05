
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBg_5S73sFN1LJu_bkaD8wJ1BKnxKcd8nQ",
    authDomain: "netflix-clone-b9c14.firebaseapp.com",
    projectId: "netflix-clone-b9c14",
    storageBucket: "netflix-clone-b9c14.appspot.com",
    messagingSenderId: "27614060313",
    appId: "1:27614060313:web:44ab1148712fa8426aef88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;