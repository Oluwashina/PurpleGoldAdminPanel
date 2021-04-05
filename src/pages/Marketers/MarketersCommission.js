import SideBar from "../../components/SideBar/SideBar";
import React from 'react'
import './marketers.css'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'
import {Link} from 'react-router-dom'


function MarketersCommission(){
    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-4 mb-5">
                    <div className="col-lg-12">

                        {/* marketers performance */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={PurpleLogo} className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Commission Board</p>
                                        </div>
                                </div>
                                
                            </div>

                            {/* title 2 */}
                            <div className="marketers-row mb-3">
                                <div className="marketers-column">
                                     <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                    </div>
                                </div>
                               
                                <div className="marketers-column">
                                    <div>
                                    <p className="mb-0 box-p">akinlade3195@gmail.com</p>
                                    </div>
                                </div>

                                <div className="marketers-double-column text-center">
                                        {/* status row */}
                                        <div style={{display: 'flex'}}>
                                            <div className="green-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 green-text" style={{fontSize: 12}}>Inflow (5,032)</p>
                                            </div>
                                            <div className="pink-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 pink-text" style={{fontSize: 12}}>Total Commission (210,000)</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Commission Paid (576)</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="marketers-column">
                                         <Link to="/marketer/1" className="view-all" style={{textDecoration: 'none', width: '100px', margin: '0 auto'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                        </Link>
                                </div>
                            </div>

                            {/* title 3 */}
                            <div className="marketers-row mb-3">
                                <div className="marketers-column">
                                     <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                    </div>
                                </div>
                               
                                <div className="marketers-column">
                                    <div>
                                    <p className="mb-0 box-p">akinlade3195@gmail.com</p>
                                    </div>
                                </div>

                                <div className="marketers-double-column text-center">
                                        {/* status row */}
                                        <div style={{display: 'flex'}}>
                                            <div className="green-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 green-text" style={{fontSize: 12}}>Inflow (5,032)</p>
                                            </div>
                                            <div className="pink-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 pink-text" style={{fontSize: 12}}>Total Commission (210,000)</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Commission Paid (576)</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="marketers-column">
                                         <Link to="/marketer/1" className="view-all" style={{textDecoration: 'none', width: '100px', margin: '0 auto'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                        </Link>
                                </div>
                            </div>
                          

                                {/* title 4 */}
                                <div className="marketers-row mb-3">
                                <div className="marketers-column">
                                     <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                    </div>
                                </div>
                               
                                <div className="marketers-column">
                                    <div>
                                    <p className="mb-0 box-p">olosundetobiloba@gmail.com</p>
                                    </div>
                                </div>

                                <div className="marketers-double-column text-center">
                                        {/* status row */}
                                        <div style={{display: 'flex'}}>
                                            <div className="green-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 green-text" style={{fontSize: 12}}>Inflow (5,032)</p>
                                            </div>
                                            <div className="pink-div" style={{marginRight: '2%'}}>   
                                                <p className="mb-0 pink-text" style={{fontSize: 12}}>Total Commission (210,000)</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Commission Paid (576)</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="marketers-column">
                                         <Link to="/marketer/1" className="view-all" style={{textDecoration: 'none', width: '100px', margin: '0 auto'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                        </Link>
                                </div>
                            </div>
                               

                        </div>

            

                    </div>
                    
                       
                </div>


             </div>
         </div>
      </div>
    )
}

export default  MarketersCommission;