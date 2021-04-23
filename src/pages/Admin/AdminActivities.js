import SideBar from '../../components/SideBar/SideBar'
import React, {useState, useEffect} from 'react'
import './admin.css'
import {connect} from 'react-redux'
import { getAdminActivities } from "../../store/actions/adminActions";
import Moment from 'moment';


const AdminActivities = (props) =>{

    const {getActivities, activities} = props
    
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

     // Get all admins
    useEffect(() => {
        getActivities();
    }, [getActivities]);



    return(
        <div>
        <SideBar />
            <div className="main">
                <div className="contain">


                <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <div className="chart-filter">
                            {funding}
                    </div>
                </div>

                {/* Data tables to be populated with all admin layout */}
                <div className="admin-head mt-4">
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

                                    {activities.length ? (
                                        activities.map((value, index) => {
                                             // picture
                                             var imageUrl;
                                             switch(value.imageUrl){
                                                 case "":
                                                 imageUrl = "../img/profile.svg"  
                                                 break;
                                                 case null:
                                                     imageUrl = "../img/profile.svg" 
                                                 break;
                                                 case "/profile_pics.jpg":
                                                     imageUrl = "../img/profile.svg" 
                                                 break;
                                                 default:
                                                 imageUrl = value.imageUrl 
                                             }

                                            return (
                                            <div
                                                key={index}
                                                className="myRow"
                                                style={{ background: "#fff" }}
                                            >
                                               <div className="adminColumn" style={{padding: '18px 20px'}}>
                                               <img className="img-fluid imageStyle" src={imageUrl} alt="" />
                                                </div>
                                                <div className="adminColumn" style={{padding: '18px 20px'}}>
                                                    <p className="mb-0" style={{fontWeight: 700, color: '#000000'}}>{value.firstname} {value.lastname}</p>
                                                </div>
                                                <div className="adminColumn" style={{padding: '18px 20px'}}>
                                                     {value.activity}
                                                </div>
                                                <div className="adminColumn"  style={{padding: '18px 20px'}}>
                                                     <p className="mb-0" style={{color: '#9E079E'}}>
                                                         {Moment(value.createdAt).fromNow()}
                                                     </p>
                                                </div>
                                            </div>
                                            );
                                        })
                                        ) : (
                                        <p
                                            className="text-center mt-3"
                                            style={{ fontStyle: "italic" }}
                                        >
                                        
                                        </p>
                                        )}
                                                      
                                 </div>
                             </div>
                    </div>
                                
                    <div className="text-center">
                        {activities.length ? "" :  <p style={{fontStyle: 'italic'}}> No activities available for display!</p>} 
                  </div>
                
                
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      activities: state.admin.activities,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getActivities: () => dispatch(getAdminActivities()),
    };
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(AdminActivities);