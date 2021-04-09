import SideBar from "../../components/SideBar/SideBar";
import React, {useEffect, useState} from 'react'
import './marketers.css'
// import {Link} from 'react-router-dom'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'
import {connect} from 'react-redux'
import { getActive, getMarketerCommission, getMarketerInflow, SuspendMarketer } from "../../store/actions/marketersActions";


function MarketersCommissionById(props){

    const {profile, getActiveCustomers, id, activeCustomers, getInflow, getCommission, totalInflow, totalCommission} = props
  

      // Get all marketers customers, active or inactive
  useEffect(() => {
      const active = {
        status: 'active',
      }
      const values = {
        time: "last_month",
        user: "MARKETER",
        id: id
      };
    getActiveCustomers(active.status, id)
    getInflow(values)
    getCommission(values)
  }, [getActiveCustomers, id, getInflow, getCommission]);

// active customers mapping
const activeLayout = activeCustomers.length ? (
    activeCustomers.map((value) => {
      return (
        <div key={value.id} className="box-title mb-3" style={{padding: '15px 20px'}}>
             <div>
            <p className="mb-0 box-title-p">{value.firstname} {value.lastname}</p>
            <p className="mb-0 box-p" style={{fontSize: 14, fontWeight: 500}}>{value.email}</p>

            <div className=" mt-2" style={{display: 'flex', justifyContent: 'space-between', background: 'rgba(219, 214, 255, 0.73)', padding: '2px 20px', borderRadius: '5px', width: '250px'}}>
                <div>
                    <p className="mb-0" style={{color:'#7A50B9', fontWeight: 'bold', fontSize: 14}}>Inflow</p>
                </div> 
                <div>
                <p className="mb-0" style={{color:'#6910E4', fontWeight: 'bold', fontSize: 14}}>N {value.latestInvestment[0].amount.toString()
                                                                                 .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div> 
             </div>
            {/* commission */}
             <div className=" mt-2" style={{display: 'flex', justifyContent: 'space-between', background: 'rgba(246, 137, 221, 0.27)', padding: '2px 20px', borderRadius: '5px', width: '250px'}}>
                <div>
                    <p className="mb-0" style={{color:'#FE20BE', fontWeight: 'bold', fontSize: 14}}>Commission(5%)</p>
                </div> 
                <div>
                <p className="mb-0" style={{color:'#FE20BE', fontWeight: 'bold', fontSize: 14}}>N {value.latestInvestment[0].commission.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
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


//   suspend a marketer
  const Suspend = (id) =>{
    if(profile.isActive){
       alert(id)
    }
    else{
       alert(id)
    }   
  }

  const [inflow, setFund] = useState(1);
  const [commission, setCommission] = useState(1);

  const [inflowData] = useState([
    { id: 1, name: "tab-1", text: "Last Month", value: "1" },
    { id: 2, name: "tab-2", text: "This Month", value: "2" },
    { id: 3, name: "tab-3", text: "This Year", value: "3" },
  ]);

  const [commissionData] = useState([
    { id: 1, name: "tab-1", text: "Last Month", value: "1" },
    { id: 2, name: "tab-2", text: "This Month", value: "2" },
    { id: 3, name: "tab-3", text: "This Year", value: "3" },
  ]);

  const inflowFilterLayout = inflowData.map((item) => (
    <div
      key={item.id}
      className={inflow === item.id ? "inflow-tab active-inflow" : "inflow-tab"}
      onClick={() => inflowToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  const commissionFilterLayout = commissionData.map((item) => (
    <div
      key={item.id}
      className={commission === item.id ? "inflow-tab active-inflow" : "inflow-tab"}
      onClick={() => commissionToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  
  const inflowToggle = (val) => {
    setFund(val);
    var values;
    switch (val) {
      case 1:
        values = {
          time: "last_month",
          user: "MARKETER",
          id: id
        };
        getInflow(values);
        break;
      case 2:
        values = {
          time: "month",
          user: "MARKETER",
          id: id
        };
        getInflow(values);
        break;
      case 3:
        values = {
          time: "year",
          user: "MARKETER",
          id: id
        };
        getInflow(values);
        break;
      default:
        console.log("Today");
    }
  };

  const commissionToggle = val => {
    setCommission(val);
    var values;
    switch (val) {
      case 1:
        values = {
          time: "last_month",
          user: "MARKETER",
          id: id
        };
        getCommission(values);
        break;
      case 2:
        values = {
          time: "month",
          user: "MARKETER",
          id: id
        };
        getCommission(values);
        break;
      case 3:
        values = {
          time: "year",
          user: "MARKETER",
          id: id
        };
        getCommission(values);
        break;
      default:
        console.log("Today");
    }
  }


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

                                    <div className="mt-3">
                                        <h6 style={{color: '#7A50B9', fontWeight: 'bold'}}>Total Inflow</h6>
                                    </div>

                                    {/* filters toggle */}
                                    <div className="inflow-div mt-3">{inflowFilterLayout}</div>

                                    {/* value for inflow */}
                                    <div className="mt-3" style={{background: 'rgba(146, 134, 233, 0.12)', padding: '10px 20px', borderRadius: '10px'}}>
                                        <h5 className="mb-0" style={{color: '#7A50B9', fontWeight: 'bold'}}>N { totalInflow.length  ? totalInflow[0].inflowSum.toString()
                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} </h5>
                                    </div>


                                    <div className="mt-4">
                                        <h6 style={{color: '#7A50B9', fontWeight: 'bold'}}>Commission</h6>
                                    </div>

                                    {/* filters toggle */}
                                    {/* filters toggle */}
                                    <div className="inflow-div mt-3">{commissionFilterLayout}</div>

                                    {/* value for inflow */}
                                    <div className="mt-3" style={{background: 'rgba(146, 134, 233, 0.12)', padding: '10px 20px', borderRadius: '10px'}}>
                                        <h5 className="mb-0" style={{color: '#7A50B9', fontWeight: 'bold'}}>N {totalCommission.length ? totalCommission[0].commission.toString()
                                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0} </h5>
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
        susloader: state.marketer.susloader,
        activeCustomers: state.marketer.activeCustomers,
        totalInflow: state.marketer.totalInflow,
        totalCommission: state.marketer.totalCommission
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getActiveCustomers: (status, id) => dispatch(getActive(status, id)),
        HandleSuspend: (value) => dispatch(SuspendMarketer(value)),
        getInflow: (value) => dispatch(getMarketerInflow(value)),
        getCommission: (value) => dispatch(getMarketerCommission(value)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MarketersCommissionById);