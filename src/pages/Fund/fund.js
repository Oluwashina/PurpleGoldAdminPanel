import SideBar from '../../components/SideBar/SideBar'

import './fund.css'


const Fund = (props) =>{


    const handleSubmit = (event) =>{
        event.preventDefault()
        props.history.push("/fund/confirm");
    }


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
        <SideBar />
            <div className="main">
                <div className="contain">

                
                    

                    {/* Fund user design layout */}

                    <div className="fund-card mt-5">

                        <div className="fund-div">

                            <div>
                                <h5 className="text-center" style={{color: '#7031BD', fontWeight: 'bold'}}>Fund User</h5>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-email icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="email"
                                        placeholder="Please Enter Users Email Address"
                                        id="email"
                                        required
                                    />


                                    </div>

                                    <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-wallet icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="text"
                                        placeholder="Please Enter Amount you want to Fund into Users PurpleVest Wallet"
                                        id="wallet"
                                        required
                                    />
                                    </div>

                                    <button 
                                type="submit"
                               
                                className="btn btn-fund mt-2">
                                    Proceed to Fund Users Wallet
                                    </button>
                                
                            </form>
                       

                     </div>

                    </div>
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default Fund;