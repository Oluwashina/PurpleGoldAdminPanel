import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "./withdrawal.css";
import { connect } from "react-redux";
import { PaidRequest } from "../../store/actions/withdrawalActions";

const Paid = (props) => {
  const { getPaid, request } = props;

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleRequest = () => {
    props.history.push("/withdrawal");
  };

  const handleProcessing = () => {
    props.history.push("/withdrawal/processing");
  };

  const handleDeclined = () => {
    props.history.push("/withdrawal/declined");
  };

  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "Today", value: "1" },
    { id: 2, name: "tab-2", text: "This Week", value: "2" },
    { id: 3, name: "tab-3", text: "Month", value: "3" },
    { id: 4, name: "tab-4", text: "Year", value: "4" },
  ]);

  const [day, setDay] = useState(1);

  const DailyToggle = (id) => {
    setDay(id);
    var values;
    switch (id) {
      case 1:
        values = {
          time: "today",
          user: "INVESTOR",
          status: "PAID",
        };
        getPaid(values);
        break;
      case 2:
        values = {
          time: "week",
          user: "INVESTOR",
          status: "PAID",
        };
        getPaid(values);
        break;
      case 3:
        values = {
          time: "month",
          user: "INVESTOR",
          status: "PAID",
        };
        getPaid(values);
        break;
      case 4:
        values = {
          time: "year",
          user: "INVESTOR",
          status: "PAID",
        };
        getPaid(values);
        break;
      default:
        console.log("Today");
    }
  };

  const dailyDiv = fundData.map((item) => (
    <div
      key={item.id}
      className={day === item.id ? "filter-tab active-filter" : "filter-tab"}
      onClick={() => DailyToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  // Get all withdraw data
  useEffect(() => {
    const values = {
      time: "today",
      user: "INVESTOR",
      status: "PAID",
    };
    getPaid(values);
  }, [getPaid]);

  return (
    <div style={{ backgroundColor: "#f5f6f8" }}>
      <SideBar />
      <div className="main">
        <div className="contain">
          {/* swicth between the users and markteters tab */}
          <div className="mt-3 title-div" style={{ display: "flex" }}>
            <div
              onClick={handleToggle}
              className={
                isActive ? "title-heading" : "title-heading active-div"
              }
              style={{ flex: 1 }}
            >
              <h5 className="text-center mb-0">User</h5>
            </div>
            <div
              onClick={handleToggle}
              className={
                isActive ? "title-heading marketers-div" : "title-heading"
              }
              style={{ flex: 1 }}
            >
              <h5 className="text-center mb-0">Marketer</h5>
            </div>
          </div>

          {/* Requests tab */}
          <div className="request-div mx-auto mt-5">
            <div
              className="newRequest"
              style={{ position: "relative" }}
              onClick={handleRequest}
            >
              <div className="active-count" style={{ color: "white" }}>
                6
              </div>
              <p className="mb-0">New Request</p>
            </div>
            <div className="processing" onClick={handleProcessing}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="mb-0"
                  style={{
                    background: "#E5E3F3",
                    borderRadius: 10,
                    padding: "2px 10px",
                    color: "#AAAAAA",
                    fontSize: 12,
                  }}
                >
                  89
                </p>
                <p className="mb-0 ml-2">Processing</p>
              </div>
            </div>
            <div className="active-paid">
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="mb-0"
                  style={{
                    background: "#ff0000",
                    borderRadius: 10,
                    padding: "2px 10px",
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  265
                </p>
                <p className="mb-0 ml-2">Paid</p>
              </div>
            </div>
            <div className="declined" onClick={handleDeclined}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="mb-0"
                  style={{
                    background: "#E5E3F3",
                    borderRadius: 10,
                    padding: "2px 10px",
                    color: "#AAAAAA",
                    fontSize: 12,
                  }}
                >
                  37
                </p>
                <p className="mb-0 ml-2">Declined</p>
              </div>
            </div>
          </div>

          {/* requests duration filter*/}
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="filter-div mt-4">{dailyDiv}</div>
          </div>

          {/* Data tables to be populated with the withdrawal request layout */}
          <div className="paid-head mt-4">
            <div className="myTable" style={{ marginBottom: 0 }}>
              <div className="myHead">
                {/* first row */}
                <div
                  className="myRow"
                  style={{ background: "rgba(226, 223, 242, 0.82)" }}
                >
                  <div className="withdrawColumn"></div>
                  <div className="withdrawColumn">Name</div>
                  <div className="withdrawColumn">Amount</div>
                  <div className="withdrawColumn">Email</div>
                  <div className="withdrawColumn">Date</div>
                  <div className="withdrawColumn">Status</div>
                </div>

                {request.length ? (
                  request.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="myRow"
                        style={{ background: "#fff" }}
                      >
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <img
                            className="img-fluid"
                            src="/img/avatar.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <p
                            className="mb-0"
                            style={{ fontWeight: 700, color: "#000000" }}
                          >
                            {value.firstname} {value.lastname}
                          </p>
                        </div>
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <p
                            className="mb-0"
                            style={{ fontWeight: 700, color: "#000000" }}
                          >
                            N 255,198.00
                          </p>
                        </div>
                        <div className="adminColumn">{value.email}</div>
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <p className="mb-0" style={{ color: "#9E079E" }}>
                            {value.createdAt}
                          </p>
                        </div>
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <p
                            className="mb-0"
                            style={{
                              color: "#9E079E",
                              fontStyle: "italic",
                              textTransform: "lowercase",
                            }}
                          >
                            {value.status}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p
                    className="text-center mt-3"
                    style={{ fontStyle: "italic" }}
                  >
                    No withdrawal request available for display!
                  </p>
                )}

                {/* fourth row */}
                <div className="myRow" style={{ background: "#fff" }}>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    <img className="img-fluid" src="/img/avatar.png" alt="" />
                  </div>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    <p
                      className="mb-0"
                      style={{ fontWeight: 700, color: "#000000" }}
                    >
                      Femi Emmanuel
                    </p>
                  </div>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    <p
                      className="mb-0"
                      style={{ fontWeight: 700, color: "#000000" }}
                    >
                      N 255,198.00
                    </p>
                  </div>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    femiemmanuel@gmail.com
                  </div>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    <p className="mb-0" style={{ color: "#9E079E" }}>
                      25/01/2020
                    </p>
                  </div>
                  <div className="adminColumn" style={{ padding: "18px 20px" }}>
                    <p
                      className="mb-0"
                      style={{ color: "#9E079E", fontStyle: "italic" }}
                    >
                      paid
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    request: state.withdraw.paidRequest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPaid: (value) => dispatch(PaidRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paid);
