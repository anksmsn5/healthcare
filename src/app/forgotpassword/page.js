import React from 'react'
import Login from '../components/Login';
import Watchcontainer from '../components/watchcontainer';
import ForgotPasswordComponent from '../components/ForgotPassword';

export const ForgotPassword = () => {
    return (
        <>
            <main className="bg-gradients">
                <div className="withbgimg">
                    <div className="row">
                        <div className="col-md-4">
                            <ForgotPasswordComponent />
                        </div>
                        <div className="col-md-8">
                            <div className="smallcontainer">
                                <Watchcontainer />

                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
export default ForgotPassword;
