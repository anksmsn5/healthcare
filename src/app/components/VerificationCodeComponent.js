import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
export const VerificationCodeComponent = () => {
    return (
        <>
            <div className="logindiv">
                <div className='loginbox'>
                    <div className='container'>
                        <img src='images/logo.png' className='logo'></img>
                        <h1>Verification Code</h1>
                        <div className="input-group form-group">Enter 4 digit code that you received on your email.</div>
                        <div className="input-group form-group">
                            <input type="text" className='otp' />
                            <input type="text" className='otp' />
                            <input type="text" className='otp' />
                            <input type="text" className='otp' />

                        </div>

                        <div className="input-group form-group">If you didn't  Receive a code! <a href=""> Resend</a></div>

                        <div className="input-group  form-group">

                            <input type="submit" className='btn btn-primary loginbtn' value="Send Code"></input>
                        </div>
                    </div>

                </div>

            </div>
            <div className='loginboxlight'></div>
        </>
    )
}
export default VerificationCodeComponent;