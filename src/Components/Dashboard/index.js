import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useSelector} from 'react-redux'
import './index.css'
import TransactionTable from '../TransactionTable';
import { Header } from '../Header';
import CreditDebitChart from '../SevenDaysChart';
import AdminTransactionTable from '../AdminTransactionTable';
import Cookies from 'js-cookie';

const Dashboard = () => {

  const  {lastSevenDays, latestTransactions, totalCredit, totalDebit} = useSelector((state) => state.transactions)
  const role = Cookies.get('x-hasura-user-role')


  return (
    <div className='bank-app-dashboard-container'>
        <Header title="Accounts"/>
        <div className='bank-app-total-container'>
          <div className='bank-app-total'>
            <div className='bank-app-credit-total'>
              <div className='bank-app-credit-details'>
                <p className='total-credit-value'>₹ {totalCredit}</p>
                <h1 className='total-credit'>Credit</h1>
              </div>
              <div className='bank-app-credit-image-container'>
                <img className='bank-app-credit-image' src="https://saikirishnakoorakula.tech/images/credit.png" alt="credit"/>
              </div>
            </div>
            <div className='bank-app-credit-total'>
                <div className='bank-app-credit-details'>
                  <p className='total-debit-value'>₹ {totalDebit}</p>
                  <h1 className='total-credit'>Debit</h1>
                </div>
                <div className='bank-app-credit-image-container'>
                  <img className='bank-app-credit-image' src="https://saikirishnakoorakula.tech/images/debit.png" alt="credit"/>
                </div>
            </div>
          </div>
        </div>
        <div className='bank-app-header-text-container'>
          <div className='bank-app-header-txt'>
            <h1 className='bank-app-header-text'>Latest Transactions</h1>
          </div>
        </div>
        <div className='bank-app-latest-transaction'>
          {role === 'admin' ? <AdminTransactionTable transactions={latestTransactions}/> :
            <TransactionTable transactions={latestTransactions}/>}
        </div>
        <div className='bank-app-header-text-container'>
          <div className='bank-app-header-txt'>
            <h1 className='bank-app-header-text'>Debit and Credit Overview</h1>
          </div>
        </div>
        <CreditDebitChart lastSevenDays={lastSevenDays}/>
    </div>
  )
}

export default Dashboard