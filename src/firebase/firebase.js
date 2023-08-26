// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {getFirestore, addDoc, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export const saveTitle = async (title) => {
    try {
        const nameCollection = collection(database, "mi-coleccion");
        const documentGuardado = await addDoc(nameCollection, {
            title: "Mi segundo titulo",
        });
        console.log('guardando titulo');
        console.log(documentGuardado);
    }  
    catch (error) {
        console.log(error);
    }
};

console.log('Hello Firebase');