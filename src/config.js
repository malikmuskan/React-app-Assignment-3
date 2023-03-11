
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJhi8n0DcifaFmwvVlEn8Ryn5-1OJERBk",
  authDomain: "react-dashboard-muskan.firebaseapp.com",
  projectId: "react-dashboard-muskan",
  storageBucket: "react-dashboard-muskan.appspot.com",
  messagingSenderId: "1040966451704",
  appId: "1:1040966451704:web:bb809200fed9d2b24ed60d",
  measurementId: "G-JRJ0QC1VTH"
};

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app};