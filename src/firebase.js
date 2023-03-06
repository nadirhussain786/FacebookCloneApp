
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDy8X9pa5W6X3NjLFg0SpyPssiPvNKLt8E",
  authDomain: "facebook-clone-ccebc.firebaseapp.com",
  databaseURL: "https://facebook-clone-ccebc-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-ccebc",
  storageBucket: "facebook-clone-ccebc.appspot.com",
  messagingSenderId: "413683699204",
  appId: "1:413683699204:web:979644feb283a7cda82f51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth , provider };
export default db;
