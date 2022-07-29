import ExpenseForm from "./ExpenseForm";
import("./NewExpense.css");
function NewExpense(props) {
  const onExpenseFormSubmit = (expenseFormData) => {
    const newExpenseObject = {
      ...expenseFormData,
      id: Math.random().toString()
    };
    props.AddExpense(newExpenseObject);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={onExpenseFormSubmit}/>
    </div>
  );
}

export default NewExpense;
