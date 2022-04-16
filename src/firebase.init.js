// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvvyiyC87hJCmVrNSgeH6oxCnUb4yDgQ",
  authDomain: "pro-developer-357f4.firebaseapp.com",
  projectId: "pro-developer-357f4",
  storageBucket: "pro-developer-357f4.appspot.com",
  messagingSenderId: "970225177273",
  appId: "1:970225177273:web:9da487f76f1e55f29dc168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;