import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWa_w93LS2OTB56sRu1XOAB1EfCsP-SN0",
  authDomain: "crypto-app-4fbd0.firebaseapp.com",
  projectId: "crypto-app-4fbd0",
  storageBucket: "crypto-app-4fbd0.appspot.com",
  messagingSenderId: "231308888703",
  appId: "1:231308888703:web:0e9b21b2a78024ede5cd4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
