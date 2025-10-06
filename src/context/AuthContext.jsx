import React, { useContext, useState } from "react";
const UserContext = React.createContext();
export const UserAuth = () => {
  return useContext(UserContext);
};
export default function AuthContextProvider({ children }) {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const value = {
    isLoggedOut,
  };
  return (
    <UserContext.Provider value={{ value }}>{children}</UserContext.Provider>
  );
}
