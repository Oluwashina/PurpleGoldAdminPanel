import SideBar from "../../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "../withdrawal.css";
import { connect } from "react-redux";
import Moment from 'react-moment';
import { NewRequest, WithdrawCount, ProcessWithdrawal } from "../../../store/actions/withdrawalActions";

const MarketersNewRequest = (props) => {
  const { getWithdraw, request, getWithdrawCount, pendingCount, processingCount, paidCount, declinedCount, ProcessPayment, processloader, success } = props;

 

  const handleToggle = (id) => {
    switch(id){
      case 1:
        setUser(1)
        setStyle('title-heading active-div')
        props.history.push('/withdrawal')
        break;
      case 2:
        setUser(2)
        setStyle('title-heading marketers-div')
        props.history.push('/withdrawal/marketers')
        break;
      default:
        break;
    }
  };

  const handleProcessing = () => {
    props.history.push("/withdrawal/marketers/processing");
  };

  const handlePaid = () => {
    props.history.push("/withdrawal/marketers/paid");
  };

  const handleDeclined = () => {
    props.history.push("/withdrawal/marketers/declined");
  };

  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "Today", value: "1" },
    { id: 2, name: "tab-2", text: "This Week", value: "2" },
    { id: 3, name: "tab-3", text: "Month", value: "3" },
    { id: 4, name: "tab-4", text: "Year", value: "4" },
  ]);

  const [user, setUser] = useState(2);

  const [style, setStyle] = useState('title-heading marketers-div')

  const [userData] = useState([
    { id: 1, name: "tab-1", text: "User"},
    { id: 2, name: "tab-2", text: "Marketer"}
  ])

  const UserToggle = userData.map((item) => (
       <div
        key={item.id}
        onClick={() => handleToggle(item.id)}
        className={user === item.id ? style : "title-heading"}
        >
        <h5 className="text-center mb-0">{item.text}</h5>
      </div>
  ));

  const [day, setDay] = useState(1);

  const DailyToggle = (id) => {
    setDay(id);
    var values;
    switch (id) {
      case 1:
        values = {
          time: "today",
          user: "MARKETER",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "today",
          user: "MARKETER",
         }
        )
        break;
      case 2:
        values = {
          time: "week",
          user: "MARKETER",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "week",
          user: "MARKETER",
         }
        )
        break;
      case 3:
        values = {
          time: "month",
          user: "MARKETER",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "month",
          user: "MARKETER",
         }
        )
        break;
      case 4:
        values = {
          time: "year",
          user: "MARKETER",
          status: "PENDING",
        };
        getWithdraw(values);
        getWithdrawCount({
          time: "year",
          user: "MARKETER",
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
      user: "MARKETER",
      status: "PENDING",
    };
    getWithdraw(values);
    getWithdrawCount({
        time: "today",
        user: "MARKETER",
       }
      )
  }, [getWithdraw, getWithdrawCount]);

  // make the call again after the process button is done
  useEffect(() => {
    var time;
    switch(day){
      case 1:
         time = "today"
        break;
      case 2:
       time = "week"
        break;
      case 3:
        time = "month"
        break;
      case 4:
        time = "year"
        break;
      default:
        console.log("Today")
    }
    const values = {
      time: time,
      user: "MARKETER",
      status: "PENDING",
    };
    if(success){
      getWithdraw(values);
      getWithdrawCount({
          time: time,
          user: "MARKETER",
         }
        )
    }
  }, [getWithdraw, getWithdrawCount, success, day]);



  return (
    <div>
      <SideBar />
      <div className="main">
        <div className="contain">
          {/* swicth between the users and markteters tab */}
          <div className="mt-3 title-div" style={{ display: "flex" }}>
             {UserToggle}
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
                  <div className="withdrawColumn">Account Details</div>
                  <div className="withdrawColumn">Date</div>
                  <div className="withdrawColumn">Status</div>
                  <div className="withdrawColumn"></div>
                </div>

                {request.length ? (
                  request.map((value, index) => {

                    // picture
                    var imageUrl;
                    switch(value.imageUrl){
                        case "":
                        imageUrl = "../img/profile.svg"  
                        break;
                        case null:
                            imageUrl = "../img/profile.svg" 
                        break;
                        case "/profile_pics.jpg":
                            imageUrl = "../img/profile.svg" 
                        break;
                        default:
                        imageUrl = value.imageUrl 
                    }


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
                          <img className="img-fluid withdraw-image" src={imageUrl} alt="" />
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
                        <div className="adminColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {value.bank} - {value.accountNumber}
                              </p>
                          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketersNewRequest);
