import SideBar from "../../components/SideBar/SideBar";
import React from 'react'
import './marketers.css'
// import {Link} from 'react-router-dom'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'

function MarketersProfile(){

    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4">

                            <div className="box">
                                {/* title 1 */}
                                <div className="box-title mb-3">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                            <img src={PurpleLogo} className="img-fluid" alt="logo" />
                                    
                                    </div>
                                    <div>
                                     <p className="mb-0 box-title-p">Olosunde oluwatobi</p>
                                     <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                     <p className="mb-0 box-subtitle">Code - PG2019443</p>
                                    </div>
                                   
                                </div>

                                {/* title 2 */}
                                <div className="box-title mb-3">
                                    <div>
                                        <p className="mb-0 box-p">No. 24, Bisis Afolabi Street, Oluyole Estate, Ibadan</p>
                                    </div>
                                        
                                </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-title-p">Guarantee Trust Bank</p>
                                                <p className="mb-0 box-p">0023910273</p>
                                            </div>
                                                
                                        </div>

                                         {/* title 4 */}
                                         <div>
                                            <button className="btn btn-suspend btn-block">Suspend</button>
                                         </div>

                                    </div>
                            </div>

                                {/* Customers */}
                            <div className="col-lg-5">
                                 <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <div className="">
                                                     <p className="mb-0 box-subtitle">Active Customers (2049)</p>
                                                 </div>
                                            </div>
                                           
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                            </div>
                                            <div className="green-div">   
                                                <p className="mb-0 green-text">1928</p>
                                            </div>
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                                <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                            </div>
                                            <div className="pink-div">   
                                                <p className="mb-0 pink-text">329</p>
                                            </div>
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                            <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text">1,329,928</p>
                                            </div>
                                        </div>

                                    </div>
                             </div>

                             {/*  */}
                             <div className="col-lg-3">
                                 <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <div className="">
                                                     <p className="mb-0 box-subtitle">Inactive Customers (204)</p>
                                                 </div>
                                            </div>
                                           
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                             <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                            </div>
                                           
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                              <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
                                            </div>
                                            
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                             <div>
                                                <p className="mb-0 box-title-p">Akinyemi Ogungbaro</p>
                                                <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>olosundetobiloba@gmail.com</p>
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

export default  MarketersProfile;