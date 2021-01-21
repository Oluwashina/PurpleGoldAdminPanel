import SideBar from "../../components/SideBar/SideBar";
import React, {useState} from 'react'
import './users.css'

function Users(){

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }


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

                    <div className="mt-4" style={{ width: '45%', margin: 'auto'}}>
                        <div className="users-card">

                            <div className="user-filter user-active" style={{borderRight: '0.2px solid #9286E9', padding: '10px 50px'}}>
                                <div className="user-count">
                                    53
                                </div>
                                All
                            </div>
                            <div  className="user-filter " style={{borderRight: '0.2px solid #9286E9'}}>
                                <div className="count">
                                    36
                                    </div>
                                Active
                            </div>

                            <div  className="user-filter" style={{borderRight: '0.2px solid #9286E9'}} >
                            <div className="count">
                                    12
                                    </div>
                                Inactive
                            </div>

                            <div className="user-filter " style={{padding: '10px 40px'}} >
                            <div className="count">
                                5
                                    </div>
                                Suspended
                            </div>

                        </div>
                    </div>

                    {/* list of all users */}
                    <div className="mt-4">
                        {/* users table */}
                        <div className="users-table">
                            <div className="users-head" style={{flex: 6}}>
                            
                            </div>
                            <div className="users-head" style={{color: '#000000', fontWeight: 400}}>
                                <div style={{display: 'flex'}}>
                                    <img alt="" src="/img/investments.png" className="img-fluid" />
                                    <p className="mb-0 ml-2">Total Active Investments</p>
                                </div>
                               
                            </div>
                            <div className="users-head" style={{color: '#000000', fontWeight: 400}}>
                                <div style={{display: 'flex'}}>
                                    <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                                    <p className="mb-0 ml-2">Total Withdrawn</p>
                                </div>
                            </div>
                            <div className="users-head" style={{color: '#000000', fontWeight: 400}}>
                             < div style={{display: 'flex'}}>
                                    <img alt="" src="/img/balance.png" className="img-fluid" />
                                    <p className="mb-0 ml-2">Balance</p>
                                </div>
                                
                            </div>
                            
                            <div className="users-head" >
                            
                            </div>
                     </div>  
                </div>

                {/* users data list */}
                <div style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5', padding: '10px 30px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="user-data">
                        <div style={{display: 'flex',}}>
                            <div>
                                <img src="/img/user.png" className="img-fluid" alt="" />
                            </div>
                            <div className="ml-2">
                                <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 14}}>Akinyemi Ogungbaro</p>
                                <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-data">
                        <div className="invest-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/investments.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                      <div className="withdrawn-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                    <div className="balance-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/balance.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>

                    <div className="user-data">
                        <div className="delete-icon">
                            <i className="mdi mdi-close text-white" style={{fontSize: 20}}></i>
                        </div>
                    </div>
                    
                </div>

                {/* list 2 */}
                <div className="mt-3" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5', padding: '10px 30px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="user-data">
                        <div style={{display: 'flex',}}>
                            <div>
                                <img src="/img/user.png" className="img-fluid" alt="" />
                            </div>
                            <div className="ml-2">
                                <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 14}}>Akinyemi Ogungbaro</p>
                                <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-data">
                        <div className="invest-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/investments.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>NO ACTIVE</p>
                        </div>
                    </div>
                    <div className="user-data">
                      <div className="withdrawn-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                    <div className="balance-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/balance.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>

                    <div className="user-data">
                        <div className="delete-icon">
                            <i className="mdi mdi-close text-white" style={{fontSize: 20}}></i>
                        </div>
                    </div>
                    
                </div>

                {/* list 3 */}
                <div className="mt-3" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5', padding: '10px 30px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="user-data">
                        <div style={{display: 'flex',}}>
                            <div>
                                <img src="/img/user.png" className="img-fluid" alt="" />
                            </div>
                            <div className="ml-2">
                                <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 14}}>Akinyemi Ogungbaro</p>
                                <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-data">
                        <div className="invest-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/investments.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                      <div className="withdrawn-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                    <div className="balance-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/balance.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>

                    <div className="user-data">
                        <div className="delete-icon">
                            <i className="mdi mdi-close text-white" style={{fontSize: 20}}></i>
                        </div>
                    </div>
                    
                </div>

                {/* list 4 */}
                <div className="mt-3" style={{background: '#fff', borderRadius: '10px', boxShadow: '0px 10px 10px 10px #F4F4F5', padding: '10px 30px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="user-data">
                        <div style={{display: 'flex',}}>
                            <div>
                                <img src="/img/user.png" className="img-fluid" alt="" />
                            </div>
                            <div className="ml-2">
                                <p className="mb-0" style={{color: '#7A50B9', fontWeight: 600, fontSize: 14}}>Akinyemi Ogungbaro</p>
                                <p className="mb-0" style={{color: '#9E079E', fontWeight: 600, fontSize: 14}}>Joined: JAN 05 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-data">
                        <div className="invest-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/investments.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#A030A8', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                      <div className="withdrawn-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/withdrawn.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FE20BE', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>
                    <div className="user-data">
                    <div className="balance-div" style={{display: 'flex'}}>
                            <img alt="" src="/img/balance.png" className="img-fluid" />
                            <p className="mb-0 ml-2" style={{color: '#FF3535', fontWeight: 'bold'}}>N 1,250,768.00</p>
                        </div>
                    </div>

                    <div className="user-data">
                        <div className="delete-icon">
                            <i className="mdi mdi-close text-white" style={{fontSize: 20}}></i>
                        </div>
                    </div>
                    
                </div>








             </div>
         </div>
      </div>
    )
}

export default Users;