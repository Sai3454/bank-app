import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import PureModal from 'react-pure-modal';
import TransactionForm from '../AddTransactionForm';
import './index.css'

export const Header = (props) => {

const [addTransactionOpen, setAddOpen] = useState(false)

  const handleAddCloseModal = () => {
    setAddOpen(false)
  }

  return (
    <div className='bank-app-header'>
        <div className='bank-app-header-menu'>
                <h1 className='accounts-head'>{props.title}</h1>
                <button className="add-transaction-button" onClick={() => setAddOpen(true)}>
                    <h1 className='add-transaction-head'>Add Transaction</h1>
                    <FaPlus className='add-transaction-plus'/>
                </button>
        </div>
        <PureModal 
            header="Add Transaction" 
            isOpen={addTransactionOpen}
            onClose={handleAddCloseModal}
        >
            <TransactionForm onClose={handleAddCloseModal} method="add"/>
        </PureModal>

    </div>
  )
}


