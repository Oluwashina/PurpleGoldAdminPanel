import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "./users.css";
import { getAllUsers, UsersCount } from "../../store/actions/userActions";
import { connect } from "react-redux";

function Users(props) {
  const { getUsers,getCount, users, count } = props;

  const [fund, setFund] = useState(0);


  const FundToggle = (id) => {
    setFund(id);
    var values;
       switch(id){
           case 0:
             values = {
                filter: "all",
              };
              getUsers(values);
               break;
           case 1:
             values = {
                filter: "active",
              };
              getUsers(values);
            break;
            case 2:
                 values = {
                    filter: "inactive",
                  };
                  getUsers(values);
                break;
            case 3:
                 values = {
                    filter: "suspended",
                  };
                  getUsers(values);
                break;
            default:
                console.log("Today")
       }
  };

  const funding = count.map((item, index) => (
    <div
      key={index}
      style={{ position: "relative" }}
      className={fund === index ? "user-tab user-active" : "user-tab"}
      onClick={() => FundToggle(index)}
    >
      <div className={fund === index ? "count-active" : "count"}>
        {item.value}
      </div>
      <p className="mb-0" style={{textTransform: 'capitalize'}}>{item.name}</p>
    </div>
  ));

  // Get all users data
  useEffect(() => {
    const values = {
      filter: "all",
    };
    getUsers(values);
    getCount();
  }, [getUsers, getCount]);

  return (
    <div style={{ backgroundColor: "#f5f6f8", }}>
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

          {/* Data tables to be populated with all admin layout */}
          <div className="admin-head mt-5 mb-5">
            <div className="myTable" style={{ marginBottom: 0 }}>
              <div className="myHead">
                {/*heading row */}
                <div className="myRow" style={{ background: "#FBFBFB" }}>
                  <div className="withdrawColumn"></div>
                  <div className="withdrawColumn">
                    <div style={{ display: "flex" }}>
                      <img
                        alt=""
                        src="/img/investments.png"
                        className="img-fluid"
                      />
                      <p className="mb-0 ml-2">Total Active Investments</p>
                    </div>
                  </div>

                  <div className="withdrawColumn">
                    <div style={{ display: "flex" }}>
                      <img
                        alt=""
                        src="/img/withdrawn.png"
                        className="img-fluid"
                      />
                      <p className="mb-0 ml-2">Total Withdrawn</p>
                    </div>
                  </div>
                  <div className="withdrawColumn">
                    <div style={{ display: "flex" }}>
                      <img
                        alt=""
                        src="/img/balance.png"
                        className="img-fluid"
                      />
                      <p className="mb-0 ml-2">Balance</p>
                    </div>
                  </div>
                  <div className="withdrawColumn"></div>
                </div>

                {/* sample test */}

                {users.length ? (
                  users.map((user, index) => {
                    return (
                      <div
                        key={index}
                        className="myRow"
                        style={{ background: "#fff" }}
                      >
                        <div className="adminColumn">
                          <div style={{ display: "flex" }}>
                            <div>
                              <img
                                src="/img/user.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="ml-2">
                              <p
                                className="mb-0"
                                style={{
                                  color: "#7A50B9",
                                  fontWeight: 600,
                                  fontSize: 15,
                                }}
                              >
                                {user.firstname} {user.lastname}
                              </p>
                              <p
                                className="mb-0"
                                style={{
                                  color: "#9E079E",
                                  fontWeight: 600,
                                  fontSize: 14,
                                }}
                              >
                                Joined: {user.createdAt}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* total active investments */}
                        <div className="adminColumn">
                          <div
                            className="invest-div"
                            style={{ display: "flex" }}
                          >
                            <img
                              alt=""
                              src="/img/investments.png"
                              className="img-fluid"
                            />
                            <p
                              className="mb-0 ml-2"
                              style={{ color: "#A030A8", fontWeight: "bold" }}
                            >
                              N{" "}
                              {user.totalAmountInvested
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                          </div>
                        </div>
                        {/* total amount withdrawn */}
                        <div className="adminColumn">
                          <div
                            className="withdrawn-div"
                            style={{ display: "flex" }}
                          >
                            <img
                              alt=""
                              src="/img/withdrawn.png"
                              className="img-fluid"
                            />
                            <p
                              className="mb-0 ml-2"
                              style={{ color: "#FE20BE", fontWeight: "bold" }}
                            >
                              N{" "}
                              {user.totalWithdrawn
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                          </div>
                        </div>

                        {/* balance */}
                        <div className="adminColumn">
                          <div
                            className="balance-div"
                            style={{ display: "flex" }}
                          >
                            <img
                              alt=""
                              src="/img/balance.png"
                              className="img-fluid"
                            />
                            <p
                              className="mb-0 ml-2"
                              style={{ color: "#FF3535", fontWeight: "bold" }}
                            >
                              N{" "}
                              {user.walletBalance.replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                              )}
                            </p>
                          </div>
                        </div>
                        {/* suspend button or view more */}
                        <div className="adminColumn">
                          <button className="btn btn-suspend">
                            <i
                              className="mdi mdi-close"
                              style={{ fontSize: 20 }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p
                    className="text-center mt-3"
                    style={{ fontStyle: "italic" }}
                  >
                    No user available for display!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    count: state.user.usersCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (value) => dispatch(getAllUsers(value)),
    getCount: () => dispatch(UsersCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
