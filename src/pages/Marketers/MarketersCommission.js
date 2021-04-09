import SideBar from "../../components/SideBar/SideBar";
import React, {useEffect} from 'react'
import './marketers.css'
import PurpleLogo from '../Marketers/img/purpleboxlogo.png'
import {connect} from 'react-redux'
import { getMarketers, getMarketersProfile } from "../../store/actions/marketersActions";


function MarketersCommission(props){

    const {getAllMarketers, allMarketers, getProfile, history} = props

      // Get all marketers performance data
      useEffect(() => {
        getAllMarketers()
    }, [getAllMarketers]);

    
    // mapping out all marketers commission boardd
const marketersCommLayout = allMarketers.length ? (
    allMarketers.map((value) => {
      return (
        <div key={value.id} className="marketers-row mb-3">
            <div className="marketers-column">
                    <div>
                <p className="mb-0 box-p">{value.firstname} {value.lastname}</p>
                </div>
            </div>
            
            <div className="marketers-column">
                <div>
                <p className="mb-0 box-p">{value.email}</p>
                </div>
            </div>

            <div className="marketers-double-column text-center">
                    {/* status row */}
                    <div style={{display: 'flex'}}>
                        <div className="green-div" style={{marginRight: '2%'}}>   
                            <p className="mb-0 green-text" style={{fontSize: 12}}>Inflow ({value.inflow})</p>
                        </div>
                        <div className="pink-div" style={{marginRight: '2%'}}>   
                            <p className="mb-0 pink-text" style={{fontSize: 12}}>Total Commission ({value.commission})</p>
                        </div>
                        <div className="purple-div">   
                            <p className="mb-0 purple-text" style={{fontSize: 12}}>Total Commission Paid ({value.totalCommissionPaid})</p>
                        </div>
                    </div>
            </div>

            <div className="marketers-column">
                 <div  onClick={()=>{handleRoute(value.id)}}  className="view-all" style={{textDecoration: 'none', width: '100px', margin: '0 auto'}}>
                    <p className="mb-0"><i className="mdi mdi-plus mr-1" style={{color: '#7031BD', fontWeight: 'bold', fontSize: 15}}></i>View All</p>
                 </div>
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
  );

  const handleRoute = (id) =>{
    //   dispatch and filter by 
    getProfile(id)
    history.push('/commission/marketer/'+id)
  }


    return(
        <div style={{backgroundColor: '#f5f6f8'}}>
             <SideBar />
             <div className="main">
                <div className="contain">

                {/* withdraw layout */}
                <div className="row mt-4 mb-5">
                    <div className="col-lg-12">

                        {/* marketers performance */}
                        <div className="box mt-4">
                            {/* title 1 */}
                            <div className="box-title mb-3">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={PurpleLogo} className="img-fluid" alt="logo" />
                                        <div className="ml-3">
                                            <p className="mb-0 box-title-p">Purple Gold</p>
                                            <p className="mb-0 box-subtitle">Commission Board</p>
                                        </div>
                                </div>
                                
                            </div>

                            {/* title 2 */}
                            {/* marketers commision board */}
                            {marketersCommLayout}                               

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
        allMarketers: state.marketer.allMarketers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getAllMarketers: () => dispatch(getMarketers()),
        getProfile: (id) => dispatch(getMarketersProfile(id))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MarketersCommission);