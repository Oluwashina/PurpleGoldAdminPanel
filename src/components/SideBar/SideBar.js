import './SideBar.css'
import {Link, useLocation} from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from "../../store/actions/authActions";
import { SearchUser } from '../../store/actions/userActions';


function SideBar({Logout, firstname,lastname, image, Search}){


        // check for which path you are on
    const isActive = useLocation().pathname

    const ToggleLogout = () =>{
        Logout()
    }

    const handleChange = (e) =>{
        let keyword = e.target.value
        Search(keyword)
    }


    return(
       <>
          {/* Navbar */}
          <nav className="navbar navbar-bg" style={{zIndex: 1}}>
            <div className="container-fluid">
                {/* logo */}
                <div>
                    <Link className="navbar-brand" to="/dashboard">
                        <img alt="logo" src="/img/dash-logo.png" width="106" height="31" />
                    </Link>
                </div>

                <div>
                    {/* other layout side */}
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div
                        style={ { display: isActive.includes("/users") ? 'block' : 'none' } } 
                        >
                              <div className="form-group input-container mb-0">
                              <i className="mdi mdi-magnify iconn"></i>
                                <input type="text" placeholder="Search by email"
                                 onChange={handleChange}  
                                className="form-control search-style"  />
                            </div>
                        </div>
                        <div className="ml-4">
                        <img src="/img/bell.png" alt="notifications" />
                        </div>
                        <div className="ml-4">
                            <img 
                            className="imageStyle"
                              src={ image ? image : `../img/profile.svg`}
                             alt="user" />
                        </div>
                        <div>
                            <p className="ml-3 mb-0 text-white" style={{fontWeight: 400}}>{firstname} {lastname}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </nav>

            <div className="sidenav">
                
                {/* home icon */}
                <div className={isActive === "/dashboard"  ? "text-center activeNav" : "text-center Nav"} style={{marginTop: 75}}>
                    <Link to="/dashboard" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/home.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Home</p>
                    </Link>
                </div>

               
                {/* Withdrawal icon */}
                <div className={isActive.includes("/withdrawal")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/withdrawal" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/withdrawal.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Withdraw</p>
                    </Link>
                </div>

          
                {/* fund icon */}
                <div className={isActive.includes("/fund")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/fund" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/fund.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Fund</p>
                    </Link>
                </div>

               

                {/* plans icon */}
                {/* <div className={isActive === "/plans"  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/plans" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/plans.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Plans</p>
                    </Link>
                </div> */}
               

                {/* users */}
                <div className={isActive.includes("/users")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/users" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/users.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Users</p>
                    </Link>
                </div>


                  {/* Marketers */}
                  <div className={isActive.includes("/marketers")  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/marketers" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/marketers.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Marketers</p>
                    </Link>
                </div>

                 

                  {/* Admin */}
                  <div className={isActive.includes("/admin")  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin" style={{textDecoration: 'none'}}>
                    <img  alt=""  src="/img/admin.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Admin</p>
                    </Link>
                </div>


                 {/* Logout */}
                 <div className="text-center Nav" >
                     <Link to="/" style={{textDecoration: 'none'}} onClick={ToggleLogout}>
                    <img  alt="" src="/img/logout.svg" className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Logout</p>
                    </Link>
                </div>

            </div>

       </>
        
    )
}

const mapStateToProps = (state) => {
    return {
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        image: state.auth.imageUrl,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => dispatch(logOut()),
        Search: (value) => dispatch(SearchUser(value))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);