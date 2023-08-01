import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import SignInForm from './Components/LoginPage'
import ProtectedRoute from './Components/ProtectedRoute'
import { Home } from './Components/Home'

const App = () => {
  return (
      <div className='bank-app-container'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<SignInForm />} />
            <Route
              path="/projects/money-app"
              element={<ProtectedRoute component={Home} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App