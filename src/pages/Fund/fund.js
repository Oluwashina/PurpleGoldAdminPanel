import SideBar from '../../components/SideBar/SideBar'
import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import './fund.css'
import { VerifyEmail } from "../../store/actions/fundActions";



const Fund = ({verify, history, loading,loader}) =>{

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const values = {
            email,
            amount
        }
        verify(values)
    }

    useEffect(() =>{
        if(loading){
          history.push('/fund/confirm');
        }
    },[loading, history])
  

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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    </div>

                                    <button 
                                type="submit"
                                disabled={loader}
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

const mapStateToProps = (state) =>{
    return{
        loading: state.fund.loading,
        loader: state.fund.loader,
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        verify: (creds) => dispatch(VerifyEmail(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fund);