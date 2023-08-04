import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'

export const FailureView = () => {
  const {error} = useSelector((state) => state.transactions)

  return (
    <div className='failue-view-container'>
        <div className='failure-view'>
            <h1 className='failure-view-head'>Some Error Occured</h1>
            <p>{error}</p>
        </div>
    </div>
  )
}
