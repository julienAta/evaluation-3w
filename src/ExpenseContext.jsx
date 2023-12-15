import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// Initial state
const initialState = {
  expenses: [],
};

// Create context
export const ExpenseContext = createContext(initialState);

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  // Actions
  function addExpense(expense) {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
