import SideBar from "../../components/SideBar/SideBar";
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { GetUserById, SuspendUser, ActivateUser } from "../../store/actions/userActions";
import Moment from 'moment';

const UsersDetails = (props) => {

    const {history,getDetails, match, firstname, lastname, createdAt,
         email, dob,
         phoneNumber, houseOfResidence,
         bank, accountNumber,
        walletBalance, totalAmountInvested, totalWithdrawn, susloader, HandleSuspend,
         HandleActivate, isActive, success, walletActions, withdrawals, investments, imageUrl} = props

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
        var values;
        switch(id){
            case 1:
              values = {
                    time: 'today',
                    id: match.params.id
                }
             getDetails(values)
                break;
            case 2:
                values = {
                    time: 'week',
                    id: match.params.id
                }
             getDetails(values)
             break;
             case 3:
                values = {
                    time: 'month',
                    id: match.params.id
                }
             getDetails(values)
                 break;
             case 4:
                values = {
                    time: 'year',
                    id: match.params.id
                }
             getDetails(values)
                 break;
             default:
                 console.log("Today")
        }
      }

      const GoBack = () =>{
          history.push("/users")
      }

      const Suspend = (id) =>{
        const values = {
            id
        }
        if(isActive){
            HandleSuspend(values)
        }
        else{
           HandleActivate(values)
        }
        
      }

         // Get all funding data
    useEffect(() =>{
        const values = {
            time: 'today',
            id: match.params.id
        }
        getDetails(values)
    },[getDetails, match])

    // call the api again after a user is suspended or activated
    useEffect(() =>{
        const values = {
            time: 'today',
            id: match.params.id
        }
        if(success){
            getDetails(values)
        }
        
    },[getDetails, match, success])

    let image;
    switch(imageUrl){
        case "":
        image = "../img/profile.svg"  
        break;
        case null:
            image = "../img/profile.svg" 
        break;
        case "/profile_pics.jpg":
            image = "../img/profile.svg" 
        break;
        default:
        image = imageUrl 
    }


    return (  
        <div>
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
                        <button 
                         className={ isActive ? 'btn btn-suspend' : 'btn btn-active'}
                        disabled={susloader}
                         onClick={() => Suspend(match.params.id)}
                            >
                                {isActive ? (
                                        "Suspend"
                                    ) : (
                                            "Restore"
                                 )}</button>
                        </div>

                        {/* when user joined and avatar */}
                        <div className="col-lg-3">
                        <div style={{ display: "flex" }}>
                            <div>
                              <img
                                src={ image}
                                className="img-fluid userProfile"
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
                               {firstname} {lastname}
                              </p>
                              <p
                                className="mb-0"
                                style={{
                                  color: "#9E079E",
                                  fontWeight: 600,
                                  fontSize: 14,
                                }}
                              >
                                Joined: {Moment(createdAt).format('MMMM Do, YYYY')}        
                              </p>
                              <p
                                className="mb-0"
                                style={{
                                  color: "#000000",
                                  fontWeight: 400,
                                  fontSize: 15,
                                }}
                              >
                               <span style={{fontWeight: 700}}>DOB:</span>  {!dob ? "" : Moment(dob).format('MMMM Do, YYYY')}
                              </p>
                              
                            </div>
                          </div>
                        </div>

                    </div>

                    {/* other profile details */}

                    <div
                        className="mt-4"
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        }}
                    >
                        <div className="profile-div">
                            {/* first part */}
                            <div style={{borderRight: '0.2px solid #9286E9', padding: '10px 30px'}}>
                                <p className="mb-0">{email}</p>
                                <p className="mb-0">{phoneNumber}</p>
                                <p className="mb-0"
                                style={{fontWeight: 600}}
                                >{!bank ? "Bank details not updated yet" : `${bank} : `}  {!accountNumber ? "" : accountNumber}</p>
                            </div>
                            {/* second part */}
                            <div style={{padding: '10px 30px'}}>
                                <p className="mb-0">{!houseOfResidence ? "Address not updated yet!" : houseOfResidence}</p>
                            </div>
                        </div>
                    </div>


                                

                    {/* investment, withdrawal and balance table for all users */}
                    <div className="row mt-5">
                        {/* investments */}
                        <div className="col-lg-4">
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
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N {parseFloat(totalAmountInvested).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
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
                                    {/* <div className="withdrawColumn">
                                            Plan
                                    </div> */}
                                    
                                    <div className="withdrawColumn">
                                        Date
                                    </div>
                                    <div className="withdrawColumn" style={{color: '#7031BD'}}>
                                        Status
                                    </div>
                                       
                                    </div>


                                    {investments.length ? (
                                    investments.map((value, index) => {
                                        var date;
                                        date = Moment(value.createdAt).format('Do MMM, YYYY')
                                       
                                        return (
                                        <div
                                            key={index}
                                            className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}
                                        >
                                          
                                          <div className="investColumn" style={{color: '#A030A8', fontWeight: 600}}>
                                                 N {parseFloat(value.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                 <br />
                                                <span style={{fontSize: 12, color: '#000000'}}> {value.planName} ({value.duration} {value.duration > 1 ? "months" : "month"})</span>
                                            </div>

                                            {/* <div className="investColumn">
                                                {value.planName} ({value.duration} {value.duration > 1 ? "months" : "month"})
                                                </div> */}

                                            <div className="investColumn" >
                                            
                                                {date}
                                                
                                            </div>

                                            <div className="investColumn" 
                                            style={{color: '#00B227'}}>
                                                {value.status}
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

                                    {/* actual data */}

                                    

                                </div>

                            </div>

                            {/* what to display when there is no data */}
                            <div className="text-center mt-1">
                                {investments.length ? "" :  <p style={{fontStyle: 'italic', fontSize: 15}}>No Investments history</p>} 
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
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N {parseFloat(totalWithdrawn).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                            </div>

                             {/*Withdrawal head  */}
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

                                    {withdrawals.length ? (
                                    withdrawals.map((value, index) => {
                                        var date;
                                        date = Moment(value.createdAt).format('Do MMM, YYYY')
                                        return (
                                        <div
                                            key={index}
                                            className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}
                                        >
                                          
                                          <div className="investColumn" style={{color: '#FE20BE', fontWeight: 600}}>
                                                 N {parseFloat(value.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </div>

                                            <div className="investColumn">
                                             
                                               
                                                {date}
                                                
                                            </div>

                                            <div className="investColumn" >
                                                    <p className="mb-0"
                                                    style={ { color: value.status === "PAID" ? '#00B227' : '#ff0000' } } 
                                                    >{value.status}</p>
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

                                    {/* actual data */}
                        

                                </div>
                            </div>

                             {/* what to display when there is no data */}
                             <div className="text-center mt-1">
                                {withdrawals.length ? "" :  <p style={{fontStyle: 'italic', fontSize: 15}}>No Withdrawal history</p>} 
                                </div>

                        </div>

                        {/* balance */}
                        <div className="col-lg-4">
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
                                    <p className="mb-0"  style={{color: '#333334', fontWeight: 600}}>Total: N { parseFloat(walletBalance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
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


                                    {walletActions.length ? (
                                    walletActions.map((data) => {
                                        var date;
                                        date = Moment(data.createdAt).format('Do MMM, YYYY')

                                        return (
                                        <div
                                            key={data.id}
                                            className="myRow" style={{background: '#FFFFFF', boxShadow: '0px 10px 10px 10px #F4F4F5', borderRadius: '10px'}}
                                        >
                                          
                                          <div className="investColumn"
                                            style={{ color: data.type === "DEBIT" ? '#FF3535' : '#00B227', fontWeight: 600 } } 
                                            >
                                                 N { !data.balanceAfter ? "0.00" : parseFloat(data.balanceAfter).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </div>

                                            <div className="investColumn" style={{textAlign: 'right', fontSize: 12}}>
                                                                                           
                                                {date} 

                                                <br />
                                                <span style={{fontSize: 12, fontWeight: 'bold'}}>({data.refDesc})</span> 
                                                
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
                                        {/* actual data */}

                                </div>

                            </div>

                            {/* what to display when there is no data */}
                            <div className="text-center mt-1">
                                {walletActions.length ? "" :  <p style={{fontStyle: 'italic'}}>No balance history</p>} 
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


const mapStateToProps = (state) => {
    return {
        user: state.user.userDetails,
        susloader: state.user.susloader,
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        createdAt: state.user.createdAt,
        dob: state.user.dob,
        email: state.user.email,
        phoneNumber: state.user.phoneNumber,
        bank: state.user.bank,
        accountNumber: state.user.accountNumber,
        houseOfResidence: state.user.houseOfResidence,
        totalAmountInvested: state.user.totalAmountInvested,
        totalWithdrawn: state.user.totalWithdrawn,
        walletBalance: state.user.walletBalance,
        isActive: state.user.isActive,
        success: state.user.success,
        walletActions: state.user.walletActions,
        withdrawals: state.user.withdrawals,
        investments: state.user.investments,
        imageUrl: state.user.imageUrl,
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    getDetails: (value) => dispatch(GetUserById(value)),
    HandleSuspend: (value) => dispatch(SuspendUser(value)),
    HandleActivate: (value) => dispatch(ActivateUser(value)),
 };
};


 
export default connect(mapStateToProps, mapDispatchToProps)(UsersDetails);