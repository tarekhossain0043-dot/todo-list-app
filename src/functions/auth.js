import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, // logOut এর জন্য signOut ইম্পোর্ট করা হলো
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// ধরে নেওয়া হলো auth এবং db ইনস্ট্যান্স সঠিকভাবে অন্য ফাইল থেকে আসছে
import { auth, db } from "../firebase/Fire";

// --- সাইন ইন ---
export const signIn = async (email, password) => {
  try {
    // await ব্যবহার করা হলো, কারণ signInWithEmailAndPassword একটি প্রমিজ রিটার্ন করে
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user; // সফল হলে User অবজেক্ট রিটার্ন করবে
  } catch (error) {
    // ⛔ গুরুত্বপূর্ণ পরিবর্তন: এররটি throw করুন যাতে কলিং ফাংশন ধরতে পারে
    throw error;
  }
};

// --- লগ আউট ---
export const logOut = async () => {
  try {
    // Firebase auth এর signOut ব্যবহার করা হলো
    await signOut(auth);
  } catch (error) {
    // ⛔ গুরুত্বপূর্ণ পরিবর্তন: এররটি throw করুন
    throw error;
  }
};

// --- সাইন আপ ---
export const signUp = async (email, password, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Firestore-এ ইউজার ডেটা সংরক্ষণ (collection নাম 'user' এর বদলে 'users' ব্যবহার করা ভালো)
    await setDoc(doc(db, "users", user.uid), {
      ...userData,
      uid: user.uid,
      // ডেটাবেসে তৈরির তারিখ যোগ করা হলো
      createdAt: new Date().toISOString(),
    });

    // সফল হলে কিছু রিটার্ন করার প্রয়োজন নেই
  } catch (error) {
    // ⛔ সবচেয়ে গুরুত্বপূর্ণ পরিবর্তন: এররটি throw করুন যাতে ফ্রন্টএন্ড ধরতে পারে
    throw error;
  }
};
