import { collection, getDocs, getFirestore } from 'firebase/firestore';
import 'firebase/storage'

const getProducts = async () => {
  const db = getFirestore();
  const productsRef = collection(db, 'productos');
  const snapshot = await getDocs(productsRef);

  const products = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        ...data,
      };
    })
  );

  return products;
};

export { getProducts };