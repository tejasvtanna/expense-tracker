import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({
   charge,
   amount,
   handleCharge,
   handleAmount,
   handleSubmit,
   editMode,
}) => {
   return (
      <form onSubmit={handleSubmit}>
         <div className='form-center'>
            <div className='form-group'>
               <label htmlFor='charge'>Charge</label>
               <input
                  type='text'
                  className='form-control'
                  id='charge'
                  name='charge'
                  placeholder='e.g. rent'
                  value={charge}
                  onChange={(e) => handleCharge(e.target.value)}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='amount'>Amount</label>
               <input
                  type='number'
                  className='form-control'
                  id='amount'
                  name='amount'
                  placeholder='e.g. 123'
                  value={amount}
                  onChange={(e) => handleAmount(e.target.value)}
               />
            </div>
         </div>
         <button type='submit' className='btn'>
            {editMode ? 'Edit' : 'Submit'}
            <MdSend className='btn-icon' />
         </button>
         <br />
      </form>
   )
}

export default ExpenseForm
