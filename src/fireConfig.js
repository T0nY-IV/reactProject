import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWMZupxiu-MbdjkVTi4bXgEAQxDsqYKxo",
  authDomain: "authuser-d066e.firebaseapp.com",
  projectId: "authuser-d066e",
  storageBucket: "authuser-d066e.firebasestorage.app",
  messagingSenderId: "896890088951",
  appId: "1:896890088951:web:7419bd0ca711103c65d2f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
export const auth = getAuth(app) 
export default db; 
