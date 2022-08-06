import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses,setNewExpenses] = useState(DUMMY_EXPENSE)

  const AddExpense = (newlyAddedExpense) => {
    setNewExpenses((previouslyAddedExpenses) => {return [newlyAddedExpense,...previouslyAddedExpenses];});
  };
  
  return(
    <div>
      <NewExpense AddExpense={AddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
