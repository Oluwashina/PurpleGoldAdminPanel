import SideBar from '../../components/SideBar/SideBar'
import './fund.css'
import {connect} from 'react-redux'
import { CancelFund, ConfirmFund } from "../../store/actions/fundActions";


const FundConfirm = ({firstname,lastname,amount,email, Cancel, history, Confirm}) =>{


    const CancelFund = () =>{
        Cancel()
        history.push('/fund')
    }

    const confirmFund = () =>{
        Confirm()
    }

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
                                You are about to Fund <span style={{fontWeight: 'bold'}}>{firstname} {lastname + "'s"}</span> wallet 
                                    </p>
                                    <p className="text-center mb-0"><span style={{fontWeight: 'bold', fontStyle: 'italic'}}> ({email})</span> with N {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    <p className="text-center mb-0"> Please click <span style={{fontWeight: 'bold'}}>‘Confirmed’</span> to <span style={{fontWeight: 'bold'}}>“Complete’</span> or <span style={{fontWeight: 'bold'}}>‘Cancel’</span> to <span style={{fontWeight: 'bold'}}>‘Decline’.</span></p>
                                </div>

                                <div className="mt-4" style={{display: 'flex',}}>
                                    <div style={{flex: 1}}>
                                        <button 
                                        onClick={confirmFund}
                                        className="btn btn-confirm">Confirmed</button>
                                    </div>

                                    <div className="ml-2" style={{flex: 1}}>
                                        <button 
                                        onClick={CancelFund}
                                        className="btn btn-cancel">Cancel</button>
                                    </div>

                                </div>

                            
                       

                        </div>

                    </div>
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        firstname: state.fund.firstname,
        lastname: state.fund.lastname,
        amount: state.fund.amount,
        email: state.fund.email
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
     Cancel: () => dispatch(CancelFund()),
     Confirm: () => dispatch(ConfirmFund()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FundConfirm);