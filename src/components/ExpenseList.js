import React from 'react'
import ExpenseItem from '../components/ExpenseItem'
import { FiTrash } from 'react-icons/fi'

function ExpenseList({ expenses, handleClearAll, handleEdit, handleDelete }) {
   return (
      <div>
         {expenses.map((exp) => (
            <ExpenseItem
               key={exp.id}
               expense={exp}
               handleEdit={handleEdit}
               handleDelete={handleDelete}
            />
         ))}

         {expenses.length > 0 && (
            <button className='btn' onClick={handleClearAll}>
               Clear Expenses
               <FiTrash className='btn-icon'></FiTrash>
            </button>
         )}
      </div>
   )
}

export default ExpenseList
