import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const addedExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAppNewData(addedExpenseData);
  };
  const [showForm, setShowForm] = useState(false);
  const showAdd = () => {
    setShowForm(true);
  };
  const hideAdd = () => {
    setShowForm(false);
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideAdd={hideAdd}
        />
      ) : (
        <button onClick={showAdd}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
