import React, { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialState } from "./appreducer";
import { signInUser } from "./appActionCreators";
import { validateToken } from "../utils";

const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && validateToken(token)) {
      dispatch(signInUser(token));
    }
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("app context error");
};

export default AppContextProvider;
