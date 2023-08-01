import React from 'react'
import ReactLoading from 'react-loading';
import './index.css'


export const Loader = () => {
  return (
    <div className='bank-app-loading'>
        <ReactLoading type="bubbles" color="blue" height={100} width={100} />
    </div>
  )
}
