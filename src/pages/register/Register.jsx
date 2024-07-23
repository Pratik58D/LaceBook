import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">LaceBook</h3>
                <span className='loginDesc'>
                    connect with friends and the world around you on Lacebook
                </span>

            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Username' className='loginInput' />
                    <input type="text" placeholder='Email' className='loginInput' />
                    <input type="text" placeholder='Create Password' className='loginInput' />
                    <input type="text" placeholder='Confirm new Password' className='loginInput' />
                    <button className="loginButton">Log In</button>
                    <button className='loginRegisterButton'>
                        Log into Account
                    </button>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register
