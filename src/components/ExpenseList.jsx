import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Dépenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.amount}</span> - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
