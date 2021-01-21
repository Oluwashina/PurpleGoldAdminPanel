import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './fund.css'


const FundConfirm = () =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
        <SideBar />
            <div className="main">
                <div className="contain">

                    {/* switch between the users and markteters tab */}
                    <div className="mt-3 title-div" style={{display: 'flex'}}>
                        <div onClick={handleToggle} className={isActive ? "title-heading" : "title-heading active-div"}  style={{flex: 1}}>
                            <h5 className="text-center mb-0">User</h5>
                        </div>
                        <div onClick={handleToggle} className={isActive ? "title-heading marketers-div" : "title-heading"} style={{flex: 1,}}>
                            <h5 className="text-center mb-0">Marketer</h5>
                        </div>
                    </div>
                    

                    {/* Fund user design layout */}

                    <div className="fund-confirm-card mt-5">

                        <div className="fund-confirm-div">

                            <div>
                                <p className="text-center mb-0" style={{color: '#000000',}}>
                                You are about to Fund <span style={{fontWeight: 'bold'}}>Akinyemi Ogungbaro’s</span> wallet 
                                    </p>
                                    <p className="text-center mb-0"><span style={{fontWeight: 'bold', fontStyle: 'italic'}}> (akinyemiogungbaro@gmail.com)</span> with N200,000</p>
                                    <p className="text-center mb-0"> Please click <span style={{fontWeight: 'bold'}}>‘Confirmed’</span> to <span style={{fontWeight: 'bold'}}>“Complete’</span> or <span style={{fontWeight: 'bold'}}>‘Cancel’</span> to <span style={{fontWeight: 'bold'}}>‘Decline’.</span></p>
                                </div>

                                <div className="mt-4" style={{display: 'flex',}}>
                                    <div style={{flex: 1}}>
                                        <button className="btn btn-confirm">Confirmed</button>
                                    </div>

                                    <div className="ml-2" style={{flex: 1}}>
                                        <button className="btn btn-cancel">Cancel</button>
                                    </div>

                                </div>

                            
                       

                        </div>

                    </div>
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default FundConfirm;