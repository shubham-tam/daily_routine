import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  calories: [
    // { id: 1, text: "Rice", amount: 500 },
    // { id: 2, text: "Chicken", amount: 300 },
    // { id: 3, text: "Vegetables", amount: 150 },
    // { id: 4, text: "Coke", amount: 250 },
  ],

  lists: [
    // { id: 1, text: "Rice" },
    // { id: 2, text: "Chicken" },
    // { id: 3, text: "Vegetables" },
    // { id: 4, text: "Coke" },
  ],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteCalorie(id) {
    dispatch({ type: "DELETE_CALORIES", payload: id });
  }
  // Add calorie
  function addCalorie(calorie) {
    dispatch({ type: "ADD_CALORIES", payload: calorie });
  }

  // Delete To Do Lists

  function deleteList(id) {
    dispatch({ type: "DELETE_LISTS", payload: id });
  }

  // Add list

  function addList(item) {
    dispatch({ type: "ADD_LISTS", payload: item });
  }

  return (
    <GlobalContext.Provider
      value={{
        calories: state.calories,
        lists: state.lists,
        deleteCalorie,
        addCalorie,
        deleteList,
        addList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
