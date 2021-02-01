import SideBar from "../../components/SideBar/SideBar";
import React, {useState} from 'react'


const UsersDetails = (props) => {

    const {history} = props

    const [day, setDay] = useState(1);

    const [fundData] = useState([
        { id: 1, name: "tab-1", text: "Today", value: "1" },
        { id: 2, name: "tab-2", text: "This Week", value: "2" },
        { id: 3, name: "tab-3", text: "Month", value: "3" },
        { id: 4, name: "tab-4", text: "Year", value: "4" },
      ]);
      
    const dailyDiv = fundData.map((item) => (
        <div
          key={item.id}
          className={day === item.id ? "filter-tab active-filter" : "filter-tab"}
          onClick={() => DailyToggle(item.id)}
        >
          <p className="mb-0">{item.text}</p>
        </div>
      ));

      const DailyToggle = (id) => {
        setDay(id);
      }

      const GoBack = () =>{
          history.push("/users")
      }


    return (  
        <div style={{ backgroundColor: "#f5f6f8", }}>
             <SideBar />
          <div className="main">
              <div className="contain">


                    <div className="row mt-5">
                        {/* back button layout */}
                        <div className="col-lg-2">
                            <button className="btn btn-back"
                            onClick={() => GoBack()}
                            >Go Back</button>
                        </div>
                        
                        {/* filter design and suspend layout */}
                        <div className="col-lg-5">
                            
                              {/* requests duration filter*/}
                                <div
                                    className=""
                                    style={{ display: "flex", justifyContent: "center" }}
                                >
                                    <div className="filter-div">{dailyDiv}</div>
                                </div>

                        </div>

                        {/* suspend action */}
                        <div className="col-lg-2">
                        <button className="btn btn-suspend"
                            >Suspend</button>
                        </div>

                        {/* when user joined and avatar */}
                        <div className="col-lg-3">
                        <div style={{ display: "flex" }}>
                            <div>
                              <img
                                src="/img/user.png"
                                className="img-fluid"
                                alt=""
                                
                              />
                            </div>
                            <div className="ml-3">
                              <p
                                className="mb-0"
                                style={{
                                  color: "#7A50B9",
                                  fontWeight: 600,
                                  fontSize: 15,
                                }}
                              >
                               Akinyemi Ogungbaro
                              </p>
                              <p
                                className="mb-0"
                                style={{
                                  color: "#9E079E",
                                  fontWeight: 600,
                                  fontSize: 14,
                                }}
                              >
                                Joined: Jan 05 2021
                              </p>
                            </div>
                          </div>
                        </div>

                    </div>

                    {/* investment, withdrawal and balance table for all users */}
                    <div className="row mt-5">
                        {/* investments */}
                        <div className="col-lg-5">
                            <div className="investment">
                                <div>
                                    <div style={{ display: "flex" }}>
                                    <img
                                        alt=""
                                        src="/img/Total_Investment.svg"
                                        className="img-fluid"
                                    />
                                    <p className="mb-0 ml-2" style={{color: '#333334', fontWeight: 600}}>Investments</p>
                                    </div>
                                
                                </div>
                                <div>
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N1,234,987.00</p>
                                </div>
                            </div>

                             {/*investment head  */}
                             <div className="myTable" style={{marginBottom: 10}}>
                                <div className="myHead" >
                                    {/*heading row */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="withdrawColumn">
                                            Amount
                                            </div>
                                    <div className="withdrawColumn">
                                            Plan
                                    </div>
                                    
                                    <div className="withdrawColumn">
                                        Date
                                    </div>
                                    <div className="withdrawColumn" style={{color: '#7031BD'}}>
                                        Status
                                    </div>
                                       
                                    </div>

                                    {/* actual data */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                        N 1,250,768.00
                                            </div>
                                    <div className="investColumn">
                                    Gelato (1 month)
                                    </div>
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#00B227'}}>
                                        Active
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                    <div className="investColumn">
                                    Honourable (3 month)
                                    </div>
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#FF0000'}}>
                                        Completed
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                    <div className="investColumn">
                                    Honourable (3 month)
                                    </div>
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#FF0000'}}>
                                        Completed
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                    <div className="investColumn">
                                    Honourable (3 month)
                                    </div>
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#FF0000'}}>
                                        Completed
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                        N 50,768.00
                                            </div>
                                    <div className="investColumn">
                                    Gelato (1 month)
                                    </div>
                                    
                                    <div className="investColumn">
                                    7 Jan, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#FF0000'}}>
                                        Completed
                                    </div>
                                       
                                    </div>

                                </div>

                            </div>

                        </div>
                            {/* withdrawal */}
                            <div className="col-lg-4">
                                <div className="investment">
                                <div>
                                    <div style={{ display: "flex" }}>
                                    <img
                                        alt=""
                                        src="/img/Total_Withdrawal.svg"
                                        className="img-fluid"
                                    />
                                    <p className="mb-0 ml-2" style={{color: '#333334', fontWeight: 600}}>Withdrawal</p>
                                    </div>
                                
                                </div>
                                <div>
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N1,234,987.00</p>
                                </div>
                            </div>

                             {/*investment head  */}
                             <div className="myTable" style={{marginBottom: 10}}>
                                <div className="myHead" >
                                    {/*heading row */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="withdrawColumn">
                                            Amount
                                            </div>
                                        
                                        <div className="withdrawColumn">
                                            Date
                                        </div>
                                        <div className="withdrawColumn" style={{color: '#7031BD'}}>
                                        Status
                                    </div>
                                       
                                    </div>

                                    {/* actual data */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                        N 1,250,768.00
                                            </div>
                                    
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#00B227'}}>
                                        Paid
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#FF0000'}}>
                                        Declined
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#00B227'}}>
                                        Paid
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                    
                                    
                                    <div className="investColumn">
                                    12 Feb, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#00B227'}}>
                                        Paid
                                    </div>
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                        N 50,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn">
                                    7 Jan, 2021
                                    </div>
                                    <div className="investColumn" style={{color: '#00B227'}}>
                                        Paid
                                    </div>
                                       
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* balance */}
                        <div className="col-lg-3">
                            <div className="balance">
                                <div>
                                    <div style={{ display: "flex" }}>
                                    <img
                                        alt=""
                                        src="/img/Total_Balance.svg"
                                        className="img-fluid"
                                    />
                                    <p className="mb-0 ml-2" style={{color: '#333334', fontWeight: 600}}>Balance</p>
                                    </div>
                                
                                </div>
                                <div>
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N1,234,987.00</p>
                                </div>
                            </div>

                            <div className="myTable" style={{marginBottom: 10}}>
                                <div className="myHead" >
                                    {/*heading row */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="withdrawColumn">
                                            Amount
                                            </div>
                                        
                                        <div className="withdrawColumn" style={{textAlign: 'right'}}>
                                            Date
                                        </div>
                                       
                                    </div>

                                    {/* actual data */}
                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn" style={{color: '#FF3535', fontWeight: 600}}>
                                        N 1,250,768.00
                                            </div>
                                    
                                    
                                    <div className="investColumn" style={{textAlign: 'right'}}>
                                    12 Feb, 2021
                                    </div>
                                   
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn"  style={{color: '#FF3535', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn" style={{textAlign: 'right'}}>
                                    12 Feb, 2021
                                    </div>
                                    
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn"  style={{color: '#FF3535', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn" style={{textAlign: 'right'}}>
                                    12 Feb, 2021
                                    </div>
                                  
                                       
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn"  style={{color: '#FF3535', fontWeight: 600}}>
                                        N 250,768.00
                                            </div>
                                    
                                    
                                    <div className="investColumn" style={{textAlign: 'right'}}>
                                    12 Feb, 2021
                                    </div>
                                   
                                    </div>

                                    <div className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}>
                                        <div className="investColumn"  style={{color: '#FF3535', fontWeight: 600}}>
                                        N 50,768.00
                                            </div>
                                   
                                    
                                    <div className="investColumn" style={{textAlign: 'right'}}>
                                    7 Jan, 2021
                                    </div>
                                  
                                    </div>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                    {/* view more button */}
                    <div className="mt-3 mb-4">
                        <button className="btn view-more"  style={{width: '100%'}}>
                            View More
                        </button>
                    </div>




                </div>
            </div>

        </div>
    );
}
 
export default UsersDetails;