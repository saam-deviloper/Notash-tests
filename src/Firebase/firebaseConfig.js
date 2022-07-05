// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId
  apiKey : "AIzaSyBKQLDrr1a0QT2esAocrJWKxPsY679Go1w",
  authDomain : "reactreduxshop-64071.firebaseapp.com",
  projectId : "reactreduxshop-64071",
  storageBucket : "reactreduxshop-64071.appspot.com",
  messagingSenderId : "452966316031",
  appId : "1:452966316031:web:b01d33122dd6ddac4259ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)