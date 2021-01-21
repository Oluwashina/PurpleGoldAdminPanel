import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './fund.css'


const Fund = (props) =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.history.push("/confirm/fund");
    }


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
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