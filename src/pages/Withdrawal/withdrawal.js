import SideBar from '../../components/SideBar'
import React, {useState} from 'react'
import './withdrawal.css'


const Withdrawal = () =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }


    return(
        <div style={{backgroundColor: '#e5e5e5',}}>
        <SideBar />
            <div className="main">
                <div className="contain">

                    {/* swicth between the users and markteters tab */}
                    <div className="mt-3 title-div" style={{display: 'flex'}}>
                        <div onClick={handleToggle} className={isActive ? "title-heading" : "title-heading active-div"}  style={{flex: 1}}>
                            <h5 className="text-center mb-0">User</h5>
                        </div>
                        <div onClick={handleToggle} className={isActive ? "title-heading marketers-div" : "title-heading"} style={{flex: 1,}}>
                            <h5 className="text-center mb-0">Marketer</h5>
                        </div>
                    </div>
                    
                    {/* Requests tab */}
                    <div className="request-div mx-auto mt-5">
                        <div className="active-request" style={{position: 'relative'}}>
                            <div className="active-count">
                                6
                            </div>
                            <p className="mb-0">New Request</p>
                        </div>
                        <div className="newRequest">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                                <p className="mb-0" style={{background: '#E5E3F3',borderRadius: 10, padding: '2px 10px', color: '#AAAAAA', fontSize: 12}}>89</p>
                                 <p className="mb-0 ml-2">Processing</p>
                            </div>
                        </div>  
                        <div className="newRequest">
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p className="mb-0" style={{background: '#E5E3F3',borderRadius: 10, padding: '2px 10px', color: '#AAAAAA', fontSize: 12}}>265</p>
                                 <p className="mb-0 ml-2">Paid</p>
                            </div>
                        </div> 
                        <div className="newRequest">
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p className="mb-0" style={{background: '#E5E3F3',borderRadius: 10, padding: '2px 10px', color: '#AAAAAA', fontSize: 12}}>37</p>
                                 <p className="mb-0 ml-2">Declined</p>
                            </div>
                          
                        </div> 
                    </div>

                    {/* requests duration filter*/}
                    <div className="text-center">
                        <div className="filter-div mx-auto mt-4" style={{justifyContent: 'center'}}>
                        <div className="filter-tab active-filter">   
                            <p className="mb-0">Today</p>
                        </div>
                        <div className="filter-tab">   
                            <p className="mb-0">This week</p>
                        </div>
                        <div className="filter-tab" >   
                            <p className="mb-0">Month</p>
                        </div>
                        <div style={{padding: '10px 30px'}}>   
                            <p className="mb-0 text-center">Year</p>
                        </div>
                      </div>
                    </div>

                    {/* Data tables to be populated with the withdrawal request layout */}
                    <div className="request-table mt-4">
                        <div className="request-head">
                        
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Name
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Amount
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Email
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Date
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Status
                        </div>
                        <div className="request-head" >
                         
                        </div>
                    </div>

                    {/* request data display */}
                <div className="request-data-table mt-1">
                    
                     <div className="request-data">
                        <div className="request-head">
                        <img className="img-fluid" src="/img/avatar.png" alt="" />
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Femi Emmanuel
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            N 235,198.00
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            femiemmanuel@gmail.com
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            25/01/2020
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            pending...
                        </div>
                        <div className="request-head" >
                        <button className="btn btn-view">Process</button>
                        </div>
                    </div>

                    <hr style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>

                    <div className="request-data">
                        <div className="request-head">
                        <img className="img-fluid" src="/img/avatar.png" alt="" />
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Femi Emmanuel
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            N 235,198.00
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            femiemmanuel@gmail.com
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            25/01/2020
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            pending...
                        </div>
                        <div className="request-head" >
                        <button className="btn btn-view">Process</button>
                        </div>
                    </div>
                    
                    <hr style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                    <div className="request-data">
                        <div className="request-head">
                        <img className="img-fluid" src="/img/avatar.png" alt="" />
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Femi Emmanuel
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            N 235,198.00
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            femiemmanuel@gmail.com
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            25/01/2020
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            pending...
                        </div>
                        <div className="request-head" >
                        <button className="btn btn-view">Process</button>
                        </div>
                    </div>

                    <hr style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
                    
                    <div className="request-data">
                        <div className="request-head">
                        <img className="img-fluid" src="/img/avatar.png" alt="" />
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            Femi Emmanuel
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            N 235,198.00
                        </div>
                        <div className="request-head" style={{color: '#000000', fontWeight: 400}}>
                            femiemmanuel@gmail.com
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            25/01/2020
                        </div>
                        <div className="request-head" style={{color: '#9E079E', fontWeight: 400}}>
                            pending...
                        </div>
                        <div className="request-head" >
                        <button className="btn btn-view">Process</button>
                        </div>
                    </div>



                </div>
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default Withdrawal;