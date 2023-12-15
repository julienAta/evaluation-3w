import React, { useState, useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { addExpense } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (category && amount) {
      addExpense({ amount, category });
      setAmount("");
      setCategory("");
    } else {
      alert("Veuillez sélectionner une catégorie et entrer un montant.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Montant"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Sélectionnez la catégorie</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
      </div>
      <button type="submit">Ajouter une dépense</button>
    </form>
  );
}

export default AddExpense;
