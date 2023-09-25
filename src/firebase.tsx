// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAzTk55EiormzvRBsIlu2VV_HKrDJvwEI",
    authDomain: "cake-react-76e9e.firebaseapp.com",
    projectId: "cake-react-76e9e",
    storageBucket: "cake-react-76e9e.appspot.com",
    messagingSenderId: "206409346330",
    appId: "1:206409346330:web:7ab96f206a013e8c3590a3",
    measurementId: "G-JZ57L85Q6K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

