import './SideBar.css'
import {Link, useLocation} from 'react-router-dom'


function SideBar(){


        // check for which path you are on
    const isActive = useLocation().pathname


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
                <div className={isActive === "/dashboard"  ? "text-center activeNav" : "text-center Nav"} style={{marginTop: 150}}>
                    <Link to="/dashboard" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/home.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Home</p>
                    </Link>
                </div>

               
                {/* Withdrawal icon */}
                <div className={isActive === "/withdrawal"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/withdrawal" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/withdrawal.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Withdrawal</p>
                    </Link>
                </div>

          
                {/* fund icon */}
                <div className={isActive === "/fund"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/fund" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/fund.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Fund</p>
                    </Link>
                </div>

               

                {/* plans icon */}
                <div className={isActive === "/plans"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/plans" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/plans.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Plans</p>
                    </Link>
                </div>
               

                {/* users */}
                <div className={isActive === "/users"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/users" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/users.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Users</p>
                    </Link>
                </div>


                  {/* Marketers */}
                  <div className={isActive === "/marketers"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/marketers" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/marketers.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Marketers</p>
                    </Link>
                </div>

                 

                  {/* Admin */}
                  <div className={isActive === "/admin"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/admin.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Admin</p>
                    </Link>
                </div>


                 {/* Logout */}
                 <div className="text-center Nav">
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <img  alt="" src="/img/logout.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Logout</p>
                    </Link>
                </div>

            </div>

       </>
        
    )
}

export default SideBar;