import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import("./NewExpense.css");
function NewExpense(props) {
  const onExpenseFormSubmit = (expenseFormData) => {
    const newExpenseObject = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    props.AddExpense(newExpenseObject);
  };
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const displayForm = (isFormDisplayed) =>{
    //console.log(event);
    setIsFormDisplayed(isFormDisplayed);
  }
  if (isFormDisplayed) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onExpenseFormSubmit={onExpenseFormSubmit}
          onCancel={displayForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={displayForm}>Add New Expense</button>
      </div>
    );
  }
}

export default NewExpense;
