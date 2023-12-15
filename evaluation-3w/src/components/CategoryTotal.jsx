import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function CategoryTotal() {
  const { expenses } = useContext(ExpenseContext);

  const totalByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div>
      <h2>Total by Category</h2>
      <ul>
        {Object.entries(totalByCategory).map(([category, total], index) => (
          <li key={index}>
            {category}: {total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTotal;
