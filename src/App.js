import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { INITIAL_EXPENSES } from "./data";

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const handleExpense = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onGettingExpense={handleExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
