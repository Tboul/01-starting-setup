import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.listTotal === 0) {
    return <h2 className='expenses-list__fallback'>No Items Found</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.filterdList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
