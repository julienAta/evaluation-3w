import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExpenseProvider } from "./ExpenseContext";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import CategoryTotal from "./components/CategoryTotal";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ExpenseProvider>
      <Header />
      <AddExpense />
      <ExpenseList />
      <CategoryTotal />
    </ExpenseProvider>
  );
}

export default App;
