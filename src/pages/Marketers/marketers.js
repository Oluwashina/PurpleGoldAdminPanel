import SideBar from "../../components/SideBar/SideBar";
import React from 'react'
import './marketers.css'
import {Link} from 'react-router-dom'

function Marketers(){

    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-8">

                        <div className="row">

                             {/* purple gold marketers */}
                            <div className="col-lg-6">
                                    <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                                 <div className="ml-3">
                                                     <p className="mb-0 box-title-p">Purple Gold</p>
                                                     <p className="mb-0 box-subtitle">Marketers</p>
                                                 </div>
                                            </div>
                                            <Link to="/marketers/all" className="view-all" style={{textDecoration: 'none'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                            </Link>
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-p">Total No. of Marketers</p>
                                            </div>
                                            <div className="green-div">   
                                                <p className="mb-0 green-text">1928</p>
                                            </div>
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                             <div>
                                                <p className="mb-0 box-p">Total No. of Referred Investors</p>
                                            </div>
                                            <div className="pink-div">   
                                                <p className="mb-0 pink-text">329</p>
                                            </div>
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                             <div>
                                                <p className="mb-0 box-p">No. of Suspended Marketers</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text">1,329,928</p>
                                            </div>
                                        </div>

                                    </div>
                            </div>

                                {/* commision */}
                            <div className="col-lg-6">
                            <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                                 <div className="ml-3">
                                                     <p className="mb-0 box-title-p">Purple Gold</p>
                                                     <p className="mb-0 box-subtitle">Commission</p>
                                                 </div>
                                            </div>
                                            <Link to="/marketers/commission" className="view-all" style={{textDecoration: 'none'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                            </Link>
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-p">Total Commission Paid</p>
                                            </div>
                                            <div className="green-div">   
                                                <p className="mb-0 green-text">1928</p>
                                            </div>
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                             <div>
                                                <p className="mb-0 box-p">Total Commission</p>
                                            </div>
                                            <div className="pink-div">   
                                                <p className="mb-0 pink-text">329</p>
                                            </div>
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                             <div>
                                                <p className="mb-0 box-p">This Month Commission</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text">1,329,928</p>
                                            </div>
                                        </div>

                                    </div>

                            </div>

                        </div>

                        {/* marketers performance */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Marketers Performance</p>
                                        </div>
                                </div>
                                <Link to="/marketers/performance" className="view-all" style={{textDecoration: 'none'}}>
                                    <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                </Link>
                               
                            </div>

                            {/* title 2 */}
                            <div className="box-title mb-3">
                                <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>50% Referral (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Commission(531,032)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Active Customers (2039)</p>
                                </div>
                            </div>

                            {/* title 3 */}
                            <div className="box-title mb-3">
                                    <div>
                                    <p className="mb-0 box-p">Ogungbaro Akinyemi</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>20% Referral (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Commission(210,000)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Active Customers (576)</p>
                                </div>
                            </div>

                                {/* title 4 */}
                                <div className="box-title">
                                    <div>
                                    <p className="mb-0 box-p">Oluwashina Kure-Ojo</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>20% Referral (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Commission(210,000)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Active Customers (576)</p>
                                </div>
                            </div>

                        </div>

            

                    </div>
                    <div className="col-lg-4">
                            {/* inflow */}
                        <div className="box">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Inflow</p>
                                        </div>
                                </div>
                                <div className="">
                                    <p className="mb-0" style={{fontSize: 12, color: '#8E4DE6'}}>Total Inflow this year</p>
                                    <p className="mb-0" style={{fontSize: 14, color: '#8E4DE6', fontWeight: 'bold'}}>N 3,102,992,80</p>
                                </div>
                            </div>

                            {/* title 2 */}
                            <div className="box-title">
                                <div>
                                    <p className="mb-0 box-p">Total Inflow <span style={{fontWeight: 'bold'}}>(March)</span> </p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text">N 1,234,928</p>
                                </div>
                            </div>

                        </div>

                        {/* withdrawal */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Withdrawal</p>
                                        </div>
                                </div>
                                <Link to="/withdrawal/marketers" className="view-all" style={{textDecoration: 'none'}}>
                                    <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                </Link>
                               
                            </div>

                            {/* title 2 */}
                            <div className="box-title mb-3" style={{padding: '15px 60px'}}>
                                <div style={{position: 'relative'}}>
                                  <img src="img/notifications.svg" className="img-fluid" width="25" height="25" alt="logo" />
                                    <div className="notify_icon">
                                        5
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">Withdrawal Request</p>
                                </div>
                                
                            </div>

                             {/* title 3 */}
                             <div className="box-title mb-3" style={{padding: '15px 20px'}}>
                                <div>
                                    <p className="mb-0 box-p">Total Withdrawn</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text">N 1,234,928</p>
                                </div>
                            </div>

                            {/* paid and process div */}
                            <div className="payment-div">
                                <div className="processedAmount">
                                    <div>
                                        <p className="mb-0" style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Processing</p>
                                    </div>
                                    <div>
                                    <p className="mb-0 ml-3" style={{color: 'white', fontSize: 14}}>N685,297</p>
                                    </div>
                                </div>
                                <div className="paidAmount">
                                     <div>
                                        <p className="mb-0 text-white" style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Paid</p>
                                    </div>
                                    <div>
                                    <p className="mb-0 ml-3" style={{color: 'white', fontSize: 14}}>N685,297</p>
                                    </div>  
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

export default  Marketers;