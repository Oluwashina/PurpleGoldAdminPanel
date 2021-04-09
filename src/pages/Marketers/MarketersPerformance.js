import SideBar from "../../components/SideBar/SideBar";
import React, {useEffect} from 'react'
import './marketers.css'
// import {Link} from 'react-router-dom'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'
import {connect} from 'react-redux'
import { getMarketers } from "../../store/actions/marketersActions";


function MarketersPerformance(props){

    const {getAllMarketers, allMarketers} = props

    
      // Get all marketers performance data
    useEffect(() => {
        getAllMarketers()
    }, [getAllMarketers]);

    // mapping out all marketers performance
const marketersPerformance = allMarketers.length ? (
    allMarketers.map((value) => {
      return (
        <div key={value.id} className="box-title mb-3" style={{padding: '15px 20px'}}>
                <div>
                    <p className="mb-0 box-p">{value.firstname} {value.lastname}</p>
                </div>
                <div>
                    <p className="mb-0 box-p">{value.email}</p>
                </div>
                <div className="green-div">   
                    <p className="mb-0 green-text" style={{fontSize: 12}}>Active ({value.activeCustomers})</p>
                </div>
                <div className="pink-div">   
                    <p className="mb-0 pink-text" style={{fontSize: 12}}>Inactive({value.inactiveReferrals})</p>
                </div>
                <div className="purple-div">   
                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Inflow ({value.inflow})</p>
                </div>
                <div className="purple-div">   
                    <p className="mb-0 purple-text" style={{fontSize: 12}}>Referral Stake ({value.referralPercent}%)</p>
                </div>
            </div>
      );
    })
  ) : (
    <p
      className="text-center mt-3"
      style={{ fontStyle: "italic" }}
    >
    </p>
  );

    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12">

                        {/* marketers performance */}
                        <div className="box mt-4" style={{padding: '15px 20px'}}>
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={PurpleLogo} className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Marketers Performance</p>
                                        </div>
                                </div>

                            </div>

                            {/* title 2 */}
                            {/* marketers performance layout */}
                            {marketersPerformance}

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
        allMarketers: state.marketer.allMarketers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getAllMarketers: () => dispatch(getMarketers()),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MarketersPerformance);