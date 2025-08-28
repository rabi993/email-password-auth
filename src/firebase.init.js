// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs2zPi9cH8ctcQQHipnSmdeWIv5iUhTRY",
  authDomain: "email-password-auth-86270.firebaseapp.com",
  projectId: "email-password-auth-86270",
  storageBucket: "email-password-auth-86270.firebasestorage.app",
  messagingSenderId: "890306174827",
  appId: "1:890306174827:web:108dfc8462bec6e1ef762e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
