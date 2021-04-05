import SideBar from "../../components/SideBar/SideBar";
import React from 'react'
import './marketers.css'
// import {Link} from 'react-router-dom'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'


function MarketersPerformance(){

    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12">

                        {/* marketers performance */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={PurpleLogo} className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Marketers Performance</p>
                                        </div>
                                </div>

                            </div>

                            {/* title 2 */}
                            <div className="box-title mb-3">
                                <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">olosundetobiloba@gmail.com</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>Active (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Inactive(531,032)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Inflow (2039)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Referral Stake (25%)</p>
                                </div>
                            </div>

                            {/* title 3 */}
                            <div className="box-title mb-3">
                                <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">shinzbaba@gmail.com</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>Active (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Inactive(531,032)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Inflow (2039)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Referral Stake (25%)</p>
                                </div>
                            </div>

                                {/* title 4 */}
                                <div className="box-title mb-3">
                                <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">akinlade3195@gmail.com</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>Active (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Inactive(531,032)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Inflow (2039)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Referral Stake (25%)</p>
                                </div>
                            </div>

                            {/* fifth */}
                            <div className="box-title mb-3">
                                <div>
                                    <p className="mb-0 box-p">Olosunde Oluwatobiloba</p>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">akinlade3195@gmail.com</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text" style={{fontSize: 12}}>Active (5,032)</p>
                                </div>
                                <div className="pink-div">   
                                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Inactive(531,032)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Inflow (2039)</p>
                                </div>
                                <div className="purple-div">   
                                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Referral Stake (25%)</p>
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

export default  MarketersPerformance;