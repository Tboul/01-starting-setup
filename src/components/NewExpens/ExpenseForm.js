import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const handleTitleInput = (e) => {
    setEnteredTitle(e.target.value)
  }
  const handleAmountInput = (e) => {
    setEnteredAmount(e.target.value)
  }
  const handleDateInput = (e) => {
    setEnteredDate(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(enteredData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      
        <div className='new-expense__control'>
          <button>Add Expense</button>
          <label>Title</label>
          <input
            type='text'
            onChange={handleTitleInput}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0/01'
            step='0.01'
            value={enteredAmount}
            onChange={handleAmountInput}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={handleDateInput}
          />
       
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
