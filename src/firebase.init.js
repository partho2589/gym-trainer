// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlhWPdhqBNm3dmRAyhKjc1t19fjOoBo9Q",
  authDomain: "route-firebase-assignment-10.firebaseapp.com",
  projectId: "route-firebase-assignment-10",
  storageBucket: "route-firebase-assignment-10.appspot.com",
  messagingSenderId: "938924461041",
  appId: "1:938924461041:web:a22ff2cdf3025f08c79250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth