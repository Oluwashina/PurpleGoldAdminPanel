import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'
import { connect } from 'react-redux';


const AdminProfile = ({profile, history}) =>{

    const [fund] = useState(5);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordNew, setPasswordNew] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'New', value: '1' },
        { id: 2, name: 'tab-2', text: 'View All', value: '2' },
        { id: 3, name: 'tab-3', text: 'Suspended', value: '3' },
        { id: 4, name: 'tab-4', text: 'All Activities', value: '4' },
        { id: 5, name: 'tab-5', text: 'Profile', value: '5' },
    ])

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const togglePasswordNew = () =>{
        setPasswordNew(passwordNew ? false : true);
    }

    const togglePasswordConfirm = () =>{
        setPasswordConfirm(passwordConfirm ? false : true);
    }

      const setPassword = (e) =>{
          console.log(e)
      } 


    const FundToggle = (id) =>{
        // route t all admin
        if(id === 1){
            history.push('/admin')
        }
        // route to all admin
        if(id === 2){
            history.push('/admin/all') 
        }
        // route to all activities
        if(id === 3){
            history.push('/admin/suspended') 
        }
        // route to activities
        if(id === 4){
            history.push('/admin/activities') 
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
        <div style={{backgroundColor: '#f5f6f8',}}>
        <SideBar />
            <div className="main">
                <div className="contain">


                <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <div className="chart-filter">
                            {funding}
                    </div>
                </div>


                  {/* profile div */}
                  <div className="mt-5" style={{width: '50%', margin: 'auto',}}>

                     <div style={{borderRadius: '5px',  background: 'rgba(226, 223, 242, 0.82)', height: '41px' }}>
                    </div>

                       <div style={{padding: '30px 60px', background: 'white'}}>

                         <div className="text-center">
                                <img src="/img/profile.png" className="img-fluid" alt="profile-pix" />
                          </div>

                          <div className="text-center mt-3">
                                <button className="btn btn-paid" style={{fontWeight: 'bold'}}><i className="mdi mdi-camera-outline"></i>Upload Photo</button>
                              </div>

                              <div className="text-center mt-3">
                                  <div style={{background: '#F5F0FC', borderRadius: '5px', padding: '10px 20px', width: '50%', margin: 'auto'}}>
                                  <p className="mb-0" style={{color: 'rgba(158, 7, 158, 0.51)'}}>{profile.firstname} {profile.lastname}</p>
                                  </div> 
                              </div> 

                              <div className="text-center mt-3">
                                  <div style={{background: '#F5F0FC', borderRadius: '5px', padding: '10px 20px', width: '70%', margin: 'auto'}}>
                                  <p className="mb-0" style={{color: 'rgba(158, 7, 158, 0.51)'}}>{profile.email}</p>
                                  </div> 
                              </div> 

                              <div className="text-center mt-4">
                                  <p className="mb-0">Change Password ?</p>
                              </div>

                                {/* current password */}
                              <div style={{width: '55%', margin: 'auto'}}>
                              <div className="form-group mt-2" style={{position: 'relative'}}>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control password-style"
                                        required
                                        onChange={(e)=>setPassword(e.target.value)}
                                        name="password"
                                        placeholder="Current Password" 
                                        style={{ color: "black", }}
                                    />
                                    <div className="password_icon">
                                    <i style={{fontSize: 18}} className={passwordShown ? "mdi mdi-eye" : "mdi mdi-eye-off"} onClick={togglePasswordVisiblity}></i>  
                                    </div>
                                    
                                </div>
                              </div>

                              {/* new password */}
                              <div style={{width: '55%', margin: 'auto'}}>
                              <div className="form-group mt-3" style={{position: 'relative'}}>
                                    <input
                                        type={passwordNew ? "text" : "password"}
                                        className="form-control password-style"
                                        required
                                        onChange={(e)=>setPassword(e.target.value)}
                                        name="password"
                                        placeholder="New Password" 
                                        style={{ color: "black", }}
                                    />
                                    <div className="password_icon">
                                    <i style={{fontSize: 18}} className={passwordNew ? "mdi mdi-eye" : "mdi mdi-eye-off"} onClick={togglePasswordNew}></i>  
                                    </div>
                                    
                                </div>
                              </div>

                              {/* confirm password */}
                              <div style={{width: '55%', margin: 'auto'}}>
                              <div className="form-group mt-3" style={{position: 'relative'}}>
                                    <input
                                        type={passwordConfirm ? "text" : "password"}
                                        className="form-control password-style"
                                        required
                                        onChange={(e)=>setPassword(e.target.value)}
                                        name="password"
                                        placeholder="Confirm New Password" 
                                        style={{ color: "black", }}
                                    />
                                    <div className="password_icon">
                                    <i style={{fontSize: 18}} className={passwordConfirm ? "mdi mdi-eye" : "mdi mdi-eye-off"} onClick={togglePasswordConfirm}></i>  
                                    </div>
                                    
                                </div>
                              </div>

                              {/* save profile button */}
                              <div className="text-center mt-4">
                                  <button className="btn btn-save">Save Profile</button>
                              </div>
                           



                        </div> 
                        

                    </div>



                
                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        profile: state.auth.profile
    };
}

export default connect(mapStateToProps)(AdminProfile);