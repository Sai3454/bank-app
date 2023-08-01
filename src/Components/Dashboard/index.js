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
  console.log(lastSevenDays)
  const role = Cookies.get('x-hasura-user-role')


  return (
    <div className='bank-app-dashboard-container'>
        <Header title="Accounts"/>
        <div className='bank-app-total-container'>
          <div className='bank-app-total'>
            <div className='bank-app-credit-total'>
              <h1 className='total-credit'>Total Credit</h1>
              <p className='total-credit-value'>₹ {totalCredit}</p>
            </div>
            <div className='bank-app-credit-total'>
              <h1 className='total-credit'>Total Debit</h1>
              <p className='total-credit-value'>₹ {totalDebit}</p>
            </div>
          </div>
        </div>
        <div className='bank-app-latest-transactions'>
          {role === 'admin' ? <AdminTransactionTable transactions={latestTransactions}/> :
            <TransactionTable transactions={latestTransactions}/>}
        </div>
        <CreditDebitChart lastSevenDays={lastSevenDays}/>
    </div>
  )
}

export default Dashboard