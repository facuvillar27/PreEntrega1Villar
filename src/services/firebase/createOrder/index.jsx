import { addDoc, collection, getFirestore } from "firebase/firestore"

const createOrder = async (payload) => {
    const db = getFirestore();

    const collectionRef = collection(db, "orders");

    const response = await addDoc(collectionRef, payload);
}

export { createOrder }