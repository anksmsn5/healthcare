import BreadCrumbs from '@/app/components/BreadCrumbs'
import Header from '@/app/components/Header'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import SideMenu from '@/app/components/SideMenu'

const Dashboard = () => {
    return (
        <>
            <section className='pageBbody'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <SideMenu />
                        </div>
                        <div className='col-md-10'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <Header />
                                    </div>
                                    <div className='col-md-12'>
                                        <BreadCrumbs />
                                    </div>
                                    <div className='col-md-12 mt-3'>
                                        <div className="card">

                                            <div className="card-body ">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="input-group form-group">

                                                            <FontAwesomeIcon icon={faSearch} />
                                                            <input type="text" placeholder="Search" className='form-control' />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <a href='' className='btn btn-primary mediumbutton alignrightbtn mt-3'>Add Patient <FontAwesomeIcon icon={faPlusCircle} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body zero-padding">
                                                <table className='table table-bordered'>
                                                    <tr>
                                                        <th>Sr. No.</th>
                                                        <th>Name</th>
                                                        <th>Device Id</th>
                                                        <th>Email Id</th>
                                                        <th>Password</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Ankur Srivastava</td>
                                                        <td>DEVRTUI34567</td>
                                                        <td>ankur.s@lookupitsolutions.com</td>
                                                        <td>sdsdsdsdsd</td>
                                                        <td>
                                                            <a href=""><FontAwesomeIcon icon={faEye} className="Actionicon  text-success" /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faNoteSticky} className="Actionicon  text-primary" />
                                                            </a>
                                                            <a href=""><FontAwesomeIcon icon={faEdit} className="Actionicon  " /></a>
                                                            <a href="">
                                                                <FontAwesomeIcon icon={faTrash} className="Actionicon  text-danger" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dashboard