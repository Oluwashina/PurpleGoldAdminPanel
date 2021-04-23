import SideBar from "../../components/SideBar/SideBar";
import React, {useEffect} from 'react'
import './marketers.css'
// import {Link} from 'react-router-dom'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'
import Midas from '../Marketers/img/midas.svg'
import Honorable from '../Marketers/img/honorable.svg'
import Gelato from '../Marketers/img/gelato.svg'
import {connect} from 'react-redux'
import { getActive, getInactive, SuspendMarketer, ActivateMarketer } from "../../store/actions/marketersActions";
import Moment from "react-moment";

function MarketersProfile(props){

    const {profile, getActiveCustomers, getInActiveCustomers, id, activeCustomers, inactiveCustomers, HandleSuspend, HandleActivate, susloader} = props
  

      // Get all marketers customers, active or inactive
  useEffect(() => {
      const active = {
        status: 'active',
      }
      const inactive = {
        status: 'inactive',
      }
    getActiveCustomers(active.status, id)
    getInActiveCustomers(inactive.status, id)
  }, [getActiveCustomers, getInActiveCustomers, id]);

// active customers mapping
const activeLayout = activeCustomers.length ? (
    activeCustomers.map((value) => {
        var imagePic;
        switch(value.latestInvestment[0].planName){
            case 'Gelato':
            imagePic = Gelato;
            break;
            case 'Honourable':
                imagePic = Honorable
                break;
            case 'Midas Touch':
                imagePic = Midas
                break;
            default:
                break;
        }

      return (
        <div key={value.id} className="box-title mb-3" style={{padding: '15px 20px'}}>
             <div>
            <p className="mb-0 box-title-p">{value.firstname} {value.lastname}</p>
            <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>{value.email}</p>

            <div className=" mt-2"style={{display: 'flex'}}>

                        <div style={{background: '#fff', padding: '2px 10px'}}>
                            <img src={imagePic} className="img-fluid" alt="midas" />
                        </div>

                        <div className="green-div" style={{display: 'flex', justifyContent: 'space-between', width: '250px'}}>
                            <div>
                            <p className="mb-0 green-text">{value.latestInvestment[0].planName}</p>
                            </div>
                            <div>
                            <p className="mb-0 green-text">N {value.latestInvestment[0].amount}</p>
                            </div>
                            
                        </div>   
                        
                </div>
        </div>
        
    </div>
      );
    })
  ) : (
    <p
      className="text-center mt-4"
      style={{ fontStyle: "italic" }}
    >
        No customers available for display
    </p>
  );

  const inactiveLayout = inactiveCustomers.length ? (
    inactiveCustomers.map((value) => {
        var imagePic;
        switch(value.latestInvestment.length ? value.latestInvestment[0].planName : "Gelato"){
            case 'Gelato':
            imagePic = Gelato;
            break;
            case 'Honourable':
                imagePic = Honorable
                break;
            case 'Midas Touch':
                imagePic = Midas
                break;
            default:
                imagePic = Gelato
                break;
        }


      return (
        <div key={value.id} className="box-title mb-3" style={{padding: '15px 20px'}}>
             <div>
                    <p className="mb-0 box-title-p">{value.firstname} {value.lastname}</p>
                    <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>{value.email}</p>

                {
                    value.latestInvestment.length ? 
                    <div className=" mt-2" style={{display: 'flex'}}>

                    <div style={{background: '#fff', padding: '2px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={imagePic} className="img-fluid" alt="midas" />
                    </div>

                  <div className="pink-div" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '250px'}}>
                        <div>
                            <p className="mb-0 pink-text">{value.latestInvestment.length ? value.latestInvestment[0].planName : "No Plan"}</p>
                        </div>
                        <div>
                            <span className="pink-text" style={{fontSize: 11, fontWeight: 500}}>{value.latestInvestment.length ? "Last Investment Date" : "" }</span>
                            <p className="mb-0 pink-text">
                             <Moment format="MMMM Do, YYYY">
                                    {value.latestInvestment.length ? value.latestInvestment[0].createdAt : ""}
                                </Moment>
                            </p>
                        </div>
                        
                    </div>
                </div>
                :
                ""

                }
                 
        </div>
        
    </div>
      );
    })
  ) : (
    <p
      className="text-center mt-4"
      style={{ fontStyle: "italic" }}
    >
        No customers available for display
    </p>
  );

//   suspend a marketer
  const Suspend = (id) =>{
    const values = {
        id
    }
    if(profile.isActive){
        HandleSuspend(values)
    }
    else{
       HandleActivate(values)
    } 
  }


    return(
        <div>
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
                                     <p className="mb-0 box-title-p">{profile.firstname} {profile.lastname}</p>
                                     <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>{profile.email}</p>
                                     <p className="mb-0 box-subtitle">Code - {profile.referralCode}</p>
                                    </div>
                                   
                                </div>

                                {/* title 2 */}
                                <div className="box-title mb-3">
                                    <div>
                                        <p className="mb-0 box-p">{profile.houseOfResidence}</p>
                                    </div>
                                        
                                </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-title-p">{profile.bank ? profile.bank : 'No bank added yet'}</p>
                                                <p className="mb-0 box-p">{profile.accountNumber ? profile.accountNumber : "No account number added yet"}</p>
                                            </div>
                                                
                                        </div>

                                         {/* title 4 */}
                                         <div>
                                            <button
                                             disabled={susloader}
                                             className={ profile.isActive ? 'btn btn-suspend btn-block' : 'btn btn-active btn-block'}
                                             onClick={() => Suspend(id)}
                                             >
                                                  {profile.isActive ? (
                                                        "Suspend"
                                                    ) : (
                                                            "Restore"
                                                )}
                                             </button>
                                         </div>

                                    </div>
                            </div>

                                {/* Customers */}
                            <div className="col-lg-4">
                                 <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3" style={{padding: '15px'}} >
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <div className="">
                                                     <p className="mb-0 box-subtitle">Active Customers ({activeCustomers.length})</p>
                                                 </div>
                                            </div>
                                           
                                        </div>

                                        {/* title 2 */}
                                        {/* active layout */}
                                        {activeLayout}

                                    </div>
                             </div>

                             {/*  */}
                             <div className="col-lg-4">
                                 <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3"  style={{padding: '15px'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <div className="">
                                                     <p className="mb-0 box-subtitle">Inactive Customers ({inactiveCustomers.length})</p>
                                                 </div>
                                            </div>
                                           
                                        </div>

                                        {/* title 2 */}
                                        {/* inactive layout */}
                                        {inactiveLayout}

                                    </div>
                             </div>
                   
                </div>


             </div>
         </div>
      </div>
    )
}


const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    return{
        profile: state.marketer.marketersProfile,
        id: id,
        susloader: state.marketer.marketersuspendloader,
        activeCustomers: state.marketer.activeCustomers,
        inactiveCustomers: state.marketer.inactiveCustomers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getActiveCustomers: (status, id) => dispatch(getActive(status, id)),
        getInActiveCustomers: (status, id) => dispatch(getInactive(status, id)),
        HandleSuspend: (value) => dispatch(SuspendMarketer(value)),
        HandleActivate: (value) => dispatch(ActivateMarketer(value)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MarketersProfile);