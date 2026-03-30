import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The UID of the authenticated user.
 */
export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const q = query(itemsCollectionRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error in getItems: ", error);
    return [];
  }
};

/**
 * Adds a new item to a specific user's items subcollection in Firestore.
 * @param {string} userId - The UID of the authenticated user.
 * @param {object} item - The item object (name, quantity, category).
 */
export const addItem = async (userId, item) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};