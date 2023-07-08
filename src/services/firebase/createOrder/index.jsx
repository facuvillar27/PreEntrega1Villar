import { addDoc, collection, getFirestore } from "firebase/firestore"

const createOrder = async (payload) => {
    try {

        const db = getFirestore();

        const collectionRef = collection(db, "orders");

        const docRef = await addDoc(collectionRef, payload);
        console.log("Order created with ID: ", docRef.id);
    } catch (error) {
        console.error("Error creating order: ", error);
    }
}

export { createOrder }
