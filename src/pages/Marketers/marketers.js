import SideBar from "../../components/SideBar/SideBar";
import React, {useEffect} from 'react'
import './marketers.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getMarketersLimit, TotalDetails} from '../../store/actions/marketersActions'
import Moment from "react-moment";


// let data = [];
// const getValueByName = name => data?.find(a => a.name === name)??{};

// const montT = getValueByName("month_total_commission")

function Marketers(props){

    const {getTotalDetails, marketersSummary, getAllMarketers, marketers} = props


     // Get all total details data
  useEffect(() => {
    const values = {
      time: "year",
      user: "MARKETER",
    };
    getTotalDetails(values.user);
    getAllMarketers()
  }, [getTotalDetails,getAllMarketers]);

//   map marketers performance layout
const marketersPerformance = marketers.length ? (
    marketers.map((value) => {
      return (
     <div key={value.id} className="box-title mb-3">
        <div>
            <p className="mb-0 box-p">{value.firstname} {value.lastname}</p>
        </div>
        <div className="green-div">   
            <p className="mb-0 green-text" style={{fontSize: 12}}>{value.referralPercent}% Referral ({value.referral})</p>
        </div>
        <div className="pink-div">   
            <p className="mb-0 pink-text" style={{fontSize: 12}}>Commission({value.commission})</p>
        </div>
        <div className="purple-div">   
            <p className="mb-0 purple-text" style={{fontSize: 12}}>Active Customers ({value.activeCustomers})</p>
        </div>
     </div>
      );
    })
  ) : (
    <p
      className="text-center mt-3"
      style={{ fontStyle: "normal" }}
    >
        No marketer's performance yet!
    </p>
  );


    return(
        <div >
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-8">

                        <div className="row">

                             {/* purple gold marketers */}
                            <div className="col-lg-6">
                                    <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                                 <div className="ml-3">
                                                     <p className="mb-0 box-title-p">Purple Gold</p>
                                                     <p className="mb-0 box-subtitle">Marketers</p>
                                                 </div>
                                            </div>
                                            <Link to="/marketers/all" className="view-all" style={{textDecoration: 'none'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                            </Link>
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-p">Total No. of Marketers</p>
                                            </div>
                                            <div className="green-div">   
                                                <p className="mb-0 green-text">{marketersSummary.marketersCount ? marketersSummary.marketersCount : 0  }</p>
                                            </div>
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                             <div>
                                                <p className="mb-0 box-p">Total No. of Referred Investors</p>
                                            </div>
                                            <div className="pink-div">   
                                                <p className="mb-0 pink-text">{marketersSummary.referredInvestorsCount ? marketersSummary.referredInvestorsCount : 0 }</p>
                                            </div>
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                             <div>
                                                <p className="mb-0 box-p">No. of Suspended Marketers</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text">{marketersSummary.suspendedMarketersCount ? marketersSummary.suspendedMarketersCount : 0}</p>
                                            </div>
                                        </div>

                                    </div>
                            </div>

                                {/* commision */}
                            <div className="col-lg-6">
                            <div className="box">
                                        {/* title 1 */}
                                        <div className="box-title mb-3">
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                 <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                                 <div className="ml-3">
                                                     <p className="mb-0 box-title-p">Purple Gold</p>
                                                     <p className="mb-0 box-subtitle">Commission</p>
                                                 </div>
                                            </div>
                                            <Link to="/marketers/commission" className="view-all" style={{textDecoration: 'none'}}>
                                                <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                            </Link>
                                        </div>

                                        {/* title 2 */}
                                        <div className="box-title mb-3">
                                            <div>
                                                <p className="mb-0 box-p">Total Commission Paid</p>
                                            </div>
                                            <div className="green-div">   
                                                <p className="mb-0 green-text">{marketersSummary.paidCommissionSum ? marketersSummary.paidCommissionSum : 0}</p>
                                            </div>
                                        </div>

                                        {/* title 3 */}
                                        <div className="box-title mb-3">
                                             <div>
                                                <p className="mb-0 box-p">Total Commission</p>
                                            </div>
                                            <div className="pink-div">   
                                                <p className="mb-0 pink-text">{marketersSummary.totalCommissionSum ? marketersSummary.totalCommissionSum : 0 }</p>
                                            </div>
                                        </div>

                                         {/* title 4 */}
                                         <div className="box-title">
                                             <div>
                                                <p className="mb-0 box-p">This Month Commission</p>
                                            </div>
                                            <div className="purple-div">   
                                                <p className="mb-0 purple-text">{marketersSummary.thisMonthTotalCommission ? marketersSummary.thisMonthTotalCommission : 0}</p>
                                            </div>
                                        </div>

                                    </div>

                            </div>

                        </div>

                        {/* marketers performance */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Marketers Performance</p>
                                        </div>
                                </div>
                                <Link to="/marketers/performance" className="view-all" style={{textDecoration: 'none'}}>
                                    <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                </Link>
                               
                            </div>

                            {/* title 2 */}

                            {/* ALL marketers layout */}
                            {marketersPerformance}

                        </div>

            

                    </div>
                    <div className="col-lg-4">
                            {/* inflow */}
                        <div className="box">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <Link to='/marketers/inflow'>
                                    <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                    </Link>
                                   
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Inflow</p>
                                        </div>
                                </div>
                                <div className="">
                                    <p className="mb-0" style={{fontSize: 12, color: '#8E4DE6'}}>Total Inflow this year</p>
                                    <p className="mb-0" style={{fontSize: 14, color: '#8E4DE6', fontWeight: 'bold'}}>N {marketersSummary.inflowForYear ? marketersSummary.inflowForYear : 0 }</p>
                                </div>
                            </div>

                            {/* title 2 */}
                            <div className="box-title">
                                <div>
                                    <p className="mb-0 box-p">Total Inflow <span style={{fontWeight: 'bold'}}>( 
                                        <Moment format="MMMM">
                                            {new Date()}
                                        </Moment>
                                    ) </span> </p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text">N {marketersSummary.inflowForMonth ? marketersSummary.inflowForMonth : 0}</p>
                                </div>
                            </div>

                        </div>

                        {/* withdrawal */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src="img/purpleboxlogo.png" className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Withdrawal</p>
                                        </div>
                                </div>
                                <Link to="/withdrawal/marketers" className="view-all" style={{textDecoration: 'none'}}>
                                    <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                                </Link>
                               
                            </div>

                            {/* title 2 */}
                            <div className="box-title mb-3" style={{padding: '15px 60px'}}>
                                <div style={{position: 'relative'}}>
                                  <img src="img/notification-01.svg" className="img-fluid" width="25" height="25" alt="logo" />
                                    <div className="notify_icon">
                                        {marketersSummary.pendingWithdarawalRequests ? marketersSummary.pendingWithdarawalRequests : 0}
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0 box-p">Withdrawal Request</p>
                                </div>
                                
                            </div>

                             {/* title 3 */}
                             <div className="box-title mb-3" style={{padding: '15px 20px'}}>
                                <div>
                                    <p className="mb-0 box-p">Total Withdrawn</p>
                                </div>
                                <div className="green-div">   
                                    <p className="mb-0 green-text">N {marketersSummary.paidWithdrawalRequests ? marketersSummary.paidWithdrawalRequests : 0}</p>
                                </div>
                            </div>

                            {/* paid and process div */}
                            <div className="payment-div">
                                <div className="processedAmount">
                                    <div>
                                        <p className="mb-0" style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Processing</p>
                                    </div>
                                    <div>
                                    <p className="mb-0 ml-3" style={{color: 'white', fontSize: 14}}>N {marketersSummary.processingWithdrawalRequests ? marketersSummary.processingWithdrawalRequests : 0}</p>
                                    </div>
                                </div>
                                <div className="paidAmount">
                                     <div>
                                        <p className="mb-0 text-white" style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Paid</p>
                                    </div>
                                    <div>
                                    <p className="mb-0 ml-3" style={{color: 'white', fontSize: 14}}>N {marketersSummary.paidWithdrawalRequests ? marketersSummary.paidWithdrawalRequests : 0}</p>
                                    </div>  
                                </div>
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
        marketersSummary: state.marketer.marketersSummary,
        marketers: state.marketer.marketers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getTotalDetails: (value) => dispatch(TotalDetails(value)),
        getAllMarketers: () => dispatch(getMarketersLimit()),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Marketers);