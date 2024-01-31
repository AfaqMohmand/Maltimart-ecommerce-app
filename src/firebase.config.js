import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDBYYZvbhI2--Dd8DOOBABN3Iuqtg82s4M",
  authDomain: "ecommerce-app-a35d1.firebaseapp.com",
  projectId: "ecommerce-app-a35d1",
  storageBucket: "ecommerce-app-a35d1.appspot.com",
  messagingSenderId: "647867740588",
  appId: "1:647867740588:web:0c76d6b8e33c6e145eca09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app;