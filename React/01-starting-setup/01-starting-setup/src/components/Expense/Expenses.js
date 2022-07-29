import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const onYearChange = (year) => {
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={onYearChange} />
      {props.expenses.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>)}
    </Card>
  );
}

export default Expenses;
