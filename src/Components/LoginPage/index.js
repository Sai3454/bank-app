import React, { useState } from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../store/transactions';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

//   const {loginError, userId} = useSelector((state) => state.transactions)
const {loginError, userId} = useSelector((state) => state.transactions)


  const dispatch = useDispatch()

  const token = Cookies.get('x-hasura-admin-secret')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserId(formData))
  }

  return (
    <div>
    {token === undefined ? (
      <div className='bank-app-login-container'>
        <form className="bank-app-login-form" onSubmit={handleSubmit}>
      <div className='bank-app-login-input-container'>
        <label className="bank-app-login-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bank-app-login-input"
        />
      </div>
      <div className='bank-app-login-input-container'>
        <label className="bank-app-login-label">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="bank-app-login-input"
        />
      </div>
      <button type="submit" className="bank-app-login-button">Sign In</button>
      {loginError !== null ? <p className='bank-app-show-error-login'>*{loginError}</p> : ""}
    </form>
    </div>
  ) : (
    <Navigate to="/projects/money-app" />
  )}
  </div>)
}


export default SignInForm;
