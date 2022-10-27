import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");
  const onYearChange = (year) => {
    setSelectedYear(year);
  };
  let filteredExpenseList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenseList}></ExpensesChart>
      <ExpensesFilter onYearChange={onYearChange} />
      <ExpenseList selectedYear={selectedYear} filteredExpenseList={filteredExpenseList}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </Card>
  );
}

export default Expenses;
