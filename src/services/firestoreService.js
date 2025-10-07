import { db } from "../config/firebase";
import { collection, addDocs } from "firebase/firestore";

/*export async function addUser(user) {
    return await addDoc(collection(db, "usuario"),{ ...user, createdAt: new Date()});

}*/

export async function addUser(user){
    try {
        const docRef = await addDoc(collection(db,"usuario"),{
            ...user,
            createdAt: new Date(),

        });
        console.log("Usuario Registrado con ID: ", docRef.id);
        return docRef;

        
    } catch (error) {
        console.error("error al registrar usuario: ",error);

        
    }

}
