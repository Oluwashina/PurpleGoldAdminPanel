import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'


const AllAdmin = (props) =>{

    const [fund] = useState(2);

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'New', value: '1' },
        { id: 2, name: 'tab-2', text: 'View All', value: '2' },
        { id: 3, name: 'tab-3', text: 'Suspended', value: '3' },
        { id: 4, name: 'tab-4', text: 'All Activities', value: '4' },
        { id: 5, name: 'tab-5', text: 'Profile', value: '5' },
    ])

    const FundToggle = (id) =>{
        // route to all admin
        if(id === 1){
            props.history.push('/admin')
        }
        // route to suspended admin
        if(id === 3){
            props.history.push('/admin/suspended') 
        }
        // route to all actitivties
        if(id === 4){
            props.history.push('/admin/activities') 
        }
        // route to profile
        if(id === 5){
            props.history.push('/admin/profile') 
        }
     }

    const funding = fundData.map((item)=>
    <div key={item.id}
        className={fund === item.id ? 'filter-tab active-admin' : 'filter-tab'}
        onClick={() => FundToggle(item.id)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
        <SideBar />
            <div className="main">
                <div className="contain">


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
                                    <div className="myRow" style={{background: 'rgba(226, 223, 242, 0.82)'}}>
                                        <div className="withdrawColumn">
                                            
                                            </div>
                                    <div className="withdrawColumn">
                                            Name
                                    </div>
                                    
                                    <div className="withdrawColumn">
                                        Email
                                    </div>
                                    <div className="withdrawColumn">
                                        Last Login
                                    </div>
                                        <div className="withdrawColumn">
                                                Action
                                        </div>
                                    </div>
                                     {/* actual data row */}
                                     <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn">
                                                 <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>
                                            <div className="adminColumn">
                                            akinyemi@purplegoldcompany.com
                                            </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-paid">Active</button>
                                            </div>
                                    </div>
                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn">
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Akinyemi Ogungbaro</p>
                                            </div>
                                            <div className="adminColumn">
                                            akinyemi@purplegoldcompany.com
                                            </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Today</p>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-decline">Suspended</button>
                                            </div>
                                    </div>

                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn">
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Olosunde Oluwatobi</p>
                                            </div>
                                            <div className="adminColumn">
                                            akinyemi@purplegoldcompany.com
                                            </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>Yesterday</p>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-decline">Suspended</button>
                                            </div>
                                    </div>

                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn">
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>
                                            <div className="adminColumn">
                                            akinyemi@purplegoldcompany.com
                                            </div>
                                            <div className="adminColumn">
                                            <p className="mb-0" style={{color: '#9E079E'}}>10th, Jan</p>
                                            </div>
                                            <div className="adminColumn">
                                            <button className="btn btn-paid">Active</button>
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

export default AllAdmin;