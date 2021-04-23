import SideBar from "../../components/SideBar/SideBar";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import "./admin.css";
import { connect } from "react-redux";
import { AddAdmin } from "../../store/actions/adminActions";
import { RegisterAdminValidator } from "../../validationSchema/authValidator";

const Admin = (props) => {
  const { CreateAdmin } = props;

  const [fund] = useState(1);

  const handleSubmit = async (values, setSubmitting) => {
    await CreateAdmin(values);
  };

  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "New", value: "1" },
    { id: 2, name: "tab-2", text: "View All", value: "2" },
    { id: 3, name: "tab-3", text: "Suspended", value: "3" },
    { id: 4, name: "tab-4", text: "All Activities", value: "4" },
    { id: 5, name: "tab-5", text: "Profile", value: "5" },
  ]);

  const FundToggle = (id) => {
    // route to all admin
    if (id === 2) {
      props.history.push("/admin/all");
    }
    // route to suspended admin
    if (id === 3) {
      props.history.push("/admin/suspended");
    }
    // route to all activities
    if (id === 4) {
      props.history.push("/admin/activities");
    }
    // route to admin profile
    if (id === 5) {
      props.history.push("/admin/profile");
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

          {/* Fund user design layout */}

          <div className="admin-card mt-4 mb-5">
            <div className="admin-div">
              <div>
                <h5
                  className="text-center"
                  style={{ color: "#7031BD", fontWeight: "bold" }}
                >
                  Create New Admin
                </h5>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={RegisterAdminValidator}
                initialValues={{
                  email: "",
                  password: "",
                  firstname: "",
                  lastname: "",
                  phoneNumber: "",
                }}
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
                    {/* firstname */}

                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-account icon-fund"></i>
                      <input
                        className="form-control fund-style"
                        type="text"
                        placeholder="Staff Firstname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="firstname"
                        value={values.firstname}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.firstname && errors.firstname}
                      </small>
                    </div>

                    {/* lastname */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-account icon-fund"></i>
                      <input
                        className="form-control fund-style"
                        type="text"
                        placeholder="Staff Lastname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="lastname"
                        value={values.lastname}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.lastname && errors.lastname}
                      </small>
                    </div>

                    {/* phonenumber */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-phone icon-fund"></i>
                      <input
                        className="form-control fund-style"
                        type="text"
                        placeholder="Staff Phonenumber e.g +234800-000-0000"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="phoneNumber"
                        value={values.phoneNumber}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.phoneNumber && errors.phoneNumber}
                      </small>
                    </div>

                    {/* email address */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-email icon-fund"></i>
                      <input
                        className="form-control fund-style"
                        type="email"
                        placeholder="Staff Email Address"
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
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-lock icon-fund"></i>
                      <input
                        className="form-control fund-style"
                        type="password"
                        placeholder="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="password"
                        value={values.password}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.password && errors.password}
                      </small>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-fund mt-2"
                    >
                      Create New Admin
                    </button>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    CreateAdmin: (value) => dispatch(AddAdmin(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
