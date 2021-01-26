import SideBar from '../../components/SideBar/SideBar'
import './dashboard.css'
import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup'
import Chart from '../../components/Charts/Chart'
import {connect} from 'react-redux'
import { Funding, DashboardCount } from "../../store/actions/fundActions";
import { Payouts } from "../../store/actions/dashboardActions";


const Dashboard = ({getFunding, funding, fundingSum, getDashboardCount, count, getPayouts}) =>{

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

    // const [dashCard] = useState([
    //     {id: 1, name: 'Funding', value: 0},
    //     {id: 2, name: 'In-Flow', value: 0},
    //     {id: 3, name: 'Out-Flow', value: 0},
    //     {id: 4, name: 'Active', value: 0},
    //     {id: 5, name: 'Inactive', value: 0},
    //     {id: 6, name: 'Suspended', value: 0},
    // ])



    const handleToggle = () =>{
        setActive(!isActive);
    }

    const handleCardToggle = (index) =>{
        setCards(index)
    }

    const FundToggle = (id) =>{
       setFund(id)
    }

    const PayToggle = (id) =>{
        setPayout(id)
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
                                        {funding.length ? funding.map((fund, index)=>{
                        return(
                            <div key={index} className="myRow">
                            <div className="myColumn">
                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>{fund.firstname} {fund.lastname}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N {fund.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                                <div className="myColumn">
                                    {fund.email}
                                </div>
                                <div className="myColumn">
                                    <p className="mb-0" style={{color: '#9E079E'}}>{fund.createdAt.slice(11, 19)}</p>
                                </div>
                                <div className="myColumn">
                                <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                </div>
                            </div>
                        )
                    }):
                   <p className="text-center mt-3" style={{fontStyle: 'italic'}}>No data available for today.</p>
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

              

                    {/* Users details */}
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <div className="table-style">
                                <div className="myTable mt-4">
                                        <div className="myHead">
                                            {/* first row */}
                                            <div className="myRow">
                                                <div className="myColumn">
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>
                                            <div className="myColumn">
                                                femiemmanuel@gmail.com
                                            </div>
                                            <div className="myColumn">
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>GTBank -0015738102</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                        </div>
                                        {/* second row */}
                                        <div className="myRow">
                                                <div className="myColumn">
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Akinyemi Ogungbaro</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>
                                            <div className="myColumn">
                                                femiemmanuel@gmail.com
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Stanbic Bank -0015738102</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                        </div>
                                        {/* third row */}
                                        <div className="myRow">
                                                <div className="myColumn">
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Olosunde Oluwatobi</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>
                                            <div className="myColumn">
                                                femiemmanuel@gmail.com
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Access Bank -0015738102</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                        </div>
                                        {/* fourth row */}
                                        <div className="myRow">
                                                <div className="myColumn">
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>
                                            <div className="myColumn">
                                                femiemmanuel@gmail.com
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Fidelity Bank -0015738102</p>
                                            </div>
                                            <div className="myColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                    
                                            

                                    {/* total count */}
                                    <div>
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                                            <div>
                                                <h6 style={{fontWeight: 'bold', color: '#000000',}}>Total: N 2,031,564.00</h6>
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
        funding: state.fund.funding,
        fundingSum: state.fund.fundingSum,
        count: state.fund.count
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    getFunding: (value) => dispatch(Funding(value)),
    getDashboardCount: (value) => dispatch(DashboardCount(value)),
    getPayouts: (value) =>dispatch(Payouts(value)),
 };
};



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);