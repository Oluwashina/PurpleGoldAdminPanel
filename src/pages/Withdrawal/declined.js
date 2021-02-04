import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "./withdrawal.css";
import { connect } from "react-redux";
import Moment from 'react-moment';
import { DeclinedRequest, WithdrawCount } from "../../store/actions/withdrawalActions";

const Declined = (props) => {
  const { getDeclined, request, getWithdrawCount, pendingCount, processingCount, paidCount, declinedCount } = props;

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

  const handlePaid = () => {
    props.history.push("/withdrawal/paid");
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
          status: "DECLINED",
        };
        getDeclined(values);
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
          status: "DECLINED",
        };
        getDeclined(values);
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
          status: "DECLINED",
        };
        getDeclined(values);
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
          status: "DECLINED",
        };
        getDeclined(values);
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

  // Get all declined data
  useEffect(() => {
    const values = {
      time: "today",
      user: "INVESTOR",
      status: "DECLINED",
    };
    getDeclined(values);
    getWithdrawCount({
      time: "today",
      user: "INVESTOR",
     }
    )
  }, [getDeclined, getWithdrawCount]);

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
                {pendingCount}
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
            <div className="active-declined">
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
          <div className="declined-head mt-4">
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
                            <img className="img-fluid imageStyle" src={imageUrl} alt="" />
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
                   
                  </p>
                )}

              
              </div>
            </div>
          </div>

          <div className="text-center">
                  {request.length ? "" :  <p style={{fontStyle: 'italic'}}>No declined request available for display</p>} 
                  </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    request: state.withdraw.declinedRequest,
    pendingCount:state.withdraw.pendingCount,
    processingCount: state.withdraw.processingCount,
    paidCount: state.withdraw.paidCount,
    declinedCount: state.withdraw.declinedCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDeclined: (value) => dispatch(DeclinedRequest(value)),
    getWithdrawCount: (value) => dispatch(WithdrawCount(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Declined);
