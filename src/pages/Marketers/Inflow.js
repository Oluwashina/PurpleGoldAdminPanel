import SideBar from "../../components/SideBar/SideBar";
import React, {useState, useEffect} from 'react'
import './marketers.css'
import {connect} from 'react-redux'
import { getMarketersWithFilters } from "../../store/actions/marketersActions";


function MarketersInflow(props){

    const {getAllMarketersInflow, getInflow} = props

    
      // Get all marketers performance data
    useEffect(() => {
        const values = {
            time: "last_month",
          };
          getAllMarketersInflow(values)
    }, [getAllMarketersInflow]);

    const [inflow, setFund] = useState(1);

    const [inflowData] = useState([
        { id: 1, name: "tab-1", text: "Last Month", value: "1" },
        { id: 2, name: "tab-2", text: "This Month", value: "2" },
        { id: 3, name: "tab-3", text: "This Year", value: "3" },
      ]);

    const inflowFilterLayout = inflowData.map((item) => (
        <div
          key={item.id}
          className={inflow === item.id ? "inflow-tab active-inflow" : "inflow-tab"}
          onClick={() => inflowToggle(item.id)}
        >
          <p className="mb-0">{item.text}</p>
        </div>
      ));

    
  const inflowToggle = (val) => {
    setFund(val);
    var values;
    switch (val) {
      case 1:
        values = {
          time: "last_month",
          user: "MARKETER",
        };
        getAllMarketersInflow(values);
        break;
      case 2:
        values = {
          time: "month",
          user: "MARKETER",
        };
        getAllMarketersInflow(values);
        break;
      case 3:
        values = {
          time: "year",
          user: "MARKETER",
        };
        getAllMarketersInflow(values);
        break;
      default:
        console.log("Today");
    }
  };


  //   map marketers inflow layout
const marketersInflowLayout = getInflow.length ? (
    getInflow.map((value) => {
      return (  
        <div key={value.id} className="mt-4" style={{background: 'rgba(146, 134, 233, 0.12)', borderRadius: '10px', padding: '15px 20px', display: 'flex', justifyContent: 'space-between'}}>

        {/* name  */}
        <div style={{background: 'rgba(219, 214, 255, 0.73)', border: '0.5px solid #9464CE', borderRadius: '10px', padding: '5px 25px'}}>
            <p className="mb-0" style={{fontSize: 14, color: '#7A50B9', fontWeight: 'bold'}}>{value.firstname} {value.lastname}</p>
        </div>

        <div style={{background: 'rgba(219, 214, 255, 0.73)', border: '0.5px solid #9464CE', borderRadius: '10px', padding: '5px 25px'}}>
            <p className="mb-0" style={{fontSize: 14, color: '#7A50B9', fontWeight: 'bold'}}>{value.email}</p>
        </div>

        <div style={{background: 'rgba(219, 214, 255, 0.73)', border: '0.5px solid #9464CE', borderRadius: '10px', padding: '5px 25px'}}>
            <p className="mb-0" style={{fontSize: 14, color: '#9E079E', fontWeight: 'bold'}}>{value.referralCode ? value.referralCode : "No code yet"}</p>
        </div>

        <div style={{background: 'rgba(219, 214, 255, 0.73)', border: '0.5px solid #9464CE', borderRadius: '10px', padding: '5px 25px'}}> 
            <p className="mb-0" style={{fontSize: 14, color: '#7A50B9', fontWeight: 'bold'}}>N {value.inflow} </p>
        </div>

    </div>
      );
    })
  ) : (
    <p
      className="text-center mt-3"
      style={{ fontStyle: "normal" }}
    >
      No marketer's inflow yet!
    </p>
  );

    return(
        <div>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12">

                        {/* marketers performance */}
                        <div className="box mt-4" style={{padding: '40px 30px'}}>


                            {/* Filter 1 */}        
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="inflow-div">{inflowFilterLayout}</div>
                            </div>

                            {/* records */}
                            <div className="row">
                                <div className="col-lg-12">

                                    {marketersInflowLayout}


                                </div>
                            </div>

                        </div>

            

                    </div>
                    
                </div>


             </div>
         </div>
      </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        getInflow: state.marketer.MarketersInflow  
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getAllMarketersInflow: (value) => dispatch(getMarketersWithFilters(value)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MarketersInflow);