import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
export const ForgotPasswordComponent = () => {
    return (
        <>
            <div className="logindiv">
                <div className='loginbox'>
                    <div className='container'>
                        <img src='images/logo.png' className='logo'></img>
                        <h1>Forgot Password</h1>
                        <div className="input-group form-group">Please enter your email below to  send you a password reset code</div>
                        <div className="input-group form-group">
                            <label>Email</label>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="text" placeholder="Email" className='form-control' />
                        </div>

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
export default ForgotPasswordComponent;
