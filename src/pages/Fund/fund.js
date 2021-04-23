import SideBar from '../../components/SideBar/SideBar'
import React,{ useEffect} from 'react'
import {connect} from 'react-redux'
import './fund.css'
import { Form, Formik } from "formik";
import { VerifyEmail } from "../../store/actions/fundActions";
import { FundWalletValidator } from "../../validationSchema/authValidator";



const Fund = ({verify, history, loading,loader}) =>{

    
  const handleSubmit = async (values, setSubmitting) => {
    await verify(values)
    // history.push("/");
  };

    useEffect(() =>{
        if(loading){
          history.push('/fund/confirm');
        }
    },[loading, history])
  

    return(
        <div>
        <SideBar />
            <div className="main">
                <div className="contain">

                
                    

                    {/* Fund user design layout */}

                    <div className="fund-card mt-5">

                        <div className="fund-div">

                            <div>
                                <h5 className="text-center" style={{color: '#7031BD', fontWeight: 'bold'}}>Fund User</h5>
                            </div>

                            <Formik
                            onSubmit={(values, {setSubmitting}) =>
                                handleSubmit(values, setSubmitting)
                                }
                            validationSchema={FundWalletValidator}
                            initialValues={{email: "", amount: ""}}
                        >
                            {({
                                handleChange,
                                isSubmitting,
                                handleSubmit,
                                handleBlur,
                                values,
                                touched,
                                errors
                            })=>(
                                <Form onSubmit={handleSubmit}>
                                    {/* email */}
                                        <div className="form-group input-container mt-4">
                                            <i className="mdi mdi-email icon-fund"></i>
                                            <input
                                                className="form-control fund-style"
                                                type="text"
                                                placeholder="Please Enter Users Email Address"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                id="email"
                                                value={values.email}
                                            />
                                            <small style={{ color: "#dc3545" }}>
                                                    {touched.email && errors.email}
                                                </small>
                                        </div>
                                
                                    
                        
                                        {/* amount */}
                                        <div className="form-group input-container mt-4">
                                            <i className="mdi mdi-wallet icon-fund"></i>
                                            <input
                                                className="form-control fund-style"
                                                type="text"
                                                placeholder="Please Enter Amount you want to Fund into Users PurpleVest Wallet"
                                                id="amount"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.amount}
                                               
                                            />
                                              <small style={{ color: "#dc3545" }}>
                                                {touched.amount && errors.amount}
                                           </small>
                                    </div>
                                    
                                       

                                        <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-fund mt-2">
                                             Proceed to Fund Users Wallet
                                        </button>
                                </Form>
                            )}

                        </Formik>
                       

                     </div>

                    </div>
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        loading: state.fund.loading,
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        verify: (creds) => dispatch(VerifyEmail(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fund);