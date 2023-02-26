// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi8n-rZk3lOMuH2A6kNsdK4__1GhaLhiU",
  authDomain: "company-project-68959.firebaseapp.com",
  projectId: "company-project-68959",
  storageBucket: "company-project-68959.appspot.com",
  messagingSenderId: "408610827159",
  appId: "1:408610827159:web:e0e689ac4072c1f3e032d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
