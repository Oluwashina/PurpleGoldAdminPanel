import "./login.css";
import {Form, Formik} from 'formik'
import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { forgotPasswordValidator } from "../../validationSchema/authValidator";
import { forgotPassword } from "../../store/actions/authActions";



function Forgot({isAuthenticated, history, handlePassword}) {


const handleSubmit = async (values, setSubmitting) =>{
    await handlePassword(values);
  }

  
  useEffect(() =>{
      if(isAuthenticated){
        history.push('/dashboard');
      }
  },[isAuthenticated, history])



  return (
    <div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <div className="container">
            <div className="login-div">
              <img src="img/logo.png" className="img-fluid" alt="logo" />


              <div style={{marginTop: '150px'}}>
                <h4 style={{ color: " #9E079E", fontWeight: 600 }}>Forgot Password?</h4>
                <p className="mt-2" style={{fontStyle: "italic", fontWeight: 600}}>Please type in your e-mail Address</p>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={forgotPasswordValidator}
                initialValues={{email: ""}}
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
                                <i className="mdi mdi-email icon"></i>
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Email Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="email"
                                    value={values.email}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.email && errors.email}
                                    </small>
                            </div>
                         
                    
                          
                         
                            <button 
                            type="submit"
                        
                            disabled={isSubmitting}
                            className="btn btn-login mt-2">Submit</button>
                      </Form>
                  )}

              </Formik>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block">
          <div style={{ position: "relative" }}>
            <img src="img/forgotpic.png" className="img-fluid" alt="login" />

            <div className="whiteLogo">
              <img src="img/logo-white.png" className="img-fluid" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePassword: (creds) => dispatch(forgotPassword(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
