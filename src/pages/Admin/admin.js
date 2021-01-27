import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './admin.css'
import { connect } from "react-redux";
import { AddAdmin } from "../../store/actions/adminActions";


const Admin = (props) =>{

    const {CreateAdmin, loader} = props

    const [fund] = useState(1);

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        const values = {
            firstname,
            lastname,
            phone,
            email,
            password
        }
        console.log(values)
        CreateAdmin(values)
        setFirstname('')
        setLastname('')
        setPhone('')
        setEmail('')
        setPassword('')
        
    }

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'New', value: '1' },
        { id: 2, name: 'tab-2', text: 'View All', value: '2' },
        { id: 3, name: 'tab-3', text: 'Suspended', value: '3' },
        { id: 4, name: 'tab-4', text: 'All Activities', value: '4' },
        { id: 5, name: 'tab-5', text: 'Profile', value: '5' },
    ])

    const FundToggle = (id) =>{
        // route to all admin
        if(id === 2){
            props.history.push('/admin/all')
        }
        // route to suspended admin
        if(id === 3){
            props.history.push('/admin/suspended') 
        }
        // route to all activities
        if(id === 4){
            props.history.push('/admin/activities') 
        }
        // route to admin profile
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
        <div style={{backgroundColor: '#f5f6f8',}}>
        <SideBar />
            <div className="main">
                <div className="contain">


                <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <div className="chart-filter">
                            {funding}
                    </div>
                </div>

                    

                    {/* Fund user design layout */}

                    <div className="admin-card mt-5 mb-5">

                        <div className="admin-div">

                            <div>
                                <h5 className="text-center" style={{color: '#7031BD', fontWeight: 'bold'}}>Create New Admin</h5>
                            </div>

                            <form onSubmit={handleSubmit}>

                            <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-account icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="text"
                                        placeholder="Staff Firstname"
                                        required
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>

                                <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-account icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="text"
                                        placeholder="Staff Lastname"
                                        required
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>

                                <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-phone icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="text"
                                        placeholder="Staff Phonenumber e.g 800-000-0000"
                                        
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>


                                <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-email icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="email"
                                        placeholder="Staff Email Address"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />


                                    </div>

                                    <div className="form-group input-container mt-4">
                                    <i className="mdi mdi-lock icon-fund"></i>
                                    <input
                                        className="form-control fund-style"
                                        type="password"
                                        placeholder="Password"
                                        
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>

                                    <button 
                                type="submit"
                                disabled={loader}
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

const mapStateToProps = (state) => {
    return {
      loader: state.admin.loading
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      CreateAdmin: (value) => dispatch(AddAdmin(value)),
    };
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(Admin);