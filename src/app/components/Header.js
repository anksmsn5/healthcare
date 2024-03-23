import React from 'react'


const Header = () => {
    return (
        <>
            <section className='header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src='../images/logo.png' className='headerLogo' />
                        </div>
                        <div className='col-md-7'>

                        </div>
                        <div className='col-md-3'>
                            <h5 className='UserName'>Shivani Verma</h5>
                            <div className="dropdown">
                                <img src='../images/userImg.png' className='userImg'></img>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header