import { doc, getDoc, getFirestore } from 'firebase/firestore';
import 'firebase/storage'

const getProduct = async (id) => {
  const db = getFirestore();
  const productRef = doc(db, 'productos', id);
  const productDoc = await getDoc(productRef)

  if (productDoc.exists()) {
    const productData = productDoc.data();
    return { id: productDoc.id, ...productData };
  } else {
    return null;
  }
};

export { getProduct };