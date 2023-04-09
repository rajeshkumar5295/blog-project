import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore" ;
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCaxaWTF7eRtuBLvV0TV-JLVwfge5EpU1k",
    authDomain: "react-blogs-app-5dac3.firebaseapp.com",
    projectId: "react-blogs-app-5dac3",  
    storageBucket: "react-blogs-app-5dac3.appspot.com",
    messagingSenderId: "233824759483",
    appId: "1:233824759483:web:25531bede7da54e3f3c39e"
  };

  const app=initializeApp(firebaseConfig);
  const auth =getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);

  export  { auth ,db,storage};
  