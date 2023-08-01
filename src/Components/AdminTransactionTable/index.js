import React from 'react'
import {MdOutlineArrowCircleUp, MdOutlineArrowCircleDown} from 'react-icons/md'
import './index.css'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import * as Avatar from '@radix-ui/react-avatar';


const AdminTransactionTable = (props) => {
  const {transactions} = props

  const {loading, userDetails} = useSelector((state) => state.transactions)

  const getUsername = (userId) => {
    const index = userDetails.findIndex(each => each.userId === userId)
    return userDetails[index].name
  }

  const getProfilePic = (userId) => {
    const index = userDetails.findIndex(each => each.userId === userId)
    return userDetails[index].profilePic
  }

  console.log(userDetails)

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
            <div className='transaction-table-col-names transaction-name-col'>User Name</div>
            <div className='record transaction-editable-col'>Transaction Name</div>
            <div className='transaction-table-col-names transaction-category-col'>Category</div>
            <div className='transaction-table-col-names transaction-date-col'>Date</div>
            <div className='transaction-table-col-names transaction-amount-col'>Amount</div>
          </div>
          <hr className='record-divider'/>
          <div className='transaction-records-container'>
            {transactions.map(eachTransaction => (
              <div key ={eachTransaction.id}>
              <div className='transaction-record'>
                <div className='record-name transaction-name-col'>
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                        className="AvatarImage"
                        src={getProfilePic(eachTransaction.user_id)}
                        alt="Colm Tuite"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        CT
                    </Avatar.Fallback>
                </Avatar.Root>
                  <p>{getUsername(eachTransaction.user_id)}</p>
                </div>
                <div className='record transaction-editable-col'>
                  <p>{eachTransaction.transaction_name}</p>
                </div>
                <div className='record transaction-category-col'>
                  {eachTransaction.category}
                </div>
                <div className='record transaction-date-col'>
                  {formatDate(eachTransaction.date)}
                </div>
                <div className={`record transaction-amount-col ${eachTransaction.type === 'credit' ? 'amount-credit' : 'amount-debit'}`}>
                  {eachTransaction.type === "credit" ? (<p>+₹{eachTransaction.amount}</p>) : (<p>-₹{eachTransaction.amount}</p>)}
                </div>
              </div>
              <hr className='record-divider'/>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


export default AdminTransactionTable