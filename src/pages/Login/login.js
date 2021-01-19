import "./login.css";
import {Form, Formik} from 'formik'
import {loginValidator} from '../../validationSchema/authValidator';

function Login(props) {

    


const handleSubmit = (values, setSubmitting) =>{
    alert("Submitted");
    console.log(values)
    setSubmitting(false)
    props.history.push("/dashboard");
  }
  


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
                          

                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-login mt-2">Login</button>
                      </Form>
                  )}

              </Formik>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block">
          <div style={{ position: "relative" }}>
            <img src="img/woman.png" className="img-fluid" alt="login" />

            <div className="whiteLogo">
              <img src="img/logo-white.png" className="img-fluid" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
