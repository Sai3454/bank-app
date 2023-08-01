import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TransactionTable from '../TransactionTable'
import Cookies from 'js-cookie'
import AdminTransactionTable from '../AdminTransactionTable'
import './index.css'
import { Header } from '../Header';

const Transactions = () => {
  const [tabName, setTabName] = useState('allTransactions')
  const {allTransactions, debitTransactions, creditTransactions} = useSelector((state)=> state.transactions)
  const role = Cookies.get('x-hasura-user-role')

  const showTab = () => {
    switch(tabName) {
        case 'allTransactions':
          return role === 'admin' ? <AdminTransactionTable transactions={allTransactions}/> :
          <TransactionTable transactions={allTransactions}/>
        case 'creditTransactions':
           return role === 'admin' ? <AdminTransactionTable transactions={creditTransactions}/> :
           <TransactionTable transactions={creditTransactions}/>
        case 'debitTransactions':
            return role === 'admin' ? <AdminTransactionTable transactions={debitTransactions}/> :
            <TransactionTable transactions={debitTransactions}/>
        default:
          // code block
      }
  }

  const handleTabClick = (tab) => {
    setTabName(tab);
  };

  return (
    <div className="bank-app-transactions-all">
      <Header title="Transactions"/>
      <div className='bank-app-transactions-conatiner'>
      <div className="bank-app-transactions-tabs">
        <div
          className={`bank-app-transactions-tab`}
          onClick={() => handleTabClick('allTransactions')}
        >
          <p>All Transactions</p>
          {tabName === 'allTransactions' &&  <p className={`transactions-highlite  bank-app-transactions-active`}></p>}

        </div>
        <div
          className={`bank-app-transactions-tab`}
          onClick={() => handleTabClick('creditTransactions')}
        >
          <p>Credit Transactions</p>
          {tabName === 'creditTransactions' &&  <p className={`transactions-highlite  bank-app-transactions-active`}></p>}

        </div>
        <div
          className={`bank-app-transactions-tab`}
          onClick={() => handleTabClick('debitTransactions')}
        >
          <p>Debit Transactions</p>
          {tabName === 'debitTransactions' &&  <p className={`transactions-highlite  bank-app-transactions-active`}></p>}

        </div>
      </div>
        <div className='bank-app-latest-transactions'>
          {showTab()}
        </div>
      </div>
    </div>
  );
}

export default Transactions