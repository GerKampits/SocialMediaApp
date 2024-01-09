// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_APP_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig={ 
  apiKey:"AIzaSyApbaRFo3g5W0euEZYkVu-72lrhglsTz7A",
  authDomain:"react-course-ecfee.firebaseapp.com",
  projectId:"react-course-ecfee",
  storageBucket: "react-course-ecfee.appspot.com",
  messagingSenderId:"616637245610",
  appId:"1:616637245610:web:983a4c9fcd6d3043bf08d3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)


// REACT_APP_API_KEY= "AIzaSyApbaRFo3g5W0euEZYkVu-72lrhglsTz7A"
// REACT_APP_AUTH_DOMAIN= "react-course-ecfee.firebaseapp.com"
// REACT_APP_APP_ID= "1:616637245610:web:983a4c9fcd6d3043bf08d3"
// REACT_APP_PROJECT_ID= "react-course-ecfee"
// REACT_APP_STORAGE_BUCKET= "react-course-ecfee.appspot.com"
// REACT_APP_MESSAGING_SENDER_ID= "616637245610"

// # REACT_APP_API_KEY= "AIzaSyApbaRFo3g5W0euEZYkVu-72lrhglsTz7A"
// # REACT_APP_AUTH_DOMAIN= "react-course-ecfee.firebaseapp.com"
// # REACT_APP_APP_ID= "1:616637245610:web:983a4c9fcd6d3043bf08d3"
// # REACT_APP_PROJECT_ID= "react-course-ecfee"
// # REACT_APP_STORAGE_BUCKET= "react-course-ecfee.appspot.com"
// # REACT_APP_MESSAGING_SENDER_ID= "616637245610"