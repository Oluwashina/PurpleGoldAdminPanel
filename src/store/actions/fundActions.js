
import cogoToast from 'cogo-toast';
import { GetApi, PostApi } from '../helpers';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}



// verify email actions functionality
export const VerifyEmail = (values) => {
    return async (dispatch, getState) => {
      try {
          const email = values.email
        const res = await GetApi("user/"+email, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Email_Valid", data: res.data.data });
          dispatch({ type: "Fund_Details", data: values });
        }
        if(res.status === 400 || res.status === 404){
          dispatch({ type: "Email_Error", err: res.data });
          cogoToast.error('Email Address not valid!')
        }
      } catch (err) {
        console.log(err)
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
export const ConfirmFund = () => {

  return async (dispatch, getState) => {

    dispatch({ type: "Loader" });

    const data = {
     amount: getState().fund.amount,
     userId: getState().fund.userId
    }

    try {
      const res = await PostApi("transactions/fund_wallet", { ...data }, getToken(), "application/json");
      if (res.status === 201) {
          console.log(res)
          dispatch({ type: "Stop_Loader" });
          dispatch({ type: "Fund_Successful" });
          cogoToast.success('Wallet has been successfully funded!', { position: 'top-center',heading: 'PurpleGold' } )
          dispatch({ type: "CancelFund" });
      }
      if(res.status === 400){
        dispatch({ type: "Stop_Loader" });
        cogoToast.error('Error while funding wallet!',{ position: 'top-center',heading: 'PurpleGold' })
      }
    } catch (err) {
      console.log(err)
    }
  }
}