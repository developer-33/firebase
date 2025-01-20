
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazQXErWhq269JTahY0xPY2aOr3EwoJI4",
  authDomain: "pokesocial-28b4a.firebaseapp.com",
  databaseURL: "https://pokesocial-28b4a-default-rtdb.firebaseio.com",
  projectId: "pokesocial-28b4a",
  storageBucket: "pokesocial-28b4a.firebasestorage.app",
  messagingSenderId: "675072127416",
  appId: "1:675072127416:web:63242c094cc03cb0ec9f4d",
  measurementId: "G-37D5QQQF1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
