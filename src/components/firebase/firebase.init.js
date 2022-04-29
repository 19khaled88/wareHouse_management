// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ75PuFofpOyYRwQUHU2iLhEAP8FTHz6Y",
  authDomain: "warehouse-management-pro-dev.firebaseapp.com",
  projectId: "warehouse-management-pro-dev",
  storageBucket: "warehouse-management-pro-dev.appspot.com",
  messagingSenderId: "908443299658",
  appId: "1:908443299658:web:5f78b06d1aea2fb1771bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth