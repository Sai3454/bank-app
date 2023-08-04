import React, { useState } from 'react';
import {FaHome, FaMoneyCheckAlt,FaUserAlt} from 'react-icons/fa'
import './index.css'; // Import the CSS for styling
import { onSuccessLogout, setPageName } from '../../store/transactions';
import { useDispatch, useSelector } from 'react-redux';
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
import AlertDialogDelete from '../AlertDialog';


const LeftSidebar = () => {
  const {pageName, userDetails} = useSelector((state) => state.transactions)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userId = Cookies.get('x-hasura-user-id')

    const index = userDetails.findIndex(each => each.userId === parseInt(userId))
    const name =  userDetails[index].name
    const profilePic = userDetails[index].profilePic
  

  const [logout, setLogoutOpen] = useState(false)

  const handleLogOut = () => {
    setLogoutOpen(true)
  }

  const handleCloseLogoutModal = () => {
    setLogoutOpen(false)
  }

  const handleExecuteLogout = () => {
    Cookies.remove("x-hasura-admin-secret");
    Cookies.remove("x-hasura-user-id");
    Cookies.remove("x-hasura-user-role");
    dispatch(onSuccessLogout())
    navigate('/login')
  }


  const handleTabClick = (page) => {
    dispatch(setPageName({page_name: page}));
  };


  return (
    <div className="bank-app-left-sidebar">
        <div className='bank-app-sidebar-top'>
      <div className="bank-app-logo-container">
        <img src="https://saikirishnakoorakula.tech/Logo.png" alt="alt" className='bank-app-logo'/>
      </div>
      <div className="bank-app-tabs">
        <div
          className={`bank-app-tab`}
          onClick={() => handleTabClick('dashboard')}
        >
          <p className={pageName === "dashboard" ? `bank-app-active` : 'highlite'}></p>
          <FaHome className={pageName === "dashboard" ? `bank-app-active-menu-icon` : 'bank-app-menu-icon'}/>
          <p className={pageName === "dashboard" ? `bank-app-active-menu` : 'bank-app-menu'}>Dashboard</p>
        </div>
        <div
          className={`bank-app-tab`}
          onClick={() => handleTabClick('transactions')}
        >
          <p className={pageName === "transactions" ? `bank-app-active` : 'highlite'}></p>
          <FaMoneyCheckAlt className={pageName === "transactions" ? `bank-app-active-menu-icon` : 'bank-app-menu-icon'}/>
          <p className={pageName === "transactions" ? `bank-app-active-menu` : 'bank-app-menu'}>Transactions</p>
        </div>
        <div
          className={`bank-app-tab`}
          onClick={() => handleTabClick('profile')}
        >
          <p className={pageName === "profile" ? `bank-app-active` : 'highlite'}></p>
          <FaUserAlt className={pageName === "profile" ? `bank-app-active-menu-icon` : 'bank-app-menu-icon'}/>
          <p className={pageName === "profile" ? `bank-app-active-menu` : 'bank-app-menu'}>Profile</p>
        </div>
      </div>
      </div>
      <div className="bank-app-bottom-icons">
        <div className='bank-app-bottom-icons-container'>
              <div className='bank-app-sidebar-avatar-conatiner'>
                <img className='bank-app-user-profile-pic' src={profilePic} alt='profile-pic' />
              </div>
                <div className='profile-name'>
                  <h3 className='bank-app-profile-name'>{name}</h3>
                </div>
        <div className="bank-app-logout-icon">
          <button type='button' onClick={handleLogOut} >
            <FiLogOut />
          </button>
        </div>
        </div>
      </div>
      <AlertDialogDelete open={logout} close={handleCloseLogoutModal} submit={handleExecuteLogout}/>
    </div>
  );
};

export default LeftSidebar;
