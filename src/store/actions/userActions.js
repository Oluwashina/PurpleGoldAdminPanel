import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week functionality
export const getAllUsers = (values) => {
    return async (dispatch, getState) => {
      try {
        const value = values.filter
        const res = await axios.get(apiUrl + "admin/investors?status="+value, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "AllUsers", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Users_Error", err: err.response?.data?.message });
      }
    };
  };

  // get users by id
  export const GetUserById = (value) =>{
    return async (dispatch, getState) => {
      try {
        const time = value.time
        const id = value.id
        const res = await axios.get(apiUrl + "admin/investors/"+id+"?time="+time, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "UserDetails", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Error_User", err: err.response?.data?.message });
      }
    };
  }

  // suspend a user functionality
  export const SuspendUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      try {
        const res = await axios.patch(apiUrl + "admin/deactivate_user", { ...user }, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad"})
          cogoToast.success('User successfully suspended!', { position: 'top-center', })
        }
      } catch (err) {
        // var message = err.response.data
        dispatch({ type: "StopSuspendLoader" });
        cogoToast.error('Error while suspending user')
      }
    };
  }

  // activate a user
  export const ActivateUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      try {
        const res = await axios.patch(apiUrl + "admin/activate_user", { ...user }, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad"})
          cogoToast.success('User successfully activated!', { position: 'top-center', })
        }
      } catch (err) {
        // var message = err.response.data
        dispatch({ type: "StopSuspendLoader" });
        cogoToast.error('Error while activating user')
      }
    }
  }
  

//   get count for all users
export const UsersCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(apiUrl + "user_count?user=INVESTOR", {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Users_Count", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Count_Error", err: err.response?.data?.message });
      }
    };
  };











  