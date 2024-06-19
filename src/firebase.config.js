// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIKbEEBXJz6Gct6MiQ27sKeiTPszvSIvg",
  authDomain: "printcopyapp.firebaseapp.com",
  projectId: "printcopyapp",
  storageBucket: "printcopyapp.appspot.com",
  messagingSenderId: "960559622297",
  appId: "1:960559622297:web:c4f2539f8276cac41cf008",
  measurementId: "G-8FS94D7CJ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
