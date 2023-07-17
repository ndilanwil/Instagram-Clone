import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore";


export const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const newData = querySnapshot.docs.map((doc) => ({ 
        ...doc.data(), id: doc.id }));
    return newData;
}