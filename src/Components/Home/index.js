import React, { useEffect } from 'react'
import Transactions from '../Transactions'
import LeftSidebar from '../SideBar'
import Dashboard from '../Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalDebitCredits, loadTransactions, setPageName } from '../../store/transactions'
import Profile from '../Profile'
import './index.css'
import { Loader } from '../Loader'
import Cookies from 'js-cookie'
import { FailureView } from '../FailureView'

export const Home = () => {

  const {pageName} = useSelector((state) => state.transactions)
  const role = Cookies.get('x-hasura-user-role')


  const dispatch = useDispatch()
  
  const showPage = () => {
    switch(pageName){
        case "dashboard":
            return <Dashboard />
        case "transactions":
            return <Transactions />
        case "profile":
            return <Profile />
        case "failure":
          return <FailureView />
        default :
            return <Loader />
    }

  }

  useEffect(() => {
    dispatch(loadTransactions())
    dispatch(setPageName({page_name: 'dashboard'}))
    dispatch(getTotalDebitCredits(role))
  }, [])

  return (
    <div className='bank-app-container'>
        <LeftSidebar />
        {showPage()}
      </div>
  )
}
