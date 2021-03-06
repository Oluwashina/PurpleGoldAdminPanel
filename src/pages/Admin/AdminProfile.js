import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useRef, useEffect } from "react";
import { Form, Formik } from "formik";
// import {Redirect} from 'react-router-dom';
import "./admin.css";
import { connect } from "react-redux";
import { UploadPhoto, ChangePassword } from "../../store/actions/authActions";
import { ChangePasswordValidator } from "../../validationSchema/authValidator";

const AdminProfile = (props) => {

  const { firstname, lastname, loading, email, history, saveProfile, image, handlePicture, photoloader} = props

  const [fund] = useState(5);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordNew, setPasswordNew] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  // const [fileName, setfileName] = useState("");

  const fileRef = useRef(null)

  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "New", value: "1" },
    { id: 2, name: "tab-2", text: "View All", value: "2" },
    { id: 3, name: "tab-3", text: "Suspended", value: "3" },
    { id: 4, name: "tab-4", text: "All Activities", value: "4" },
    { id: 5, name: "tab-5", text: "Profile", value: "5" },
  ]);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePasswordNew = () => {
    setPasswordNew(passwordNew ? false : true);
  };

  const togglePasswordConfirm = () => {
    setPasswordConfirm(passwordConfirm ? false : true);
  };

  const handleFile = () =>{
    var file = fileRef.current.files[0]
    // setfileName(fileRef.current.files[0].name)
    handlePicture(file)

  }
 
  const handleSubmit = async (values, setSubmitting) => {
    await saveProfile(values);
    // history.push("/");
  };



  const FundToggle = (id) => {
    // route to admin
    if (id === 1) {
      history.push("/admin");
    }
    // route to all admin
    if (id === 2) {
      history.push("/admin/all");
    }
    // route to all activities
    if (id === 3) {
      history.push("/admin/suspended");
    }
    // route to activities
    if (id === 4) {
      history.push("/admin/activities");
    }
  };

  const funding = fundData.map((item) => (
    <div
      key={item.id}
      className={fund === item.id ? "filter-tab active-admin" : "filter-tab"}
      onClick={() => FundToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));


  // route to login after successful changed password
  useEffect(() =>{
    if(loading){
      history.push("/")
    }
},[loading, history])

  return (
    <div>
      <SideBar />
      <div className="main">
        <div className="contain">
          <div
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="chart-filter">{funding}</div>
          </div>

          {/* profile div */}
          <div className="mt-4" style={{ width: "50%", margin: "auto" }}>
            <div
              style={{
                borderRadius: "5px",
                background: "rgba(226, 223, 242, 0.82)",
                height: "41px",
              }}
            ></div>

            <div style={{ padding: "30px 60px", background: "white" }}>
              <div className="text-center ">
                <img
                  // src="/img/profile.png"
                  src={ image ? image : `../img/profile.svg`}
                  className="profileImage"
                  alt="profile-pix"
                />
              </div>

              {/* <div className="text-center mt-3">
                <button className="btn btn-paid" style={{ fontWeight: "bold" }}>
                  <i className="mdi mdi-camera-outline mr-2"></i>Upload Photo
                </button>
              </div> */}

              <div className="text-center mt-3">
                <label className={photoloader ? "file disabled" : "file"}
                ><i className="mdi mdi-camera-outline mr-1"></i> Upload Photo
                <input type="file" size="60"
                    ref={fileRef}
                   onChange={() => handleFile()}
                 />
                </label> 
              </div>
              

              <div className="text-center mt-3">
                <div
                  style={{
                    background: "#F5F0FC",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  <p
                    className="mb-0"
                    style={{ color: "rgba(158, 7, 158, 0.51)" }}
                  >
                    {firstname} {lastname}
                  </p>
                </div>
              </div>

              <div className="text-center mt-3">
                <div
                  style={{
                    background: "#F5F0FC",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    width: "70%",
                    margin: "auto",
                  }}
                >
                  <p
                    className="mb-0"
                    style={{ color: "rgba(158, 7, 158, 0.51)" }}
                  >
                    {email}
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="mb-0">Change Password ?</p>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={ChangePasswordValidator}
                initialValues={{ newpassword: "", password: "", confirm_password: "" }}
              >
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* current password */}
                    <div style={{ width: "60%", margin: "auto" }}>
                      <div
                        className="form-group mt-2"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          placeholder="Current Password"
                          style={{ color: "black" }}
                          className="form-control password-style"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="password"
                          value={values.password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordShown ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordVisiblity}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.password && errors.password}
                        </small>
                      </div>
                    </div>

                    {/* new password */}
                    <div style={{ width: "60%", margin: "auto" }}>
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordNew ? "text" : "password"}
                          className="form-control password-style"
                          name="newpassword"
                          placeholder="New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="newpassword"
                          value={values.newpassword}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordNew ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordNew}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.newpassword && errors.newpassword}
                        </small>
                      </div>
                    </div>

                    {/* confirm password */}
                    <div style={{ width: "60%", margin: "auto" }}>
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordConfirm ? "text" : "password"}
                          className="form-control password-style"
                          name="confirm_password"
                          placeholder="Confirm New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="confirm_password"
                          value={values.confirm_password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordConfirm
                                ? "mdi mdi-eye"
                                : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordConfirm}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.confirm_password && errors.confirm_password}
                        </small>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button 
                       type="submit"
                      disabled={isSubmitting} className="btn btn-save">
                        Save Password
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    email: state.auth.email,
    image: state.auth.imageUrl,
    loading: state.auth.loading,
    photoloader: state.auth.photoloader
  };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        saveProfile: (values) => dispatch(ChangePassword(values)),
        handlePicture: (values) => dispatch(UploadPhoto(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
