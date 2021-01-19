import './SideBar.css'
import {Link} from 'react-router-dom'

function SideBar(){
    return(
       <>
          {/* Navbar */}
          <nav className="navbar navbar-bg" style={{zIndex: 1}}>
            <div className="container-fluid">
                {/* logo */}
                <div>
                    <Link className="navbar-brand" to="/dashboard">
                        <img alt="logo" src="/img/dash-logo.png" width="106" height="31"  />
                    </Link>
                </div>

                <div>
                    {/* other layout side */}
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                              <div className="form-group input-container mb-0">
                              <i className="mdi mdi-magnify iconn"></i>
                                <input type="text" placeholder="Search" className="form-control search-style"  />
                            </div>
                        </div>
                        <div className="ml-4">
                        <img src="/img/bell.png" alt="notifications" />
                        </div>
                        <div className="ml-4">
                        <img src="/img/avatar.png" alt="user" />
                        </div>
                        <div>
                            <p className="ml-4 mb-0 text-white" style={{fontWeight: 400}}>Akinyemi Ogungbaro</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </nav>

            <div className="sidenav">
                
                {/* home icon */}
                <div className="text-center activeNav" style={{marginTop: 150}}>
                    <img alt=""  src="/img/home-icon.png" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10}}>Home</p>
                </div>

                {/* Withdrawal icon */}
                <div className="text-center Nav">
                    <img alt="" src="/img/withdrawal.png" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10}}>Withdrawal</p>
                </div>

                {/* fund icon */}
                <div className="text-center Nav">
                    <img alt="" src="/img/fund.png" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10}}>Fund</p>
                </div>

                {/* plans icon */}
                <div className="text-center Nav">
                    <img alt="" src="/img/plans.png" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10}}>Plans</p>
                </div>

                {/* users */}
                <div className="text-center Nav">
                    <img  alt="" src="/img/users.png" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10}}>Users</p>
                </div>
                


            </div>

       </>
        
    )
}

export default SideBar;