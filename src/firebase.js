import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDGZTmoJSJf12VVUUUALobcsgVbQSqg84k",
    authDomain: "instagram-clone-bf355.firebaseapp.com",
    projectId: "instagram-clone-bf355",
    storageBucket: "instagram-clone-bf355.appspot.com",
    messagingSenderId: "820592580532",
    appId: "1:820592580532:web:921bc388681995b34744e1"
  };


const firebaseApp = initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage}