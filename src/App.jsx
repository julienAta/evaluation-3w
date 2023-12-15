import "./App.css";

import { ExpenseProvider } from "./ExpenseContext";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import CategoryTotal from "./components/CategoryTotal";
import Header from "./components/Header";
import Total from "./components/Total";

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <AddExpense />
      <ExpenseList />
      <CategoryTotal />
      <Total />
    </ExpenseProvider>
  );
}

export default App;
