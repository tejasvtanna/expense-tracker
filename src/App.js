import React, { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import { v4 as uuid } from 'uuid'

const initialExpenses = [
   { id: uuid(), charge: 'rent', amount: 1600 },
   { id: uuid(), charge: 'car payment', amount: 400 },
   {
      id: uuid(),
      charge: 'credit card bill ',
      amount: 1200,
   },
]

function App() {
   // all expenses, add expense
   const [expenses, setExpenses] = useState(initialExpenses)
   const [editId, setEditId] = useState('')
   const [charge, setCharge] = useState('')
   const [amount, setAmount] = useState('')
   const [alert, setAlert] = useState('')

   const handleAlert = (type, text) => {
      setAlert({ show: true, type, text })
      setTimeout(() => {
         setAlert({ show: false })
      }, 3000)
   }

   const handleSubmit = (e) => {
      debugger
      e.preventDefault()
      if (charge === '' || amount === 0) {
         handleAlert('danger', 'Invalid value')
      } else if (editId === '') {
         const newExpense = { id: uuid(), charge, amount }
         setExpenses([...expenses, newExpense])
         handleAlert('success', 'Item added')
         setCharge('')
         setAmount('')
      } else {
         //  const expList = [...expenses]
         //  const idx = expList.findIndex((e) => e.id === editId)
         //  expList[idx].charge = charge
         //  expList[idx].amount = amount
         //  setExpenses(expList)
         const tempExpenses = expenses.map((item) =>
            item.id === editId ? { ...item, charge, amount } : item
         )
         setExpenses(tempExpenses)
         setEditId('')
         setCharge('')
         setAmount('')
      }
   }

   const handleClearAll = () => {
      if (window.confirm('Are you sure you want to clear all items?')) {
         setExpenses([])
         handleAlert('success', 'All items cleared')
      }
   }

   const handleEdit = (id) => {
      //   window.alert(id)
      setCharge(expenses.find((e) => e.id === id).charge)
      setAmount(expenses.find((e) => e.id === id).amount)
      setEditId(id)
   }

   const handleDelete = (id) => {
      const expList = expenses.filter((e) => e.id !== id)
      setExpenses(expList)
      handleAlert('success', 'Item deleted')
   }

   return (
      <>
         {alert.show && <Alert alert={alert} />}
         <h1>Expense Tracker</h1>
         <main className='App'>
            <ExpenseForm
               charge={charge}
               amount={amount}
               handleAmount={setAmount}
               handleCharge={setCharge}
               handleSubmit={handleSubmit}
               editMode={editId !== ''}
            />
            <ExpenseList
               expenses={expenses}
               handleClearAll={handleClearAll}
               handleEdit={handleEdit}
               handleDelete={handleDelete}
            />
         </main>
         <h1>
            total spending:{' '}
            <span className='total'>
               {expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0)}
            </span>
         </h1>
      </>
   )
}

export default App
