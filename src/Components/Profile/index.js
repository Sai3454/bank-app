import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import './index.css'
import { Header } from '../Header';


const Profile = () => {
  const {userDetails} = useSelector((state) => state.transactions)

  const userId = Cookies.get('x-hasura-user-id')

  const index = userDetails.findIndex(each => each.userId === parseInt(userId))

  const selectedUser = userDetails[index]

  return (
    <div>
      <Header title="Profile"/>
    <div className="bank-app-profile-container">
        <div className='profile-pic-container'>
            <img className='custome-image' src={selectedUser.profilePic} alt={selectedUser.name} />
        </div>
      <div className="bank-app-profile-user-details">
        <div className='row-1'>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Username:
        </label>
        <input
            type="text"
            name="username"
            className='bank-app-profile-input'
            defaultValue={selectedUser.username}
            // onChange={handleChange}
          />
          </div>
          <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Permanent Address:
          
        </label>
        <input
            type="text"
            className='bank-app-profile-input'
            name="permanentAddress"
            defaultValue={selectedUser.permanentAddress}
            // onChange={handleChange}
          /></div>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Email:
        </label>
        <input type="text" name="email" className='bank-app-profile-input' defaultValue={selectedUser.email} />
        </div>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Date of Birth:
          
        </label>
        <input
            type="date"
            name="dateOfBirth"
            className='bank-app-profile-input'
            defaultValue={selectedUser.dateOfBirth}
            // onChange={handleChange}
          /></div>
        </div>
        <div className='row-1'>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          City:
        </label>
        <input type="text" name="city" className='bank-app-profile-input' defaultValue={selectedUser.city}  />
        </div>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Postal Code:
          
        </label>
        <input
            type="text"
            name="postalCode"
            className='bank-app-profile-input'
            defaultValue={selectedUser.postalCode}
            // onChange={handleChange}
          />
        </div>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Country:
        </label>
        <input type="text" name="country" className='bank-app-profile-input' defaultValue={selectedUser.country} />
        </div>
        <div className='profile-input-conatiner'>
        <label className='bank-app-profile-label'>
          Profile Picture URL:
          
        </label>
        <input
            type="text"
            name="profilePic"
            className='bank-app-profile-input'
            defaultValue={selectedUser.profilePic}
            // onChange={handleChange}
          />
        </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Profile;
