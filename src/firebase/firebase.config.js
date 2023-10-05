// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASksVy5ht7WYW5DrXYBofRmHXV_9KeUeI",
  authDomain: "react-dragon-news-auth-311e7.firebaseapp.com",
  projectId: "react-dragon-news-auth-311e7",
  storageBucket: "react-dragon-news-auth-311e7.appspot.com",
  messagingSenderId: "285469727137",
  appId: "1:285469727137:web:dc453b2a95c85427a6d3e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);