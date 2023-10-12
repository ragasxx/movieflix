// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm2dyxrD_qpJfO7q85CKV2nVzynfWzUgE",
  authDomain: "movieflix-bce89.firebaseapp.com",
  projectId: "movieflix-bce89",
  storageBucket: "movieflix-bce89.appspot.com",
  messagingSenderId: "764412867415",
  appId: "1:764412867415:web:b2009b9f49633393720412",
  measurementId: "G-L1SD9EQEJP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
