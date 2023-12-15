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
      <h2>Total par catégorie</h2>
      <ul>
        {Object.entries(totalByCategory).map(([category, total], index) => (
          <li key={index}>
            {category}: <span>{total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTotal;
