import cogoToast from 'cogo-toast';
import {GetApi, PutApi} from '../helpers'


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
        const res = await GetApi("withdrawal_request?time="+time+"&user="+user+"&status="+status, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "WithdrawRequest", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Withdraw_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
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
        const res = await GetApi("withdrawal_request?time="+time+"&user="+user+"&status="+status, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "ProcessingRequest", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Process_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
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
        const res = await GetApi("withdrawal_request?time="+time+"&user="+user+"&status="+status, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "PaidRequest", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Paid_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
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
        const res = await GetApi("withdrawal_request?time="+time+"&user="+user+"&status="+status, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "DeclinedRequest", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Declined_Error", err: res.data });
        }   
      } catch (err) {
        console.log(err)
      }
    };
  };


//   get withdraw count
export const WithdrawCount = (values) => {
return async (dispatch, getState) => {
    try {
        const user = values.user
        const time = values.time
    const res = await GetApi("withdrawal_request_count?time="+time+"&user="+user,getToken());
      if (res.status === 200) {
          console.log(res)
          dispatch({ type: "Request_Count", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "WithdrawCount_Error", err: res.data});
      } 
    } catch (err) {
        console.log(err)
    }
};
};

// process withdrawal request with status processing
export const ProcessWithdrawal = (values) => {

  return async (dispatch, getState) => {

    dispatch({ type: "Process_Loader", data: values.withdrawalId });

    try {
      const res = await PutApi("withdrawal_request_status", {...values}, getToken());
      if (res.status === 200) {
        dispatch({ type: "StopProcessLoader" });
        dispatch({type: 'Process_Success'})
        cogoToast.success('Sucessful! Your request has been processed', { position: 'top-center', heading: 'PurpleGold' })
        }
      if(res.status === 400){
        dispatch({ type: "StopProcessLoader" });
        cogoToast.error('Error while processing request!')
      }
    } catch (err) {
      console.log(err)
    }
  }
}

  // process withdrawal request with the status paid
  export const ProcessPaid = (values) => {

    return async (dispatch, getState) => {
  
      dispatch({ type: "Paid_Loader", data: values.withdrawalId });
  
      try {
        const res = await PutApi("withdrawal_request_status", {...values}, getToken());
        if (res.status === 200) {
          dispatch({ type: "StopPaidLoader" });
          dispatch({type: 'Process_Success'})
          cogoToast.success('Sucessful! Request confirmed as paid.', { position: 'top-center', heading: 'PurpleGold'  })
          } 
        if(res.status === 400){
          dispatch({ type: "StopPaidLoader" });
          cogoToast.error('Error while processing request!')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }


  //  process withdrawal request with status declined
  export const ProcessDeclined = (values) => {

    return async (dispatch, getState) => {
  
      dispatch({ type: "Declined_Loader",  data: values.withdrawalId  });
  
      try {
        const res = await PutApi("withdrawal_request_status", {...values}, getToken());
        if (res.status === 200) {
          dispatch({ type: "StopDeclinedLoader" });
          dispatch({type: 'Process_Success'})
          cogoToast.success('Your request has been declined successfully', { position: 'top-center', heading: 'PurpleGold' })
          } 
        if(res.status === 400){
          dispatch({ type: "StopDeclinedLoader" });
          cogoToast.error('Error while processing request!')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  
 

