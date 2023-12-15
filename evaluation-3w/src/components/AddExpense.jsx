import React, { useState, useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { addExpense } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, category });
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Housing">Housing</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
