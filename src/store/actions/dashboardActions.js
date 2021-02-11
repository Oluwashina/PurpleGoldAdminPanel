import {GetApi} from '../helpers'
// import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week with limit functionality
export const Funding = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
        const res = await GetApi("reports/funding?time="+time+"&user="+user+"&limit="+5, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "Funding", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Funding_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  // get all fundigg without limit functionlaity
  export const AllFunding = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
        const res = await GetApi("reports/funding?time="+time+"&user="+user, getToken());
        if (res.status === 200) {
          
          dispatch({ type: "Funding", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Funding_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  // Get chart  data for month,year, and week functionality
export const ChartRequest = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        const user = values.user
        const type = values.type
      const res = await GetApi("reports/"+type+"?time="+time+"&user="+user, getToken());
      if (res.status === 200) {
          
        dispatch({ type: "ChartData", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "Chart_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};
  
  // dashboard count
  export const DashboardCount = (values) => {
    return async (dispatch, getState) => {
      dispatch({type: 'Start_Loader'})
      try {
          const user = values
        const res = await GetApi("dahboard_count?time=year&user="+user, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "Dashboard_Count", data: res.data.data});
          dispatch({type: 'Stop_Loader'})
        }
        if(res.status === 400){
          dispatch({ type: "Count_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };
  
// Get funding data for month,year, and week functionality
export const AllPayouts = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        const user = values.user
      const res = await GetApi("reports/upcoming_payouts?time="+time+"&user="+user, getToken());
      if (res.status === 200) {
         
        dispatch({ type: "Payout", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "Payout_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// get all payouts functionlality
export const Payouts = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        const user = values.user
      const res = await GetApi("reports/upcoming_payouts?time="+time+"&user="+user+"&limit=5", getToken());
      if (res.status === 200) {
          
        dispatch({ type: "Payout", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "Payout_Error", err: res.data});
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// get all investments by filter functionality
export const Investment = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        if(time === "today"){
          const res = await GetApi("investor/invest?time="+time+"&status=ACTIVE&limit=5", getToken());
          if (res.status === 200) {
              
            dispatch({ type: "TodayInvest", data: res.data.data});
          }
          if(res.status === 400){
            dispatch({ type: "Investment_Error", err: res.data});
          }
        }
        else{
          const res = await GetApi("investor/invest?time="+time+"&status=ACTIVE&limit=5", getToken());
          if (res.status === 200) {
            dispatch({ type: "Investment", data: res.data.data});
          }
          if(res.status === 400){
            dispatch({ type: "Investment_Error", err: res.data});
          }
        }
     
    } catch (err) {
      console.log(err)
    }
  };
};

// get all investments functionlality
export const InvestmentAll = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
      const res = await GetApi("investor/invest?time="+time+"&status=ACTIVE", getToken());
      if (res.status === 200) {
        
        dispatch({ type: "Investment", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "Investment_Error", err: res.data});
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// Get funding data for month,year, and week functionality
export const CardToggle = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "ToggleCard", data: value });
  };
};









  