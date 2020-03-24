import React, { createContext, useReducer } from "react";
import * as Post from "./functions/post_functions";
import * as Reducers from "./reducer/reducers";
export const GlobalContext = createContext(null);
export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers.reducer, Reducers.initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        Post
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
