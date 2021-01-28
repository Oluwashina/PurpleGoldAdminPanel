import {apiUrl} from '../config'
import axios from 'axios'
// import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week functionality
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








  