import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore";


export const addPost = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db,"posts"), {
            avatar: "",
            username: "",
            caption: "",
            likes: "",
            day: "",
            imageUrl: "",
        })
        console.log("Document written with ID: ", docRef.id)
    } catch(e){
        console.log("noob : ", e)
    }
}