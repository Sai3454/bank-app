import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdOutlineModeEditOutline, MdDeleteOutline, MdOutlineArrowCircleUp, MdOutlineArrowCircleDown} from 'react-icons/md'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTransaction, resetUpdateToastMessage, resetDeleteToastMessage, updateTransaction } from '../../store/transactions'
import PureModal from 'react-pure-modal';
import TransactionForm from '../AddTransactionForm'
import AlertDialogDelete from '../AlertDialog';
import { Loader } from '../Loader'


const TransactionTable = (props) => {
  const {transactions} = props
  const dispatch = useDispatch()
  const {loading, updateToastMessage, deleteToastMessage} = useSelector((state) => state.transactions)


  if(updateToastMessage !== null){
    if(updateToastMessage.method === "success"){
      toast.success( updateToastMessage.message, {
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
      toast.error(updateToastMessage.message, {
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
    dispatch(resetUpdateToastMessage())
  }

  if(deleteToastMessage !== null){
    if(deleteToastMessage.method === "success"){
      toast.success( deleteToastMessage.message, {
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
      toast.error(deleteToastMessage.message, {
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
    dispatch(resetDeleteToastMessage())
  }


  // creating transaction data that to be updated and to handle modal

  const [updateTransactionOpen, setUpdateOpen] = useState(false)

  const [updateData, setUpdateData] = useState({})

  // creating transaction data that to be delete and to handle modal

  const [deleteteTransactionOpen, setDeleteOpen] = useState(false)

  const [deleteData, setDeleteData] = useState({})

  /// Handle data to update transaction details

  const handleEditable = (data) => {
    setUpdateOpen(true)
    setUpdateData(data)
  }

  const handleUpdateCloseModal = () => {
    setUpdateOpen(false)
  }

  // const handleSubmitUpdateTransaction = () => {
  //   dispatch(updateTransaction(updateData))
  //   setUpdateData({})
  // }


  /// Handle data to delete transaction details

  const handleDeleteTransaction = (data) => {
    setDeleteData({id: data.id})
    console.log(data.id)
    setDeleteOpen(true)
  }

  const handleDeleteCloseModal = () => {
    setDeleteOpen(false)
  }

  const handleSubmitDeleteTransaction = () => {
    dispatch(deleteTransaction(deleteData))
    setDeleteData({})
  }


  const formatDate = (dateTimeString) => { 

          const dateTime = new Date(dateTimeString);
          
          const formattedDate = dateTime.toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
          });
          
          const formattedTime = dateTime.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          });
          
          const formattedDateTime = `${formattedDate}, ${formattedTime}`;
           return formattedDateTime
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='transaction-table-container'>
          <div className='transaction-table-col'>
            <div className='transaction-table-col-names transaction-name-col'>Transaction Name</div>
            <div className='transaction-table-col-names transaction-category-col'>Category</div>
            <div className='transaction-table-col-names transaction-date-col'>Date</div>
            <div className='transaction-table-col-names transaction-amount-col'>Amount</div>
            <div className='record transaction-editable-col'></div>
          </div>
          <hr className='record-divider'/>
          <div className='transaction-records-container'>
            {transactions.map(eachTransaction => (
              <div key ={eachTransaction.id}>
              <div className='transaction-record'>
                <div className='record-name transaction-name-col'>
                  {eachTransaction.type === 'credit' ? <MdOutlineArrowCircleUp className='transaction-up-arrow'/> : <MdOutlineArrowCircleDown className='transaction-down-arrow' />}
                  <p>{eachTransaction.transaction_name}</p>
                </div>
                <div className='record transaction-category-col'>
                  <p>{eachTransaction.category}</p>
                </div>
                <div className='record transaction-date-col'>
                  <p>{formatDate(eachTransaction.date)}</p>
                </div>
                <div className={`record transaction-amount-col ${eachTransaction.type === 'credit' ? 'amount-credit' : 'amount-debit'}`}>
                  {eachTransaction.type === "credit" ? (<p>+₹{eachTransaction.amount}</p>) : (<p>-₹{eachTransaction.amount}</p>)}
                </div>
                <div className='record transaction-editable-col'>
                  <button onClick={() => handleEditable(eachTransaction)} type='button'>
                    <MdOutlineModeEditOutline className='transaction-editor'/>
                  </button>
                  <button onClick={() => handleDeleteTransaction(eachTransaction)} type='button'>              
                    <MdDeleteOutline className='transaction-delete'/>
                  </button>
                </div>
              </div>
              <hr className='record-divider'/>
              </div>
            ))}
          </div>

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
          <PureModal 
                  header="Update Transaction" 
                  isOpen={updateTransactionOpen}
                  onClose={handleUpdateCloseModal}
              >
                  <TransactionForm onClose={handleUpdateCloseModal} data={updateData} method="update"/>
            </PureModal>
          <AlertDialogDelete open={deleteteTransactionOpen} close={handleDeleteCloseModal} submit={handleSubmitDeleteTransaction} delelte={true} />
        </div>
      )}
    </div>
  )
}


export default TransactionTable