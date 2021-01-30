import SideBar from '../../components/SideBar/SideBar'
import './dashboard.css'
import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup'
import Chart from '../../components/Charts/Chart'
import {connect} from 'react-redux'
import { Payouts, Funding, DashboardCount, ChartRequest } from "../../store/actions/dashboardActions";


const Dashboard = (props) =>{

    const {getFunding, funding, fundingSum, getDashboardCount, count, getPayouts, payout, payoutSum, isLoading,  getChartData, chartDate} = props

    const [isActive, setActive] = useState(false);
    
    const [fund, setFund] = useState(1);

    const [cards, setCards] = useState(0);

    const [pay, setPayout] = useState(1);

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'Today', value: '1' },
        { id: 2, name: 'tab-2', text: 'This Week', value: '2' },
        { id: 3, name: 'tab-3', text: 'Month', value: '3' },
        { id: 4, name: 'tab-4', text: 'Year', value: '4' },
    ])



    const handleToggle = () =>{
        setActive(!isActive);
    }

    const handleCardToggle = (index) =>{
        setCards(index)
        alert(index)
        var values;
        switch(index){
            case 0:
                values = {
                    time: chartDate,
                    user: 'INVESTOR',
                    type: 'funding'
              }
              getChartData(values)
              break;
            case 1:
                // time,user and type is subject to change
               values = {
                time:  chartDate,
                user: 'INVESTOR',
                type: 'in_flow'
              }
              getChartData(values)
             break;
             case 2:
                values = {
                    time:  chartDate,
                    user: 'INVESTOR',
                    type: 'out_flow'
                  }
                  getChartData(values)
                 break;
             case 3:
                values = {
                    time:  chartDate,
                    user: 'INVESTOR',
                    type: 'active_users'
                  }
                  getChartData(values)
                 break;
            case 4:
                values = {
                    time: chartDate,
                    user: 'INVESTOR',
                    type: 'inactive_users'
                  }
                  getChartData(values)
            break;
            case 5:
                values = {
                    time: chartDate,
                    user: 'INVESTOR',
                    type: 'suspended_users'
                  }
                getChartData(values)
                break;
             default:
                 console.log("Today")
        }
    }

    const FundToggle = (id) =>{
       setFund(id)
       var values;
       switch(id){
           case 1:
               values = {
                time: 'today',
                user: 'INVESTOR'
             }
             getFunding(values)
               break;
           case 2:
              values = {
                time: 'week',
                user: 'INVESTOR'
             }
            getFunding(values)
            break;
            case 3:
                 values = {
                    time: 'month',
                    user: 'INVESTOR'
                 }
                getFunding(values)
                break;
            case 4:
                 values = {
                    time: 'year',
                    user: 'INVESTOR'
                 }
                getFunding(values)
                break;
            default:
                console.log("Today")
       }
    }

    const PayToggle = (id) =>{
        setPayout(id)
        var values;
        switch(id){
            case 1:
                values = {
                 time: 'today',
                 user: 'INVESTOR'
              }
              getPayouts(values)
                break;
            case 2:
               values = {
                 time: 'week',
                 user: 'INVESTOR'
              }
              getPayouts(values)
             break;
             case 3:
                  values = {
                     time: 'month',
                     user: 'INVESTOR'
                  }
                  getPayouts(values)
                 break;
             case 4:
                  values = {
                     time: 'year',
                     user: 'INVESTOR'
                  }
                  getPayouts(values)
                 break;
             default:
                 console.log("Today")
        }
    }

    const fundDayToggle = fundData.map((item)=>
        <div key={item.id}
        className={fund === item.id ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => FundToggle(item.id)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )

    const payoutDayToggle = fundData.map((item)=>
            <div key={item.id}
            className={pay === item.id ? 'filter-tab active-filter' : 'filter-tab'}
            onClick={() => PayToggle(item.id)}
            >   
            <p className="mb-0">{item.text}</p>
        </div>
        )


    // Get all funding data
    useEffect(() =>{
        const values = {
            time: 'today',
            user: 'INVESTOR'
        }
        getFunding(values)
        getPayouts(values)
        getDashboardCount(values.user)
    },[getFunding,getDashboardCount, getPayouts])

   
    if (isLoading) {
        return (
            <div
                style={{
                    minHeight: '90vh',
                    minWidth: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    margin: '0',
                    padding: '20px'
                }}
            >
                <div className="preloader">
                    <img src="/img/purple_fav.png" alt="PurpleGold Loader" />
                </div>
            </div>
        )
    }


    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
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

                    <div className="row mt-3">
                        {count.length ? count.map((card, index)=>{
                            var name;
                            
                            switch(card.name){
                                case "funding":
                                    name = "Funding";
                                    break;
                                case "inflow":
                                    name = "In-Flow";
                                    break;
                                case "outflow":
                                    name = "Out-Flow";
                                    break;
                                case "activeUsers":
                                    name = "Active";
                                    break;
                                case "inactiveUsers":
                                    name = "Inactive"
                                    break;
                                case "suspendedUsers":
                                    name = "Suspended"
                                    break;
                                default:
                                    name = ""
                            }
        
                            return(
                            <div key={index} className="col-lg-2">
                            <div 
                                onClick={() => handleCardToggle(index)}
                               className={cards === index ? 'card-div-active' : 'card-div'}
                            >
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>{name}</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                      <h5
                                    className={index === 5 ? 'value-suspend' : 'value'}
                                     >
                                         {index < 3 && 'N '}
                                      <CountUp
                                        start={0}
                                        end={ card.value}
                                        duration={2.5}
                                        separator=","
                                         />
                                     </h5>
                                     {index === 3 ? <p className="mb-0" style={{color: '#000000', fontSize: 14}}>0 New</p> : "" }
                                     {index === 4 ? <p className="mb-0" style={{color: '#000000', fontSize: 14}}>0 New</p> : "" }
                                </div>
                            </div> 
                        </div>
                            )
                        }):
                        <p>No data</p>
                    }
                    </div>
                    
                    {/* cards layout */}
         

                {/* charts display */}

                <div className="mt-4">
                    <Chart />
                </div>



                {/* funding display */}

                 


                {/* filter tabs */}
                <div style={{display: 'flex', alignItems: 'center'}}>

                     {/* name */}
                    <div className="mt-5">
                        <h5 style={{color: '#A030A8', fontWeight: 'bold'}}>Funding</h5>
                        </div>

                    <div className="filter-div mt-5 ml-3">
                         {fundDayToggle}
                    </div>

                  
                </div>
 
                    {/* Funding details */}
                    <div className="row mt-3">
                         <div className="col-lg-12">
                            <div className="table-style">
                                <div className="myTable mt-4">
                                        <div className="myHead">
                                        {funding.length ? funding.map((value, index)=>{
                                         
                                            var dayShow
                                            switch(fund){
                                                case 1:
                                                    dayShow = "Today";
                                                    break;
                                                case 2:
                                                    dayShow = "This Week";
                                                    break;
                                                case 3:
                                                    dayShow = "Month";
                                                    break;
                                                case 4:
                                                    dayShow = "Year";
                                                    break;
                                                default:
                                                    dayShow = ""
                                            }
                        return(
                            <div key={index} className="myRow">
                            <div className="myColumn">
                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>{value.firstname} {value.lastname}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N {value.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                                <div className="myColumn">
                                    {value.email}
                                </div>
                                <div className="myColumn">
                                    <p className="mb-0" style={{color: '#9E079E'}}>{value.createdAt.slice(11, 19)}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{color: '#9E079E'}}>{dayShow}</p>
                                </div>
                            </div>
                        )
                    }):
                   <p className="text-center mt-3" style={{fontStyle: 'italic'}}>No data available for display.</p>
                }
                                    </div>
                         </div>
                    {/* total count */}
                    <div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                                    <div>
                                        <h6 style={{fontWeight: 'bold', color: '#000000',}}>Total: N {fundingSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                                    </div>
                                    <div className="ml-3">
                                        <button className="btn btn-view">View All</button>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div> 
            </div>




        {/* Up-coming payouts display */}
                 
                {/* funding display */}
                
                {/* filter tabs */}
                <div style={{display: 'flex', alignItems: 'center'}}>

                     {/* name */}
                     <div className="mt-5">
                     <h5 style={{color: '#A030A8', fontWeight: 'bold'}}>Up-Coming Payouts</h5>
                    </div>

                    <div className="filter-div mt-5 ml-3">
                         {payoutDayToggle}
                    </div>

                </div>


                  {/* UpcomingPayouts details */}
                  <div className="row mt-3 mb-5">
                         <div className="col-lg-12">
                            <div className="table-style">
                                <div className="myTable mt-4">
                                        <div className="myHead">
                                        {payout.length ? payout.map((value, index)=>{
                                            
                                            var dayShow
                                            switch(pay){
                                                case 1:
                                                    dayShow = "Today";
                                                    break;
                                                case 2:
                                                    dayShow = "This Week";
                                                    break;
                                                case 3:
                                                    dayShow = "Month";
                                                    break;
                                                case 4:
                                                    dayShow = "Year";
                                                    break;
                                                default:
                                                    dayShow = ""
                                            }
                        return(
                            <div key={index} className="myRow">
                            <div className="myColumn">
                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>{value.firstname} {value.lastname}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N {value.totalReturn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                                <div className="myColumn">
                                    {value.email}
                                </div>
                                <div className="myColumn">
                                    <p className="mb-0" style={{color: '#9E079E'}}>{value.bank} - {value.accountNumber}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{color: '#9E079E'}}>{dayShow}</p>
                                </div>
                            </div>
                        )
                    }):
                   <p className="text-center mt-3" style={{fontStyle: 'italic'}}>No data available for display.</p>
                }
                                    </div>
                         </div>
                    {/* total count */}
                    <div>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                                    <div>
                                        <h6 style={{fontWeight: 'bold', color: '#000000',}}>Total: N {payoutSum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
                                    </div>
                                    <div className="ml-3">
                                        <button className="btn btn-view">View All</button>
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



const mapStateToProps = (state) => {
    return {
        funding: state.dashboard.funding,
        fundingSum: state.dashboard.fundingSum,
        count: state.dashboard.count,
        payout: state.dashboard.payouts,
        payoutSum: state.dashboard.payoutSum,
        isLoading: state.dashboard.isLoading,
        chartDate: state.dashboard.chartDate
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    getFunding: (value) => dispatch(Funding(value)),
    getDashboardCount: (value) => dispatch(DashboardCount(value)),
    getPayouts: (value) =>dispatch(Payouts(value)),
    getChartData: (value) => dispatch(ChartRequest(value)),
 };
};



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);