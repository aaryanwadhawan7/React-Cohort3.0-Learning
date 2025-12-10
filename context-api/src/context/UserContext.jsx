/*
- Create context : createContext
- After creating the context, I'll define context provider
- Context provider will act as wrapper around the <App />
- This will provide the data define in context provider to other components define inside <App />
- We can use the data via useContext hook
  */

import { createContext } from "react";

export const UserDataContext = createContext();
