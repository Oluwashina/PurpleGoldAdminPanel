import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';


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

// process withdrawal request with status processing
export const ProcessWithdrawal = (values) => ((dispatch, getState) => {
   // loader
   dispatch({ type: "Process_Loader" });
    axios.put(apiUrl + "withdrawal_request_status", {...values}, {
        headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
        }
    }).then((res) => {
        if (res.status === 200) {
        dispatch({ type: "StopProcessLoader" });
        cogoToast.success('Sucessful! Your request has been processed', { position: 'top-center', heading: 'PurpleGold' })
        } 
    }).catch((err) => {
      dispatch({ type: "StopProcessLoader" });
        cogoToast.error('Error while processing request!')
    })
  });

  // process withdrawal request with the status paid
  export const ProcessPaid = (values) => ((dispatch, getState) => {
    // loader
    dispatch({ type: "Paid_Loader" });
     axios.put(apiUrl + "withdrawal_request_status", {...values}, {
         headers: {
             Accept: 'application/json',
             appID: 'PGADMIN',
             Authorization: getToken()
         }
     }).then((res) => {
         if (res.status === 200) {
         dispatch({ type: "StopPaidLoader" });
         cogoToast.success('Sucessful! Request confirmed as paid.', { position: 'top-center', heading: 'PurpleGold'  })
         } 
     }).catch((err) => {
       dispatch({ type: "StopPaidLoader" });
         cogoToast.error('Error while processing request!')
     })
   });

  //  process withdrawal request with status declined
  export const ProcessDeclined = (values) => ((dispatch, getState) => {
    // loader
    dispatch({ type: "Declined_Loader" });
     axios.put(apiUrl + "withdrawal_request_status", {...values}, {
         headers: {
             Accept: 'application/json',
             appID: 'PGADMIN',
             Authorization: getToken()
         }
     }).then((res) => {
         if (res.status === 200) {
         dispatch({ type: "StopDeclinedLoader" });
         cogoToast.success('Your request has been declined successfully', { position: 'top-center', heading: 'PurpleGold' })
         } 
     }).catch((err) => {
       dispatch({ type: "StopDeclinedLoader" });
         cogoToast.error('Error while processing request!')
     })
   });
 

