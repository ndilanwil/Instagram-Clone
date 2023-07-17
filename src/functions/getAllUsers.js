import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore";


export const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const newData = querySnapshot.docs.map((doc) => ({ 
        ...doc.data(), id: doc.id }));
    return newData;
}