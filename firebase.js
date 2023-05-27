import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCsn3OBrL-2njIyyn_O0-Yna8FW3TWP3SQ",
    authDomain: "rn-swiggy-clone.firebaseapp.com",
    projectId: "rn-swiggy-clone",
    storageBucket: "rn-swiggy-clone.appspot.com",
    messagingSenderId: "475586611054",
    appId: "1:475586611054:web:d2526866d671a733e2237f"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;