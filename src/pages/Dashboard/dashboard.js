import SideBar from '../../components/SideBar'
import './dashboard.css'

const Dashboard = () =>{
    return(
        <div style={{backgroundColor: '#e5e5e5'}}>
        <SideBar />
            <div className="main">
                <div className="contain">
                    
                    {/* cards layout */}
                    <div className="row mt-5">

                        <div className="col-lg-2">
                            <div className="card-div-active">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Funding</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 2,031,564</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="card-div">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>In-Flow</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 1,890,325</h5>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-2">
                            <div className="card-div">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p className="mb-0" style={{color: '#A030A8', fontSize: 14, fontWeight: 'bold'}}>Out-Flow</p>
                                    <p className="mb-0" style={{color: '#000000', fontSize: 14}}>Today</p>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{color: '#000000', fontWeight: 'bold'}}>N 5,084,123</h5>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-2">
                            <div className="card-div">
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

                        
                        <div className="col-lg-2">
                            <div className="card-div">
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

                        
                        <div className="col-lg-2">
                            <div className="card-div">
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


                    {/* Users details */}
                    <div className="row mt-5">
                        <div className="col-lg-8">
                                <div className="table-style">
                                    <div style={{display: 'flex', justifyContent: 'space-between',}}>

                                        <div>
                                            <img src="/img/avatar.png" className="img-fluid" alt="" />
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                        </div>

                                        <div>
                                            <p className="mb-0">femiemmanuel@gmail.com</p>
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div style={{display: 'flex', justifyContent: 'space-between', }}>

                                        <div>
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Olosunde Oluwatobi</p>
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                        </div>

                                        <div>
                                            <p className="mb-0">femiemmanuel@gmail.com</p>
                                        </div>

                                        <div>
                                            <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>

                                            <div>
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>

                                            <div>
                                                <p className="mb-0">femiemmanuel@gmail.com</p>
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                            </div>
                                            </div>
                                            <hr />

                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>

                                            <div>
                                                <img className="img-fluid" src="/img/avatar.png" alt="" />
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Akinyemi Ogungbaro</p>
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>N 255,198.00</p>
                                            </div>

                                            <div>
                                                <p className="mb-0">femiemmanuel@gmail.com</p>
                                            </div>

                                            <div>
                                                <p className="mb-0" style={{color: '#9E079E'}}>25/01/2020</p>
                                            </div>
                                            </div>
                                            <hr />

                                            

                                            {/* total count */}
                                            <div>
                                                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                                                    <div>
                                                     <h6 style={{fontWeight: 700}}>Total: N 2,031,564.00</h6>
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