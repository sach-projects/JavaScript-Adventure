import React, { useState } from "react";
import("./ExpenseForm.css");

function ExpenseForm(props) {
  const [title, UpdateTitle] = useState("");
  const [amount, UpdateAmount] = useState("");
  const [date, UpdateDate] = useState("");
  const titleChangeHandler = (event) => {
    UpdateTitle(event.target.value);
    //console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    UpdateAmount(event.target.value);
    //console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    UpdateDate(event.target.value);
    //console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = { title: title, amount: amount, date: new Date(date) };
    props.onExpenseFormSubmit(data);
    hideForm();
  };
  const hideForm = ()=>{
    UpdateTitle("");
    UpdateAmount("");
    UpdateDate("");
    props.onCancel(false);
  }
  const cancelHandler = () =>{
    hideForm();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input type="date" onChange={dateChangeHandler} value={date}></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
