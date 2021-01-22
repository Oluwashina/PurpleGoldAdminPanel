import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'


const AdminProfile = (props) =>{

    const [fund] = useState(5);

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
        // route to all activities
        if(id === 3){
            props.history.push('/admin/suspended') 
        }
        // route to activities
        if(id === 4){
            props.history.push('/admin/activities') 
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

                
                
                </div>
            </div>
        </div>
    )
}

export default AdminProfile;