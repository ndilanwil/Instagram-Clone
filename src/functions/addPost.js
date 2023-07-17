import { db } from "./firebase"
import { collection, addDoc, serverTimestamp  } from "firebase/firestore";


export const addPost = async (e,caption,imageUrl) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db,"posts"), {
            avatar: "",
            username: "cheston",
            caption: caption,
            likes: 0,
            timestamp: serverTimestamp(),
            imageUrl: imageUrl
        })
        console.log("Document written with ID: ", docRef.id)
    } catch(e){
        console.log("noob : ", e)
    }
}