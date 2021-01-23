import SideBar from "../../components/SideBar/SideBar";
import React, {useState} from 'react'
import './marketers.css'

function Marketers(){

    const [isActive, setActive] = useState(false);
    const [fund, setFund] = useState(1);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'All', count: '53' },
        { id: 2, name: 'tab-2', text: 'Active', count: '36' },
        { id: 3, name: 'tab-3', text: 'Inactive', count: '12' },
        { id: 4, name: 'tab-4', text: 'Suspended', count: '5' },
    ])

    const FundToggle = (id) =>{
        setFund(id)
     } 

    
    const funding = fundData.map((item)=>
    <div key={item.id}
    style={{position: "relative"}}
        className={fund === item.id ? 'user-tab user-active' : 'user-tab'}
        onClick={() => FundToggle(item.id)}
        >   
         <div className={fund === item.id ? 'count-active': 'count'}>
            {item.count}
        </div>
        <p className="mb-0">{item.text}</p>
    </div>
    )


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
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

                    <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <div className="chart-filter">
                                {funding}
                        </div>
                    </div>

                     {/* Data tables to be populated with all admin layout */}
                 <div className="admin-head mt-5">
                        <div className="myTable" style={{marginBottom: 0}}>
                            <div className="myHead" >
                                    {/*heading row */}
                                    <div className="myRow" style={{background: '#FBFBFB'}}>
                                        <div className="withdrawColumn">
                                            
                                            </div>
                                    <div className="withdrawColumn">
                                        <div style={{display: 'flex'}}>
                                            <img alt="" src="/img/investments.png" className="img-fluid" />
                                            <p className="mb-0 ml-2">Total Active Investments</p>
                                        </div>
                                    </div>
                                    
                                    <div className="withdrawColumn">
                                      <div style={{display: 'flex'}}>
                                        <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                        <p className="mb-0 ml-2">Total Withdrawn</p>
                                     </div>
                                    </div>
                                    <div className="withdrawColumn">
                                            <div style={{display: 'flex'}}>
                                            <img alt="" src="/img/balance.png" className="img-fluid" />
                                            <p className="mb-0 ml-2">Balance</p>
                                        </div>
                                    </div>
                                        <div className="withdrawColumn">
                                              
                                        </div>
                                    </div>

                                     {/* actual data row */}
                                     <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn">
                                                <div style={{display: 'flex',}}>
                                                    <div>
                                                        <img src="/img/user.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 15}}>Akinyemi Ogungbaro</p>
                                                        <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                <div className="invest-div" style={{display: 'flex'}}>
                                                <img alt="" src="/img/investments.png" className="img-fluid" />
                                                <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                    <div className="withdrawn-div" style={{display: 'flex'}}>
                                                        <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                                        <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 730,120.00</p>
                                                    </div>
                                          </div>
                                            <div className="adminColumn">
                                                <div className="balance-div" style={{display: 'flex'}}>
                                                    <img alt="" src="/img/balance.png" className="img-fluid" />
                                                    <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 5,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-suspend"><i className="mdi mdi-close" style={{fontSize: 20}}></i></button>
                                            </div>
                                    </div>
                                 

                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5',}}>
                                            <div className="adminColumn">
                                                <div style={{display: 'flex',}}>
                                                    <div>
                                                        <img src="/img/user.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 15}}>Akinyemi Ogungbaro</p>
                                                        <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                <div className="invest-div" style={{display: 'flex'}}>
                                                <img alt="" src="/img/investments.png" className="img-fluid" />
                                                <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                    <div className="withdrawn-div" style={{display: 'flex'}}>
                                                        <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                                        <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 730,120.00</p>
                                                    </div>
                                          </div>
                                            <div className="adminColumn">
                                                <div className="balance-div" style={{display: 'flex'}}>
                                                    <img alt="" src="/img/balance.png" className="img-fluid" />
                                                    <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 5,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-suspend"><i className="mdi mdi-close" style={{fontSize: 20}}></i></button>
                                            </div>
                                    </div>

                                    {/* another row */}
                                    
                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5',}}>
                                            <div className="adminColumn">
                                                <div style={{display: 'flex',}}>
                                                    <div>
                                                        <img src="/img/user.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 15}}>Akinyemi Ogungbaro</p>
                                                        <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                <div className="invest-div" style={{display: 'flex'}}>
                                                <img alt="" src="/img/investments.png" className="img-fluid" />
                                                <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                    <div className="withdrawn-div" style={{display: 'flex'}}>
                                                        <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                                        <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 730,120.00</p>
                                                    </div>
                                          </div>
                                            <div className="adminColumn">
                                                <div className="balance-div" style={{display: 'flex'}}>
                                                    <img alt="" src="/img/balance.png" className="img-fluid" />
                                                    <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 5,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-suspend"><i className="mdi mdi-close" style={{fontSize: 20}}></i></button>
                                            </div>
                                    </div>

                                    {/* another row */}
                                    
                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5',}}>
                                            <div className="adminColumn">
                                                <div style={{display: 'flex',}}>
                                                    <div>
                                                        <img src="/img/user.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 15}}>Akinyemi Ogungbaro</p>
                                                        <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                <div className="invest-div" style={{display: 'flex'}}>
                                                <img alt="" src="/img/investments.png" className="img-fluid" />
                                                <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                                    <div className="withdrawn-div" style={{display: 'flex'}}>
                                                        <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                                        <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 730,120.00</p>
                                                    </div>
                                          </div>
                                            <div className="adminColumn">
                                                <div className="balance-div" style={{display: 'flex'}}>
                                                    <img alt="" src="/img/balance.png" className="img-fluid" />
                                                    <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 5,250,768.00</p>
                                                </div>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-suspend"><i className="mdi mdi-close" style={{fontSize: 20}}></i></button>
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

export default  Marketers;