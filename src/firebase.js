// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdkEYcFn7GtI14i7u_dzV0SDKUWbkm-BU",
  authDomain: "login-ea720.firebaseapp.com",
  projectId: "login-ea720",
  storageBucket: "login-ea720.firebasestorage.app",
  messagingSenderId: "116719174621",
  appId: "1:116719174621:web:37159f49cefe808276ac34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
