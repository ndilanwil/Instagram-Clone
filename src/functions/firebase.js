import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGZTmoJSJf12VVUUUALobcsgVbQSqg84k",
    authDomain: "instagram-clone-bf355.firebaseapp.com",
    projectId: "instagram-clone-bf355",
    storageBucket: "instagram-clone-bf355.appspot.com",
    messagingSenderId: "820592580532",
    appId: "1:820592580532:web:921bc388681995b34744e1"
  };


const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth}