import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
   //    debugger

   return (
      <li className='item'>
         <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>{expense.amount}</span>
         </div>
         <div>
            <button
               className='edit-btn'
               aria-label='edit button'
               onClick={() => handleEdit(expense.id)}
            >
               <MdEdit />
            </button>
            <button
               className='clear-btn'
               aria-label='delete button'
               onClick={() => handleDelete(expense.id)}
            >
               <MdDelete />
            </button>
         </div>
      </li>
   )
}

export default ExpenseItem
