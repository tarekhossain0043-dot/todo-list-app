import { getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Fire";
const getRadomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

export const createData = async (collectionData, data) => {
  const id = getRadomId();
  try {
    const docRef = doc(db, collectionData, id);
    await setDoc(docRef, {
      id,
      ...data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const readData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
      console.log("No much document!");
    }
  } catch (error) {
    console.log(error);
  }
};
