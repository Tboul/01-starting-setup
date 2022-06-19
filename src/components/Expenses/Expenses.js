import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [yearSelected, setYearSelcted] = useState('2020')
  const getYear = (selectedYear) => {
    setYearSelcted(selectedYear)
    console.log('from Expenses ' + yearSelected)
  }
  const filterdList = props.expenses.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === yearSelected
    )
  })
  let listTotal = filterdList.length

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          setYear={yearSelected}
          onSelectYear={getYear}
          total={listTotal}
        />
        <li>
          <ExpensesList
            listTotal={listTotal}
            filterdList={filterdList}
          />
        </li>
      </Card>
    </div>
  )
}

export default Expenses
