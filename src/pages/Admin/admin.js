import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'


const Admin = (props) =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.history.push("/confirm/fund");
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


                    <div className="mt-4" style={{ width: '60%', margin: 'auto'}}>
                        <div className="users-card">

                            <div className="user-filter user-active" style={{borderRight: '0.2px solid #9286E9'}}>
                                New
                            </div>
                            <div  className="user-filter " style={{borderRight: '0.2px solid #9286E9'}}>
                                
                                View All
                            </div>

                            <div  className="user-filter" style={{borderRight: '0.2px solid #9286E9'}} >
                                Suspended
                            </div>

                            <div  className="user-filter" style={{borderRight: '0.2px solid #9286E9'}} >
                                All Activities
                            </div>

                            <div className="user-filter">
                                Profile
                            </div>

                        </div>
                    </div>
                    

                    {/* Fund user design layout */}

                    <div className="admin-card mt-5">

                        <div className="admin-div">

                            <div>
                                <h5 className="text-center" style={{color: '#7031BD', fontWeight: 'bold'}}>Create New Admin</h5>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-email icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="email"
                                        placeholder="Staff Email Address"
                                        id="email"
                                        required
                                    />


                                    </div>

                                    <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-lock icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        required
                                    />
                                    </div>

                                    <button 
                                type="submit"
                               
                                className="btn btn-fund mt-2">
                                    Create New Admin
                                    </button>
                                
                            </form>
                       

                     </div>

                    </div>
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default Admin;