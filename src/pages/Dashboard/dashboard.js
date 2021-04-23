import SideBar from "../../components/SideBar/SideBar";
import "./dashboard.css";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Chart from "../../components/Charts/Chart";
import { connect } from "react-redux";
import Moment from "react-moment";
import {
  Payouts,
  Funding,
  DashboardCount,
  ChartRequest,
  CardToggle,
  Investment
} from "../../store/actions/dashboardActions";
import { Link } from "react-router-dom";


const Dashboard = (props) => {
  const {
    getFunding,
    funding,
    fundingSum,
    getDashboardCount,
    count,
    getPayouts,
    getInvestments,
    payout,
    payoutSum,
    isLoading,
    getChartData,
    chartDate,
    cardIndex,
    ToggleCards,
    myInvestment,
    investmentSum,
    todayCount
  } = props;

  

  const [fund, setFund] = useState(1);

  const [pay, setPayout] = useState(1);

  const [invest, setInvest] = useState(1);



  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "Today", value: "1" },
    { id: 2, name: "tab-2", text: "This Week", value: "2" },
    { id: 3, name: "tab-3", text: "Month", value: "3" },
    { id: 4, name: "tab-4", text: "Year", value: "4" },
  ]);

 

  const handleCardToggle = (index) => {
    ToggleCards(index);
    var values;
    switch (index) {
      case 0:
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "funding",
        };
        getChartData(values);
        break;
      case 1:
        // time,user and type is subject to change
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "in_flow",
        };
        getChartData(values);
        break;
      case 2:
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "out_flow",
        };
        getChartData(values);
        break;
      case 3:
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "active_users",
        };
        getChartData(values);
        break;
      case 4:
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "inactive_users",
        };
        getChartData(values);
        break;
      case 5:
        values = {
          time: chartDate,
          user: "INVESTOR",
          type: "suspended_users",
        };
        getChartData(values);
        break;
      default:
        console.log("Today");
    }
  };

  const FundToggle = (id) => {
    setFund(id);
    var values;
    switch (id) {
      case 1:
        values = {
          time: "today",
          user: "INVESTOR",
        };
        getFunding(values);
        break;
      case 2:
        values = {
          time: "week",
          user: "INVESTOR",
        };
        getFunding(values);
        break;
      case 3:
        values = {
          time: "month",
          user: "INVESTOR",
        };
        getFunding(values);
        break;
      case 4:
        values = {
          time: "year",
          user: "INVESTOR",
        };
        getFunding(values);
        break;
      default:
        console.log("Today");
    }
  };

  const PayToggle = (id) => {
    setPayout(id);
    var values;
    switch (id) {
      case 1:
        values = {
          time: "today",
          user: "INVESTOR",
        };
        getPayouts(values);
        break;
      case 2:
        values = {
          time: "week",
          user: "INVESTOR",
        };
        getPayouts(values);
        break;
      case 3:
        values = {
          time: "month",
          user: "INVESTOR",
        };
        getPayouts(values);
        break;
      case 4:
        values = {
          time: "year",
          user: "INVESTOR",
        };
        getPayouts(values);
        break;
      default:
        console.log("Today");
    }
  };

  const InvestToggle = (id) =>{
    setInvest(id)
    var values;
    switch (id) {
      case 1:
        values = {
          time: "today",
        };
        getInvestments(values);
        break;
      case 2:
        values = {
          time: "week",
        };
        getInvestments(values);
        break;
      case 3:
        values = {
          time: "month",
        };
        getInvestments(values);
        break;
      case 4:
        values = {
          time: "year",
        };
        getInvestments(values);
        break;
      default:
        console.log("Today");
    }
  }

  const fundDayToggle = fundData.map((item) => (
    <div
      key={item.id}
      className={fund === item.id ? "filter-tab active-filter" : "filter-tab"}
      onClick={() => FundToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  const payoutDayToggle = fundData.map((item) => (
    <div
      key={item.id}
      className={pay === item.id ? "filter-tab active-filter" : "filter-tab"}
      onClick={() => PayToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  const investmentDayToggle = fundData.map((item) => (
    <div
      key={item.id}
      className={invest === item.id ? "filter-tab active-filter" : "filter-tab"}
      onClick={() => InvestToggle(item.id)}
      style={{ position: "relative" }}
    >
      <div
       style={ { display: item.id === 1 ? 'flex' : 'none' } }
       className="active-count">{todayCount}</div>
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  // Get all funding data
  useEffect(() => {
    const values = {
      time: "today",
      user: "INVESTOR",
    };
    getFunding(values);
    getPayouts(values);
    getDashboardCount(values.user);
    getInvestments(values)
    ToggleCards(0);
  }, [getFunding, getDashboardCount, getPayouts, ToggleCards, getInvestments]);

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "90vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          margin: "0",
          padding: "20px",
        }}
      >
        <div className="preloader">
          <img src="/img/purple_fav.png" alt="PurpleGold Loader" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <SideBar />
      <div className="main">
        <div className="contain">
         
          <div className="row mt-3">
            {count.length ? (
              count.map((card, index) => {
                var name;

                switch (card.name) {
                  case "funding":
                    name = "Funding";
                    break;
                  case "inflow":
                    name = "In-Flow";
                    break;
                  case "outflow":
                    name = "Out-Flow";
                    break;
                  case "activeUsers":
                    name = "Active";
                    break;
                  case "inactiveUsers":
                    name = "Inactive";
                    break;
                  case "suspendedUsers":
                    name = "Suspended";
                    break;
                  default:
                    name = "";
                }

                return (
                  <div key={index} className="col-lg-2">
                    <div
                      onClick={() => handleCardToggle(index)}
                      className={
                        cardIndex === index ? "card-div-active" : "card-div"
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          className="mb-0"
                          style={{
                            color: "#A030A8",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          {name}
                        </p>
                        <p
                          className="mb-0"
                          style={{ color: "#000000", fontSize: 14 }}
                        >
                          Today
                        </p>
                      </div>
                      <div
                        className="mt-4"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h5 className={index === 5 ? "value-suspend" : "value"}>
                          {index < 3 && "N "}
                          <CountUp
                            start={0}
                            end={card.value}
                            duration={2.5}
                            separator=","
                          />
                        </h5>
                        {index === 3 ? (
                          <p
                            className="mb-0"
                            style={{ color: "#000000", fontSize: 14 }}
                          >
                          
                          </p>
                        ) : (
                          ""
                        )}
                        {index === 4 ? (
                          <p
                            className="mb-0"
                            style={{ color: "#000000", fontSize: 14 }}
                          >
                            
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No data</p>
            )}
          </div>

          {/* cards layout */}

          {/* charts display */}

          <div className="mt-4">
            <Chart />
          </div>

          {/* funding display */}

          {/* filter tabs */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* name */}
            <div className="mt-5">
              <h5 style={{ color: "#A030A8", fontWeight: "bold" }}>Funding</h5>
            </div>

            <div className="filter-div mt-5 ml-3">{fundDayToggle}</div>
          </div>

          {/* Funding details */}
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="table-style">
                <div className="myTable mt-4">
                  <div className="myHead">
                    {funding.length ? (
                      funding.map((value, index) => {
                        // picture
                        var imageUrl;
                        switch (value.imageUrl) {
                          case "":
                            imageUrl = "../img/profile.svg";
                            break;
                          case null:
                            imageUrl = "../img/profile.svg";
                            break;
                          case "/profile_pics.jpg":
                            imageUrl = "../img/profile.svg";
                            break;
                          default:
                            imageUrl = value.imageUrl;
                        }

                        // date format
                        var dayShow;
                        switch (fund) {
                          // today
                          case 1:
                            dayShow = (
                              <Moment format="DD/MM/YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 2:
                            // week
                            dayShow = (
                              <Moment format="dddd">{value.createdAt}</Moment>
                            );
                            break;
                          case 3:
                            // month
                            dayShow = (
                              <Moment format="dddd, MMMM Do">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 4:
                            // year
                            dayShow = (
                              <Moment format="MMMM Do, YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          default:
                            dayShow = "";
                        }
                        return (
                          <div key={index} className="myRow">
                            <div className="myColumn">
                              <img
                                className="img-fluid imageStyle"
                                src={imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                {value.firstname} {value.lastname}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                N{" "}
                                {value.amount
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </div>
                            <div className="myColumn">{value.email}</div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {value.createdAt.slice(11, 19)}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {dayShow}
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
                        No data available for display.
                      </p>
                    )}
                  </div>
                </div>
                {/* total count */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold", color: "#000000" }}>
                        Total: N{" "}
                        {fundingSum
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h6>
                    </div>
                    <div className="ml-3">
                      <Link to="/fund/all">
                        <button className="btn btn-view">View All</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* recent investments design */}
          {/* filter tabs */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* name */}
            <div className="mt-5">
              <h5 style={{ color: "#A030A8", fontWeight: "bold" }}>
                Investments
              </h5>
            </div>

            <div className="filter-div mt-5 ml-3">{investmentDayToggle}</div>
          </div>

          {/* Investments details */}
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="table-style">
                <div className="myTable mt-4">
                  <div className="myHead">
                    {myInvestment.length ? (
                      myInvestment.map((value, index) => {
                        // picture
                        var imageUrl;
                        switch (value.imageUrl) {
                          case "":
                            imageUrl = "../img/profile.svg";
                            break;
                          case null:
                            imageUrl = "../img/profile.svg";
                            break;
                          case "/profile_pics.jpg":
                            imageUrl = "../img/profile.svg";
                            break;
                          default:
                            imageUrl = value.imageUrl;
                        }

                        // date format
                        var dayShow;
                        switch (invest) {
                          // today
                          case 1:
                            dayShow = (
                              <Moment format="DD/MM/YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 2:
                            // week
                            dayShow = (
                              <Moment format="dddd">{value.createdAt}</Moment>
                            );
                            break;
                          case 3:
                            // month
                            dayShow = (
                              <Moment format="dddd, MMMM Do">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 4:
                            // year
                            dayShow = (
                              <Moment format="MMMM Do, YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          default:
                            dayShow = "";
                        }
                        return (
                          <div key={index} className="myRow">
                            <div className="myColumn">
                              <img
                                className="img-fluid imageStyle"
                                src={imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                {value.firstname} {value.lastname}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                               {value.planName} ({value.duration} {value.duration > 1 ? "months" : "month"})
                              </p>
                            </div>
                            <div className="myColumn">
                            <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                N{" "}
                                {value.amount
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {value.email}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {dayShow}
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
                        No data available for display.
                      </p>
                    )}
                  </div>
                </div>
                {/* total count */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold", color: "#000000" }}>
                        Total: N{" "}
                        {investmentSum
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h6>
                    </div>
                    <div className="ml-3">
                    <Link to="/investments/all">
                        <button className="btn btn-view">View All</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Up-coming payouts display */}

          {/* funding display */}

          {/* filter tabs */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* name */}
            <div className="mt-5">
              <h5 style={{ color: "#A030A8", fontWeight: "bold" }}>
                Up-Coming Payouts
              </h5>
            </div>

            <div className="filter-div mt-5 ml-3">{payoutDayToggle}</div>
          </div>

          {/* UpcomingPayouts details */}
          <div className="row mt-3 mb-5">
            <div className="col-lg-12">
              <div className="table-style">
                <div className="myTable mt-4">
                  <div className="myHead">
                    {payout.length ? (
                      payout.map((value, index) => {
                        // picture
                        var imageUrl;
                        switch (value.imageUrl) {
                          case "":
                            imageUrl = "../img/profile.svg";
                            break;
                          case null:
                            imageUrl = "../img/profile.svg";
                            break;
                          case "/profile_pics.jpg":
                            imageUrl = "../img/profile.svg";
                            break;
                          default:
                            imageUrl = value.imageUrl;
                        }
                        var dayShow;
                        switch (pay) {
                          // today
                          case 1:
                            dayShow = (
                              <Moment format="DD/MM/YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 2:
                            // week
                            dayShow = (
                              <Moment format="dddd">{value.createdAt}</Moment>
                            );
                            break;
                          case 3:
                            // month
                            dayShow = (
                              <Moment format="dddd, MMMM Do">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          case 4:
                            // year
                            dayShow = (
                              <Moment format="MMMM Do, YYYY">
                                {value.createdAt}
                              </Moment>
                            );
                            break;
                          default:
                            dayShow = "";
                        }

                        return (
                          <div key={index} className="myRow">
                            <div className="myColumn">
                              <img
                                className="img-fluid imageStyle"
                                src={imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                {value.firstname} {value.lastname}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p
                                className="mb-0"
                                style={{ fontWeight: 700, color: "#000000" }}
                              >
                                N{" "}
                                {value.totalReturn
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </div>
                            <div className="myColumn">{value.email}</div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {value.bank} - {value.accountNumber}
                              </p>
                            </div>
                            <div className="myColumn">
                              <p className="mb-0" style={{ color: "#9E079E" }}>
                                {dayShow}
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
                        No data available for display.
                      </p>
                    )}
                  </div>
                </div>
                {/* total count */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold", color: "#000000" }}>
                        Total: N{" "}
                        {payoutSum
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h6>
                    </div>
                    <div className="ml-3">
                      <Link to="/payouts/all">
                        <button className="btn btn-view">View All</button>
                      </Link>
                    </div>
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
    funding: state.dashboard.funding,
    fundingSum: state.dashboard.fundingSum,
    count: state.dashboard.count,
    payout: state.dashboard.payouts,
    payoutSum: state.dashboard.payoutSum,
    myInvestment: state.dashboard.investments,
    investmentSum: state.dashboard.investmentSum,
    todayCount: state.dashboard.todayCount,
    isLoading: state.dashboard.isLoading,
    chartDate: state.dashboard.chartDate,
    cardIndex: state.dashboard.cardIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFunding: (value) => dispatch(Funding(value)),
    getDashboardCount: (value) => dispatch(DashboardCount(value)),
    getPayouts: (value) => dispatch(Payouts(value)),
    getChartData: (value) => dispatch(ChartRequest(value)),
    getInvestments: (value) => dispatch(Investment(value)),
    ToggleCards: (value) => dispatch(CardToggle(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
