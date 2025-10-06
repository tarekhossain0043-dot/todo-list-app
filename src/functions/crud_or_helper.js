// import {
//   collection,
//   deleteDoc,
//   getDoc,
//   onSnapshot,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/Fire";
// import {db} from "../firebase/fire"

const getRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let x = 0; x < 16; x++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

export const createData = async (collectionName, data) => {
  const id = getRandomId();
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, {
      id,
      ...data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const readData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists) {
      console.log(docSnap.data);
      return docSnap.data;
    } else {
      console.log("No Much document!");
    }
  } catch (error) {
    console.error("Doc error:", error.message);
  }
};

export const updateData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    updateDoc(docRef, {
      id: id,
      ...data,
    });
    console.log("data updated successfully");
  } catch (error) {
    console.error("error updating document:", error.message);
  }
};

export const deleteData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    await deleteDoc(docRef);
    console.log("data successfully deleted");
  } catch (error) {
    console.error("delete data error,", error.message);
  }
};

export const readAllData = async (collectionName) => {
  try {
    const newDataArry = [];
    const newDataSnapShort = await getDoc(collection(db, collectionName));
    newDataSnapShort.forEach((doc) => {
      newDataArry.push(doc.data());
    });
  } catch (error) {
    console.error("error document read collection:,", error.message);
  }
};
// export const createData = async (collection,data) =>{
//   const randomID = getRandomId();
//   try{
//     const docRef = doc(db,collection,id);
//     setDoc(docRef,{
//       id,
//       ...data
//     })
//   }catch(err){
//     console.error('Doc error:'. err);
//   }
// }

// export const readData = async (collection, id) => {
//   try {
//     const docRef = doc(db, collection, id);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       console.log(docSnap.data());
//       return docSnap.data();
//     } else {
//       console.log("No much document!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateData = async (collection, id) => {
//   try {
//     const docRef = doc(db, collection, id);
//     await updateDoc(docRef, {
//       id: id,
//       ...data,
//     });
//     console.log("Document Successfully Updated");
//   } catch (error) {
//     console.error("Error Updating Document :", error.message);
//   }
// };

// export const deleteData = async (collection, id) => {
//   try {
//     const docRef = doc(db, collection, id);
//     await deleteDoc(docRef);
//     console.log("Document Successfully Deleted");
//   } catch (error) {
//     console.error("Error Updating Document :", error.message);
//   }
// };

// export const readAllData = async (collectionName) => {
//   try {
//     const newDataArray = [];
//     const querySnapShort = collection(db, collectionName);
//     querySnapShort.foreach((doc) => {
//       newDataArray.push(doc.data());
//     });
//   } catch (error) {
//     console.error("Error reading collection :", error.message);
//   }
// };

export const realTimeDataUpdate = (collectionName, callback) => {
  const todosData = collection(db, collectionName);
  return onSnapshot(todosData, (queryUpdateData) => {
    const storeCollectionData = [];
    queryUpdateData.forEach((itemData) => {
      storeCollectionData.push(itemData.data);
    });
    callback(storeCollectionData);
  });
};

// export const listenToCollection = (collectionName, callback) => {
//   const collectionRef = collection(db, collectionName);

//   return onSnapshot(collectionRef, (querySnapShort) => {
//     const newDataArray = [];
//     querySnapShort.forEach((doc) => {
//       newDataArray.push(doc.data());
//     });
//     callback(newDataArray);
//   });
// };
