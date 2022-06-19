import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const addedExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    console.log(addedExpenseData)
    props.onAppNewData(addedExpenseData)
    console.log(NewExpense)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  )
}

export default NewExpense
