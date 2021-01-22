import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'


const AdminActivities = (props) =>{

    const [fund] = useState(4);

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'New', value: '1' },
        { id: 2, name: 'tab-2', text: 'View All', value: '2' },
        { id: 3, name: 'tab-3', text: 'Suspended', value: '3' },
        { id: 4, name: 'tab-4', text: 'All Activities', value: '4' },
        { id: 5, name: 'tab-5', text: 'Profile', value: '5' },
    ])

    const FundToggle = (id) =>{
        // route t all admin
        if(id === 1){
            props.history.push('/admin')
        }
        // route to all admin
        if(id === 2){
            props.history.push('/admin/all') 
        }
        // route to suspended admin
        if(id === 3){
            props.history.push('/admin/suspended') 
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
                                        Activity
                                    </div>
                                    <div className="withdrawColumn">
                                        Date
                                    </div>
                                       
                                    </div>
                                     {/* actual data row */}
                                     <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn" style={{padding: '18px 20px'}}>
                                                 <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn" style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Femi Emmanuel</p>
                                            </div>
                                            <div className="adminColumn" style={{padding: '18px 20px'}}>
                                            Paid user “akinyemiogungbaro@gmail.com”  N250,000
                                            </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{color: '#9E079E'}}>Yesterday</p>
                                            </div>
                                            
                                    </div>
                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Akinyemi Ogungbaro</p>
                                            </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            Paid user “akinyemiogungbaro@gmail.com”  N250,000
                                            </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{color: '#9E079E'}}>Last Month</p>
                                            </div>
                                            
                                    </div>

                                    {/* another row */}
                                    <div className="myRow" style={{background: '#fff'}}>
                                            <div className="adminColumn" style={{padding: '18px 20px'}}>
                                            <img className="img-fluid" src="/img/avatar.png" alt="" />
                                                </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>Olosunde Oluwatobi</p>
                                            </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            Paid user “akinyemiogungbaro@gmail.com”  N250,000
                                            </div>
                                            <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                            <p className="mb-0" style={{color: '#9E079E'}}>Yesterday</p>
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

export default AdminActivities;