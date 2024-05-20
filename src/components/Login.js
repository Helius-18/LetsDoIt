import React, { useState } from 'react'
import { Navigate } from "react-router-dom";

const Login = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const sendOtp = () => {
    setOtpSent(true);
  }

  const verifyOtp = () => {
    setIsAuth(true);
  }

  return (
    isAuth ?
      (<Navigate to="/dashboard" replace={true} />)
      :
      (<div style={{ 'height': '100vh' }}>
        <div className="h-100 d-flex align-items-center justify-content-center row">
          <div className="col-11 col-md-2">
            <div className='mb-3'>
              <h4>Lets Do It</h4>
              <p>Verify your email to login or signup</p>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            {otpSent ? (
              <div>
                <div className="mb-3">
                  <label htmlFor="inputotp" className="form-label">Enter OTP</label>
                  <input type="password" id="inputotp" className="form-control" />
                </div>
                <div className="mb-3 d-flex gap-2">
                  <button type="button" className="btn btn-primary" onClick={verifyOtp}>Verify</button>
                  <button type="button" className="btn btn-outline-secondary">Resend</button>
                </div>
              </div>
            ) : (
              <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={sendOtp}>Send OTP</button>
              </div>
            )}
          </div>
        </div>
      </div>)
  )
}

export default Login