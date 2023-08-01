import React, { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './index.css'; // Import the CSS for styling
import { setPageName } from '../../store/transactions';
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
          {pageName === 'dashboard' &&  <p className={`highlite  bank-app-active`}></p>}
          <p>Dashboard</p>
        </div>
        <div
          className={`bank-app-tab`}
          onClick={() => handleTabClick('transactions')}
        >
          {pageName === 'transactions' &&  <p className={`highlite  bank-app-active`}></p>}
          <p>Transactions</p>
        </div>
        <div
          className={`bank-app-tab`}
          onClick={() => handleTabClick('profile')}
        >
          {pageName === 'profile' &&  <p className={`highlite  bank-app-active`}></p>}
          <p>Profile</p>
        </div>
      </div>
      </div>
      <div className="bank-app-bottom-icons">
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                        className="AvatarImage"
                        src={profilePic}
                        alt="Colm Tuite"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        CT
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <h3>{name}</h3>
                </div>
        <div className="bank-app-logout-icon">
          <button type='button' onClick={handleLogOut} >
            <FiLogOut />
          </button>
        </div>
      </div>
      <AlertDialogDelete open={logout} close={handleCloseLogoutModal} submit={handleExecuteLogout}/>

    </div>
  );
};

export default LeftSidebar;
