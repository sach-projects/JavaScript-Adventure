import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('');
  const onYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={onYearChange} />
      {props.expenses
        .filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </Card>
  );
}

export default Expenses;
