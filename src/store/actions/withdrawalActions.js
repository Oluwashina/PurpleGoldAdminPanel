import {apiUrl} from '../config'
import axios from 'axios'
// import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}



// Get pending withdrawal request data for month,year, and week functionality
export const NewRequest = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const status = values.status
        const res = await axios.get(apiUrl + "withdrawal_request?time="+time+"&user="+user+"&status="+status, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "WithdrawRequest", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Withdraw_Error", err: err.response?.data?.message });
      }
    };
  };

  // Get processing withdrawal request data for month,year, and week functionality
export const ProcessingRequest = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const status = values.status
        const res = await axios.get(apiUrl + "withdrawal_request?time="+time+"&user="+user+"&status="+status, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "ProcessingRequest", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Process_Error", err: err.response?.data?.message });
      }
    };
  };

    // Get paid withdrawal request data for month,year, and week functionality
export const PaidRequest = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const status = values.status
        const res = await axios.get(apiUrl + "withdrawal_request?time="+time+"&user="+user+"&status="+status, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "PaidRequest", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Paid_Error", err: err.response?.data?.message });
      }
    };
  };

      // Get declined withdrawal request data for month,year, and week functionality
export const DeclinedRequest = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const status = values.status
        const res = await axios.get(apiUrl + "withdrawal_request?time="+time+"&user="+user+"&status="+status, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "DeclinedRequest", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Declined_Error", err: err.response?.data?.message });
      }
    };
  };


//   get withdraw count
export const WithdrawCount = (values) => {
return async (dispatch, getState) => {
    try {
        const user = values.user
        const time = values.time
    const res = await axios.get(apiUrl + "withdrawal_request_count?time="+time+"&user="+user, {
        headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
        }
        });
    if (res.status === 200) {
        console.log(res)
        dispatch({ type: "Request_Count", data: res.data.data});
    }
    } catch (err) {
    dispatch({ type: "WithdrawCount_Error", err: err.response?.data?.message });
    }
};
};





