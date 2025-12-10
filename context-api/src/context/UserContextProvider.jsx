import React, { useState } from "react";
import { UserDataContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Aaryan");
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContextProvider;
