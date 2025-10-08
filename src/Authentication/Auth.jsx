// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import React, { useContext, useEffect, useState } from "react";
// import { auth } from "../firebase/fireConfig";

// const context = React.createContext();

// // custom hook
// export const useAuth = () => {
//   return useContext(context);
// };

// // context provider

// export const contextProvider = (Children) => {
//   const [currentUser, setCurrentUser] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoading(false);
//       setCurrentUser(user);
//     });
//     return unSubscribe;
//   }, []);

//   //signup function
//   async function handleSignUp(email, password, userName) {
//     await createUserWithEmailAndPassword(auth, email, password);
//     await updateProfile(auth.currentUser, {
//       displayName: userName,
//     });
//     const user = auth.currentUser;
//     setCurrentUser(user);
//   }

//   // login function

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   // logout function

//   function logOut() {
//     return signOut(auth);
//   }

//   const value = {
//     currentUser,
//     handleSignUp,
//     login,
//     logOut,
//     isLogin,
//     setIsLogin,
//   };
//   return (
//     <context.Provider value={value}>{!isLoading && Children}</context.Provider>
//   );
// };
