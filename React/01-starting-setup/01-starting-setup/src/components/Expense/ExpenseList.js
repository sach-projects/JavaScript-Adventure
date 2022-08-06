import ExpenseItem from "./ExpenseItem";
import("./ExpenseList.css");
function ExpenseList(props) {
  if (props.filteredExpenseList <= 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }
  return (props.filteredExpenseList.map((expense) => (
    <ExpenseItem
    className="expenses-list"
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  )));
}

export default ExpenseList;
