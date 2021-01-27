import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}



// verify email actions functionality
export const VerifyEmail = (values) => {
    return async (dispatch, getState) => {
       // loader
      dispatch({ type: "Loader" });
      try {
          const email = values.email
        const res = await axios.get(apiUrl + "user/"+email, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Email_Valid", data: res.data.data });
          dispatch({ type: "Fund_Details", data: values });
          dispatch({ type: "Stop_Loader" });
        }
      } catch (err) {
        dispatch({ type: "Email_Error", err: err.response?.data?.message });
        cogoToast.error('Email Address not valid!')
        dispatch({ type: "Stop_Loader" });
      }
    };
  };


//   cancel funding functionality
  export const CancelFund = () => {
    return (dispatch, getState) => {
      dispatch({ type: "CancelFund" });
    };
  };


//   Confirm funding functionality
export const ConfirmFund = () => ((dispatch, getState) => {
   // loader
   dispatch({ type: "Loader" });

   const data ={
    amount: getState().fund.amount,
    userId: getState().fund.userId
   } 
    axios.post(apiUrl + "transactions/fund_wallet", data, {
        headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
        }
    }).then((res) => {
        if (res.status === 201) {
        dispatch({ type: "Stop_Loader" });
        cogoToast.success('Wallet has been successfully funded!', { position: 'bottom-right', })
        dispatch({ type: "CancelFund" });
        } 
    }).catch((err) => {
      dispatch({ type: "Stop_Loader" });
        cogoToast.error('Error while funding wallet!')
    })
  });
  

  