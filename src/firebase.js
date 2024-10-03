import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDreQWYKOWIMgAlAn6uxSAuXsMP-ji42tU",
  authDomain: "netflix-clone-c1cb3.firebaseapp.com",
  projectId: "netflix-clone-c1cb3",
  storageBucket: "netflix-clone-c1cb3.appspot.com",
  messagingSenderId: "920205165895",
  appId: "1:920205165895:web:808b35d22aeda53826b862"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup=async (name,email,password)=>{
try {
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider :"local",
    email,
   });
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('').join(""));
    
}
}

const login = async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password) 
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('').join(""));
    }

}
const logout=()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout}