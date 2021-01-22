import SideBar from '../../components/SideBar/SideBar'
import './dashboard.css'
import React, {useState} from 'react'
import CountUp from 'react-countup'
import Chart from '../../components/Charts/Chart'


const Dashboard = () =>{

    const [isActive, setActive] = useState(false);

    const [isCardActive, setCardActive] = useState(false);
    
    const [fund, setFund] = useState(1);

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

    const handleCardToggle = () =>{
        setCardActive(!isCardActive)
    }

    const FundToggle = (id) =>{
       setFund(id)
    }

    const PayToggle = (id) =>{
        setPayout(id)
    }

    const funding = fundData.map((item)=>
        <div key={item.id}
        className={fund === item.id ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => FundToggle(item.id)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )

    const payouts = fundData.map((item)=>
            <div key={item.id}
            className={pay === item.id ? 'filter-tab active-filter' : 'filter-tab'}
            onClick={() => PayToggle(item.id)}
            >   
            <p className="mb-0">{item.text}</p>
        </div>
        )

   

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
                    
                    {/* cards layout */}
                    <div className="row mt-3">

                            {/* funding */}
                        <div className="col-lg-2">
                            <div onClick={handleCardToggle} className={isCardActive ? "card-div" : "card-div-active"}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Funding</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 2,031,564</h5>
                                </div>
                            </div>
                        </div>
                        
                        {/* inflow */}
                        <div className="col-lg-2">
                            <div onClick={handleCardToggle} className={isCardActive ? "card-div-active" : "card-div"} >
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>In-Flow</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 1,890,325</h5>
                                </div>
                            </div>
                        </div>

                            {/* outflow */}
                        <div className="col-lg-2">
                            <div  onClick={handleCardToggle} className={isCardActive ? "card-div-active" : "card-div"}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Out-Flow</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 5,084,123</h5>
                                </div>
                            </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-2">
                            <div onClick={handleCardToggle} className={isCardActive ? "card-div-active" : "card-div"}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Active</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>568</h5>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>0 New</p>
                                </div>
                            </div>
                        </div>

                        {/* inactive */}
                        <div className="col-lg-2">
                            <div onClick={handleCardToggle} className={isCardActive ? "card-div-active" : "card-div"} >
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Inactive</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>
                                        <CountUp
                                        start={0}
                                        end={29}
                                        duration={2.5}
                                        separator=","
                                         />
                                    </h5>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>0 New</p>
                                </div>
                            </div>
                        </div>

                            {/* suspended */}
                        <div className="col-lg-2">
                            <div onClick={handleCardToggle} className={isCardActive ? "card-div-active" : "card-div"}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Suspended</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{fontWeight: 'bold', color: '#FF3535'}}>12</h5>
                                </div>
                            </div>
                        </div>
                    </div>


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
                         {funding}
                    </div>

                  
                </div>
 
                    {/* Funding details */}
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
                                                <p className="mb-0" style={{color: '#9E079E'}}>00:23:55</p>
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
                                            <p className="mb-0" style={{color: '#9E079E'}}>17:46:12</p>
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
                                            <p className="mb-0" style={{color: '#9E079E'}}>20:16:00</p>
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
                                            <p className="mb-0" style={{ color: '#9E079E'}}>23:12:57</p>
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

                    {/* Up-coming payouts display */}
                    
                {/* funding display */}
                
                {/* filter tabs */}
                <div style={{display: 'flex', alignItems: 'center'}}>

                     {/* name */}
                     <div className="mt-5">
                     <h5 style={{color: '#A030A8', fontWeight: 'bold'}}>Up-Coming Payouts</h5>
                    </div>

                    <div className="filter-div mt-5 ml-3">
                         {payouts}
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

export default Dashboard;