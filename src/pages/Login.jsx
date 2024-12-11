import React from 'react'
import { useLocation } from 'react-router-dom'
import SigninForm from '../components/auth/SigninForm';

const Login = () => {
  const location = useLocation();
  return (
    <div>
      <SigninForm/>
      {location?.state?.success && (
        <h2 style={{color: 'red'}}>successfully registered</h2>
      )}
    </div>
  )
}

export default Login