import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcb4r7qKIBfMGv59OytkkG3_WZbLWcaHQ",
  authDomain: "crudtodo-56989.firebaseapp.com",
  projectId: "crudtodo-56989",
  storageBucket: "crudtodo-56989.appspot.com",
  messagingSenderId: "869491941514",
  appId: "1:869491941514:web:0bc820c71406e6ed6ecd73",
  measurementId: "G-Z9ZPVWFEZ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };