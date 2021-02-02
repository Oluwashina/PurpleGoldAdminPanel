import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "./withdrawal.css";
import { connect } from "react-redux";
import Moment from 'react-moment';
import { NewRequest, WithdrawCount, ProcessWithdrawal } from "../../store/actions/withdrawalActions";

const Withdrawal = (props) => {
  const { getWithdraw, request, getWithdrawCount, pendingCount, processingCount, paidCount, declinedCount, ProcessPayment, processloader, success } = props;

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleProcessing = () => {
    props.history.push("/withdrawal/processing");
  };

  const handlePaid = () => {
    props.history.push("/withdrawal/paid");
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
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "today",
          user: "INVESTOR",
         }
        )
        break;
      case 2:
        values = {
          time: "week",
          user: "INVESTOR",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "week",
          user: "INVESTOR",
         }
        )
        break;
      case 3:
        values = {
          time: "month",
          user: "INVESTOR",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "month",
          user: "INVESTOR",
         }
        )
        break;
      case 4:
        values = {
          time: "year",
          user: "INVESTOR",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "year",
          user: "INVESTOR",
         }
        )
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

  // process payment functionlity
  const ProcessPay = (requestId) =>{
    const values = {
      status: "PROCESSING",
      withdrawalId: requestId
    };
    ProcessPayment(values);
  }

  // Get all withdraw data
  useEffect(() => {
    const values = {
      time: "today",
      user: "INVESTOR",
      status: "PENDING",
    };
    getWithdraw(values);
    getWithdrawCount({
        time: "today",
        user: "INVESTOR",
       }
      )
  }, [getWithdraw, getWithdrawCount]);

  // make the call again after the process button is done
  useEffect(() => {
    const values = {
      time: "today",
      user: "INVESTOR",
      status: "PENDING",
    };
    if(success){
      getWithdraw(values);
      getWithdrawCount({
          time: "today",
          user: "INVESTOR",
         }
        )
    }
  }, [getWithdraw, getWithdrawCount, success]);



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
            <div className="active-request" style={{ position: "relative" }}>
              <div className="active-count">{pendingCount}</div>
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
                  {processingCount}
                </p>
                <p className="mb-0 ml-2">Processing</p>
              </div>
            </div>
            <div className="paid" onClick={handlePaid}>
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
                  {paidCount}
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
                  {declinedCount}
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
                  <div className="withdrawColumn"></div>
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
                            N {value.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </p>
                        </div>
                        <div className="adminColumn">{value.email}</div>
                        <div
                          className="adminColumn"
                          style={{ padding: "18px 20px" }}
                        >
                          <p className="mb-0" style={{ color: "#9E079E" }}>
                            <Moment format="DD/MM/YYYY">
                                {value.createdAt}
                                </Moment>
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
                            {value.status}...
                          </p>
                        </div>
                        <div
                          className="myColumn"
                          style={{ alignItems: "center" }}
                        >
                          <button className="btn btn-view"
                            onClick={() => ProcessPay(value.requestId)}
                            disabled={processloader.indexOf(value.requestId)!==-1}
                          >Process</button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>
                  
                  </p>
                )}
              </div>
            </div>
          </div>
                  
                  <div className="text-center">
                  {request.length ? "" :  <p style={{fontStyle: 'italic'}}>No new request available for display</p>} 
                  </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    request: state.withdraw.request,
    count: state.withdraw.requestCount,
    pendingCount:state.withdraw.pendingCount,
    processingCount: state.withdraw.processingCount,
    paidCount: state.withdraw.paidCount,
    declinedCount: state.withdraw.declinedCount,
    processloader: state.withdraw.processloader,
    success: state.withdraw.success
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWithdraw: (value) => dispatch(NewRequest(value)),
    getWithdrawCount: (value) => dispatch(WithdrawCount(value)),
    ProcessPayment: (value) => dispatch(ProcessWithdrawal(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
