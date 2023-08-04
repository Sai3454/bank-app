import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from "react-icons/fa";
import PureModal from 'react-pure-modal';
import TransactionForm from '../AddTransactionForm';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { resetAddToastMessage } from '../../store/transactions';

export const Header = (props) => {

const [addTransactionOpen, setAddOpen] = useState(false)
const {addToastMessage} = useSelector((state) => state.transactions)

const dispatch = useDispatch()

  const handleAddCloseModal = () => {
    setAddOpen(false)
  }

  if(addToastMessage !== null){
    if(addToastMessage.method === "success"){
      toast.success( addToastMessage.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      toast.error(addToastMessage.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    dispatch(resetAddToastMessage())
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

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

    </div>
  )
}


