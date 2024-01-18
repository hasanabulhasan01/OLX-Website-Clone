import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnbD1YmUe1P0tAuRMQ8pOxmvOVRLibAbc",
  authDomain: "olx-clone-b3b6f.firebaseapp.com",
  projectId: "olx-clone-b3b6f",
  storageBucket: "olx-clone-b3b6f.appspot.com",
  messagingSenderId: "63712387875",
  appId: "1:63712387875:web:e1785ec342383447da2296"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export function register (userInfo){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
