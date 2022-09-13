import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";



// Import the functions you need from the SDKs you need


const firebaseConfig = {
  apiKey: "AIzaSyBlkvMteJYw1BlHXDnqtzBfso1bKAL7PKo",
  authDomain: "resturant-app-85083.firebaseapp.com",
  projectId: "resturant-app-85083",
  storageBucket: "resturant-app-85083.appspot.com",
  messagingSenderId: "281256008330",
  appId: "1:281256008330:web:0da28c5322f71486fc2b73",
  measurementId: "G-V8DMD9ELQ4"
};

export function useAuth(){
  const [currentUser, setCurrentUser] =useState();
  useEffect(() =>{
    const unsub=onAuthStateChanged(auth,user=>setCurrentUser(user));
    return unsub;
  },[])
  return currentUser;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db};