import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {
    return (
        <>
            <div className="logindiv">
                <div className='loginbox'>
                    <div className='container'>
                        <img src='images/logo.png' className='logo'></img>
                        <h1>Sign In</h1>
                        <div className="input-group form-group">Enter your details below to continue</div>
                        <div className="input-group form-group">
                            <label>Email</label>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="text" placeholder="Email" className='form-control' />
                        </div>
                        <div className="input-group  form-group">
                            <label>Password</label>
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder="Password" className='form-control' />
                        </div>
                        <div className="form-group text-right" align="right">
                            <a href="">Forgot Password?</a>
                        </div>
                        <div className="input-group  form-group">

                            <input type="submit" className='btn btn-primary loginbtn' value="Sign In"></input>
                        </div>
                    </div>

                </div>

            </div>
            <div className='loginboxlight'></div>
        </>
    )
}
export default Login;
