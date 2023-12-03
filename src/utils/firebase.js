// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxaizWmH2ssNSlIy1LJTKtmqG_nQUI7oc",
  authDomain: "netflix-gpt-2c002.firebaseapp.com",
  projectId: "netflix-gpt-2c002",
  storageBucket: "netflix-gpt-2c002.appspot.com",
  messagingSenderId: "1040005313596",
  appId: "1:1040005313596:web:290d754692caf820c07f39",
  measurementId: "G-0W7B86FZXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();