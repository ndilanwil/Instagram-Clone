import { db } from "./firebase"
import { collection, addDoc, serverTimestamp  } from "firebase/firestore";


export const addPost = async (e,caption,imageUrl) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"))
    try {
        const docRef = await addDoc(collection(db,"posts"), {
            avatar: user.avatar,
            username: user.username, 
            caption: caption,
            likes: 0,
            time: new Date(),
            imageUrl: imageUrl
        })
        console.log("Document written with ID: ", docRef.id)
    } catch(e){
        console.log("noob : ", e)
    }
}