import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTransaction, updateTransaction } from '../../store/transactions';
import './index.css'

const TransactionForm = (props) => {
  let {data, onClose, method} = props

  const dispatch = useDispatch()


  if(method === "add"){
    data = {
        transaction_name: '',
        type: '',
        category: '',
        amount: '',
        date: '',
    }
  }

  const [formData, setFormData] = useState(data);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    if(method === "add"){
        dispatch(addNewTransaction({
            name: formData.transaction_name,
            user_id: 1,
            type: formData.type,
            category: formData.category,
            amount: formData.amount,
            date: formData.date
        }))
    }else{
        dispatch(updateTransaction({
            name: formData.transaction_name,
            id: formData.id,
            type: formData.type,
            category: formData.category,
            amount: formData.amount,
            date: formData.date
        }))
    }

    onClose()
    // Reset the form after submission
    setFormData({
        transaction_name: '',
        type: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='bank-app-add-transaction-form'>
      <div className='add-transaction-input-container'>
        <label className='add-transaction-label'>Transaction Name</label>
        <input
          type="text"
          name="transaction_name"
          className='add-transaction-input'
          value={formData.transaction_name}
          onChange={handleInputChange}
        />
      </div>
      <div className='add-transaction-input-container'>
        <label className='add-transaction-label'>Transaction Type</label>
        <select
          name="type"
          className='add-transaction-input'
          value={formData.type}
          onChange={handleInputChange}
        >
          <option value="uncategorized">Uncategorized</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div className='add-transaction-input-container'>
        <label className='add-transaction-label'>Category</label>
        <select
          name="category"
          className='add-transaction-input'
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="uncategorized">Uncategorized</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="work">work</option>

          {/* Add more categories as needed */}
        </select>
      </div>
      <div className='add-transaction-input-container'>
        <label className='add-transaction-label'>Amount</label>
        <input
          type="number"
          name="amount"
          className='add-transaction-input'
          value={formData.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className='add-transaction-input-container'>
        <label className='add-transaction-label'>Date</label>
        <input
          type="date"
          name="date"
          className='add-transaction-input'
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div className='add-transaction-submit-container'>
        <button type="submit" className='add-transaction-submit'>Submit</button>
      </div>
    </form>
  );
};

export default TransactionForm;
