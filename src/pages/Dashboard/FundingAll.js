import SideBar from "../../components/SideBar/SideBar";
import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { connect } from "react-redux";
import { AllFunding } from "../../store/actions/dashboardActions";
import Moment from 'react-moment';

const FundingAll = (props) => {
  const { getFunding,  funding, history } = props;

  const [fund, setFund] = useState(1);

  const [fundData] = useState([
    { id: 1, name: "tab-1", text: "Today", value: "1" },
    { id: 2, name: "tab-2", text: "This Week", value: "2" },
    { id: 3, name: "tab-3", text: "Month", value: "3" },
    { id: 4, name: "tab-4", text: "Year", value: "4" },
  ]);

  const GoBack = () =>{
    history.push("/dashboard")
}

  const FundToggle = (id) => {
    setFund(id)
       var values;
       switch(id){
           case 1:
               values = {
                time: 'today',
                user: 'INVESTOR'
             }
             getFunding(values)
               break;
           case 2:
              values = {
                time: 'week',
                user: 'INVESTOR'
             }
            getFunding(values)
            break;
            case 3:
                 values = {
                    time: 'month',
                    user: 'INVESTOR'
                 }
                getFunding(values)
                break;
            case 4:
                 values = {
                    time: 'year',
                    user: 'INVESTOR'
                 }
                getFunding(values)
                break;
            default:
                console.log("Today")
       }
  };

  const DailyDiv = fundData.map((item) => (
    <div
      key={item.id}
      className={fund === item.id ? "filter-tab active-filter" : "filter-tab"}
      onClick={() => FundToggle(item.id)}
    >
      <p className="mb-0">{item.text}</p>
    </div>
  ));

  

  // Get all admins
  useEffect(() => {
    const values = {
        time: 'today',
        user: 'INVESTOR'
    }
    getFunding(values);
  }, [getFunding]);

  return (
    <div>
      <SideBar />
      <div className="main">
        <div className="contain">

          <div
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >

              {/* back button layout */}
              <div>
                <button className="btn btn-back"
                onClick={() => GoBack()}
                >Back</button>
             </div>

               {/* name */}
            <div className="mt-2"
            style={{marginLeft: '40px'}}
            >
              <h5 className="allBorder" style={{ color: "#A030A8", fontWeight: "bold" }}>All Funding</h5>
            </div>

            <div className="chart-filter"
            style={{marginLeft: '40px'}}
            >{DailyDiv}</div>
          </div>

          {/* Data tables to be populated with all admin layout */}
          <div className="admin-head mt-5">
            <div className="myTable" style={{ marginBottom: 0 }}>
              <div className="myHead">
                {/*heading row */}
                <div
                  className="myRow"
                  style={{ background: "rgba(226, 223, 242, 0.82)" }}
                >
                  <div className="withdrawColumn"></div>
                  <div className="withdrawColumn">Name</div>
                  <div className="withdrawColumn">Amount</div>
                  <div className="withdrawColumn">Email</div>
                  <div className="withdrawColumn">Time</div>
                  <div className="withdrawColumn">Date</div>
                </div>
                {/* actual data row */}

                {funding.length ? (
                  funding.map((value, index) => {
                    
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

                     // date format
                     var dayShow
                     switch(fund){
                         // today
                         case 1:
                             dayShow = 
                             <Moment format="DD/MM/YYYY">
                                 {value.createdAt}
                                  </Moment>
                             break;
                         case 2:
                             // week
                             dayShow = 
                             <Moment format="dddd">
                                 {value.createdAt}
                                  </Moment>
                             break;
                         case 3:
                             // month
                             dayShow = 
                                  <Moment format="dddd, MMMM Do">
                                 {value.createdAt}
                                     </Moment>
                             break;
                         case 4:
                             // year
                             dayShow = 
                             <Moment format="MMMM Do, YYYY">
                                 {value.createdAt}
                                  </Moment>
                             break;
                         default:
                             dayShow = ""
                     }

                    return (
                      <div
                        key={index}
                        className="myRow"
                        style={{ background: "#fff" }}
                      >
                        <div className="myColumn">
                        <img className="img-fluid imageStyle" src={imageUrl} alt="" />
                        </div>
                        <div className="myColumn">
                          <p
                            className="mb-0"
                            style={{ fontWeight: 700, color: "#000000" }}
                          >
                            {value.firstname} {value.lastname}
                          </p>
                        </div>
                        <div className="myColumn">{value.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className="myColumn">{value.email}</div>
                        <div className="myColumn">
                          <p className="mb-0" style={{ color: "#9E079E" }}>
                          {value.createdAt.slice(11, 19)}
                          </p>
                        </div>
                        <div className="myColumn">
                            <p className="mb-0" style={{color: '#9E079E'}}>
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
                  
                  </p>
                )}
              </div>
            </div>

             {/* total count */}
          </div>

          <div className="text-center">
                  {funding.length ? "" :  <p style={{fontStyle: 'italic'}}>No data available for display</p>} 
                  </div>
                  

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    funding: state.dashboard.funding,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFunding: (value) => dispatch(AllFunding(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FundingAll);
