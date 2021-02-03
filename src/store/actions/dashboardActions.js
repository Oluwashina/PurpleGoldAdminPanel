import {apiUrl} from '../config'
import axios from 'axios'
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
        const res = await axios.get(apiUrl + "reports/funding?time="+time+"&user="+user+"&limit="+5, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Funding", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Funding_Error", err: err.response?.data?.message });
      }
    };
  };

  // get all fundigg without limit functionlaity
  export const AllFunding = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
        const res = await axios.get(apiUrl + "reports/funding?time="+time+"&user="+user, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Funding", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Funding_Error", err: err.response?.data?.message });
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
      const res = await axios.get(apiUrl + "reports/"+type+"?time="+time+"&user="+user, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        dispatch({ type: "ChartData", data: res.data.data});
      }
    } catch (err) {
      dispatch({ type: "Chart_Error", err: err.response?.data?.message });
    }
  };
};
  
  // dashboard count
  export const DashboardCount = (values) => {
    return async (dispatch, getState) => {
      try {
          const user = values
        const res = await axios.get(apiUrl + "dahboard_count?time=year&user="+user, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Dashboard_Count", data: res.data.data});
          dispatch({type: 'Stop_Loader'})
        }
      } catch (err) {
        dispatch({ type: "Count_Error", err: err.response?.data?.message });
      }
    };
  };
  
// Get funding data for month,year, and week functionality
export const AllPayouts = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        const user = values.user
      const res = await axios.get(apiUrl + "reports/upcoming_payouts?time="+time+"&user="+user, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        dispatch({ type: "Payout", data: res.data.data});
      }
    } catch (err) {
      dispatch({ type: "Payout_Error", err: err.response?.data?.message });
    }
  };
};

// get all payouts functionlality
export const Payouts = (values) => {
  return async (dispatch, getState) => {
    try {
        const time = values.time
        const user = values.user
      const res = await axios.get(apiUrl + "reports/upcoming_payouts?time="+time+"&user="+user+"&limit=5", {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        dispatch({ type: "Payout", data: res.data.data});
      }
    } catch (err) {
      dispatch({ type: "Payout_Error", err: err.response?.data?.message });
    }
  };
};


// Get funding data for month,year, and week functionality
export const CardToggle = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "ToggleCard", data: value });
  };
};









  