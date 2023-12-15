import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function Total() {
  const { expenses } = useContext(ExpenseContext);

  const totalAmount = expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount);
  }, 0);
  return (
    <div>
      <h2>Total</h2>
      <p>{totalAmount.toFixed(2)}</p>
    </div>
  );
}

export default Total;
