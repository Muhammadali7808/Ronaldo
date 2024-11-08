import React from "react";
import { TodoReducer } from "./todo_reducer";

export const TodoContext = React.createContext();

const initialState = {
  count: 0,
  users: [],
};


export const TodoProviders = ({ children }) => {
  const [data, dispatch] = React.useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ data, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
