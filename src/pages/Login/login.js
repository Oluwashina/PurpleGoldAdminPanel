import "./login.css";
import {Form, Formik} from 'formik'
import React,{useEffect} from 'react'
import {connect } from 'react-redux'
import { loginValidator } from "../../validationSchema/authValidator";
import { loginUser } from "../../store/actions/authActions";
import {Link} from 'react-router-dom'


function Login({isAuthenticated, history, signIn}) {


const handleSubmit = async (values, setSubmitting) =>{
    await signIn(values);
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

              <div className="mt-5">
                <h4 style={{ lineHeight: "35px", fontWeight: 500 }}>
                  Welcome to <br />
                  <span style={{ fontWeight: 700 }}>PurpleGold</span> Admin
                </h4>
              </div>

              <div className="mt-5">
                <h4 style={{ color: " #9E079E", fontWeight: 600 }}>LogIn</h4>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={loginValidator}
                initialValues={{email: "", password: ""}}
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
                         
                           
               
                            {/* password */}
                        
                            <div className="form-group input-container mt-3">
                            <i className="mdi mdi-lock icon"></i>
                            <input
                                className="form-control input-style"
                                type="password"
                                placeholder="Password"
                                    id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.password && errors.password}
                           </small>
                            </div>
                          
                            <Link to="/forgotpassword" style={{textDecoration: 'none', color: '#000000'}}>
                              <p style={{fontWeight: 600,fontStyle: 'italic'}}>Forgot Password?</p>
                            </Link>
                         
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-login">Login</button>
                      </Form>
                  )}

              </Formik>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block">
          <div style={{ position: "relative" }}>
            <img src="img/woman.png" className="img-fluid"
            style={{width: 'calc(100vw - 385px)',
                  height: '100%'
              }}
             alt="login" />

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
      signIn: (creds) => dispatch(loginUser(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
