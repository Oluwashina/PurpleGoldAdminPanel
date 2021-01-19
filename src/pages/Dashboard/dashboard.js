import SideBar from '../../components/SideBar'
import './dashboard.css'
import React, {useState} from 'react'


const Dashboard = () =>{

    const [isActive, setActive] = useState(false);
    
    const [isCardActive, setCardActive] = useState(false);
  

    const handleToggle = () =>{
        setActive(!isActive);
    }

    const handleCardToggle = () =>{
        setCardActive(!isCardActive)
    }

   

    return(
        <div style={{backgroundColor: '#e5e5e5'}}>
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
                    <div className="row mt-5">

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
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>29</h5>
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

                {/* filter tabs */}
                <div className="filter-div mt-5">
                    <div className="filter-tab active-filter">   
                        <p className="mb-0">Today</p>
                    </div>
                    <div className="filter-tab">   
                        <p className="mb-0">This week</p>
                    </div>
                    <div className="filter-tab" >   
                        <p className="mb-0">Month</p>
                    </div>
                    <div style={{padding: '10px 30px'}}>   
                        <p className="mb-0 text-center">Year</p>
                    </div>
                </div>

                    {/* Users details */}
                    <div className="row mt-3">
                        <div className="col-lg-8">
                                <div className="table-style">
                                    <div style={{display: 'flex',}}>

                                        <div className="table-data">
                                            <img src="/img/avatar.png" className="img-fluid" alt="" />
                                        </div>

                                        <div  className="table-data">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                        </div>

                                        <div  className="table-data"> 
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                        </div>

                                        <div  className="table-data">
                                            <p className="mb-0">femiemmanuel@gmail.com</p>
                                        </div>

                                        <div  className="table-data">
                                            <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div style={{display: 'flex', justifyContent: 'space-between', }}>

                                        <div  className="table-data">
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                        </div>

                                        <div  className="table-data">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Olosunde Oluwatobi</p>
                                        </div>

                                        <div  className="table-data">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                        </div>

                                        <div className="table-data">
                                            <p className="mb-0">femiemmanuel@gmail.com</p>
                                        </div>

                                        <div className="table-data">
                                            <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>

                                            <div className="table-data"> 
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0">femiemmanuel@gmail.com</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                            </div>
                                            </div>
                                            <hr />

                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>

                                            <div  className="table-data">
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Akinyemi Ogungbaro</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0">femiemmanuel@gmail.com</p>
                                            </div>

                                            <div  className="table-data">
                                                <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                            </div>
                                            </div>
                                            <hr />

                                            

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