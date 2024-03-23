import React from 'react';
import VerificationCodeComponent from '../components/VerificationCodeComponent';
import Watchcontainer from '../components/watchcontainer';

export const VerificationCode = () => {
    return (
        <>
            <main className="bg-gradients">
                <div className="withbgimg">
                    <div className="row">
                        <div className="col-md-4">
                            <VerificationCodeComponent />
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
export default VerificationCode;