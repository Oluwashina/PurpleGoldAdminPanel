import SideBar from '../../components/SideBar/SideBar'
import './fund.css'


const FundConfirm = () =>{

    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
        <SideBar />
            <div className="main">
                <div className="contain">
                    

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